/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'

import Nav from './Nav'

import util from 'utils/help'
let _ = new util();

import 'lessDir/head';


class Header extends React.Component {
    render() {
        return (
            <div id="header" className="sns-header">
                <hgroup className="cf clearfix">
                    <a className="logo" href="/">百度音乐人</a>
                    <Nav data="banner" />
                    <section className="center-box">
                        <div className="search clearfix">
                            <input type="button" className="search-btn" />
                            <div className="search-input-wrap">
                                <div className="search-input-inner">
                                    <input type="text" placeholder="搜索音乐人、单曲" className="search-input"/>
                                </div>
                                <div className="sub-wrap">
                                    <ul className="sug"></ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="user-info">
                        <p className="loading_data"></p>
                    </section>
                </hgroup>
            </div>
        )
    }
}
export default Header
