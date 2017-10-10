/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'

import util from '../../utils/help'
let _ = new util();


class Header extends React.Component {

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
