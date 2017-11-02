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
            data:null,
            initDone:false,
            nav:null
        }
    }

    render() {
        if(this.state.initDone){
            var items_type = [],
                items_class= [];

            for(var genreList in this.state.data){
                items_type.push(<Item key={genreList} yt-data-title={genreList} yt-data-json={this.state.data[genreList]} />)
            }

            for(var genderList in this.state.nav){
                items_class.push(<Item key={genderList} yt-data-title={genderList} yt-data-json={this.state.nav[genderList]} />)
            }
        }
        return (
            <div className="indie-subNav loading-pos">
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
                    :<div className="y_loading"></div>
                }
            </div>

        )
    }

    componentWillMount(){
        _.api('/indie/artist/criteria',{
            method:'post',
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.setState({
                    data: rs.data.genre,
                    nav:rs.data.gender,
                    initDone: true
                })
            }
        });
    }
}
export default IndieSubNav

 