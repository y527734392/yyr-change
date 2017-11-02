/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'reduxActions/index'

import Nav from './Nav'
import UserInfo from './UserInfo'

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
                    <Link className="logo" to="/">百度音乐人</Link>
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
                    <section className="user-info loading-pos">
                        {
                            this.state.initDone
                            ? <UserInfo />
                            :<div className="y_loading"></div>
                        }
                    </section>
                </hgroup>
            </div>
        )
    }
    componentWillMount(){
        this.props.Actions.userload(false);
        _.api('/app/user/info',{
            method:'post',
        }).then((rs)=>{
            this.props.Actions.userload(true);
            if(rs.error_code === 22000){
                this.setState({
                    initDone: true
                });
                this.props.Actions.login(rs.data)
            }else if(rs.error_code === 22452){
                this.setState({
                    initDone: true
                });
                this.props.Actions.login({});
            }
        });
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userInfo,
        userload:state.userLoading
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
