/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'

import util from 'utils/help'
let _ = new util();

import '../../vendor/md5.js';
class Login extends React.Component {
    render() {
        return (
            <div className="page_loginReg">
                <h3 className="title">视界牧业后台管理系统</h3>
                <p className="dec">与世界分享你的健康、经验和见解</p>
                <ul className="subnav clearfix">
                    <li><Link to="/register">注册</Link></li>
                    <li className="on">登录</li>
                </ul>
                <div className="userInput_content">
                    <input className="username" type="text" maxLength="11" placeholder="手机号" />
                    <input className="passwd" type="password" minLength="6" placeholder="密码(不小于6位)" />
                </div>
                <div className="page_login_btn" onClick={this.onLogin.bind(this)}>登录</div>
                <p className="not_login">无法登录?</p>
            </div>
        )
    }
    onLogin(){
        let username = $('.username').val();
        let password = $('.passwd').val();
        let json = {
            username:username,
            password:hex_md5(password),
        }

        _.api('/api/login',{
            method:'post',
            data:json,
        }).then((rs)=>{
            if(rs.error_code === 22000){
                console.log('跳转');
                this.props.history.push('/');
            }
        });
    }
}

export default Login