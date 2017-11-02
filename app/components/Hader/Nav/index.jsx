/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link, IndexLink } from 'react-router'

import Item from './Item'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            nav:{
                'main' : {
                    'title': '首页',
                    'url': '/',
                    index:0
                },
                'bangdan' : {
                    'title' : '榜单',
                    'url' : '/top'
                },
                'indie' : {
                    'title' : '歌手',
                    'url' : '/indie/musician'
                },
                'project':{
                    'title' : '众筹',
                    'url' : '/project'
                },
                'show' : {
                    'title' : '演出',
                    'url' : '/show'
                },
                'tbang' : {
                    'title' : 'T榜',
                    'url' : '/tbang?pst=ydaohang',
                    'isNewpage' : 1
                },
                'app' : {
                    'title' : 'App下载',
                    'url' : '/download/app',
                    'isNewpage' : 1
                },
            }
        }
    }
    render() {
        var items = [];

        for(var list in this.state.nav){
            items.push(<Item key={list} data={this.state.nav[list]} dateType={list} newType={this.props.data}/>)
        }
        return (
            <div className="nav">
                <ul className="cf">
                    {items}
                </ul>
            </div>
        )
    }
}
export default Header
