/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'

import util from '../../../utils/help'
let _ = new util();


class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

            nav:{
                'main' : {
                    'title': '首页',
                    'url': '/'
                },
                'bangdan' : {
                    'title' : '榜单',
                    'url' : '/top'
                },
                'indie' : {
                    'title' : '歌手',
                    'url' : '/indie/musician/all/hot/all'
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
                recommend:'推荐',
                product:'产品',
                orderuser:'订奶用户',
            }
        }
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="header" class="sns-header">
                <hgroup class="cf">
                    <a class="logo" href="/">百度音乐人</a>
                    <nav class="nav">
                        <ul class="cf">
                            <li>

                            </li>
                        </ul>
                    </nav>
                    <section class="center-box">
                        <div class="search clearfix">
                            <input type="button" class="search-btn" />
                            <div class="search-input-wrap">
                                <div class="search-input-inner">
                                    <input type="text" placeholder="搜索音乐人、单曲" class="search-input"/>
                                </div>
                                <div class="sub-wrap">
                                    <ul class="sug"></ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="user-info">
                        <p class="loading_data"></p>
                    </section>
                </hgroup>
            </div>
        )
    }
    componentDidMount(){
        console.log(334555);
    }
}
export default Header
