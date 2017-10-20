/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import * as Actions from 'actions/index'

import Nav from './Nav'
import UserInfo from './UserInfo'
//let Tpass = require('http://static0.qianqian.com/pc-tpass/prd/scripts/jsdk/tpass-2.0.0.js');
//'//static0.qianqian.com/pc-tpass/prd/scripts/jsdk/tpass-2.0.0.js'

import util from 'utils/help'
let _ = new util();

import 'less/head';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone:false
        }
    }
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
                        {
                            this.state.initDone
                            ? <UserInfo />
                            :'加载中。。。'
                        }

                    </section>
                </hgroup>
            </div>
        )
    }
    componentWillMount(){
        _.api('/app/user/info',{
            method:'post',
        }).then((rs)=>{

            if(rs.error_code === 22000){
                this.setState({
                    initDone: true
                });
                this.props.Actions.login(rs.data)
            }else if(rs.error_code === 22452){
                this.setState({
                    initDone: true
                });
                this.props.Actions.login({})

            }
        });
    }
    /*componentDidMount() {
        console.log(123);
        // 模拟登陆
        this.props.Actions.login({
            un: 'abc'
        })
    }*/




}

function mapStateToProps(state) {
    return {
        userinfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
