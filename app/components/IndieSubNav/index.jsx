/**
 * Created by Muyi on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'

/**
 * css
 */
import 'less/components/IndieSubNav';

//content
class IndieSubNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:false,
            initDone:false,
            nav:{
                'all' : {
                    'title': '全部',
                    'url': '/',
                },
                'male' : {
                    'title' : '男音乐人',
                    'url' : '/',
                },
                'female' : {
                    'title' : '女音乐人',
                    'url' : '/',
                },
                'band':{
                    'title' : '乐队/组合',
                    'url' : '/',
                },
            }
        }
    }

    render() {
        if(this.state.initDone){
            var items_type = [],
                items_class= [];
            this.state.data['musican_style'].map((list,index)=>{
                items_type.push(<Item key={index} yt-data-json={list} />)
            });
            for(var list in this.state.nav){
                items_class.push(<Item key={list} yt-data-json={this.state.nav[list]} />)
            };
        }
        return (
            <div className="indie-subNav">
                {
                    this.state.initDone
                    ?<div>
                        <div className="indie-class indie-lists clearfix">
                            <h4 className="title">类型</h4>
                            <ul className="clearfix">
                                {items_class}
                            </ul>
                        </div>
                        <div className="indie-type indie-lists clearfix">
                            <h4 className="title">属性</h4>
                            <ul className="clearfix">
                                {items_type}
                            </ul>
                        </div>
                    </div>
                    :'加载中。。。'
                }
            </div>

        )
    }

    componentWillMount(){
        _.api('/app/suggest/artist',{
            method:'post',
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.setState({
                    data: rs.data,
                    initDone: true
                })
            }
        });
    }
}
export default IndieSubNav

 