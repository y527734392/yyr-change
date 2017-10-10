/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'

import util from '../../utils/help'
let _ = new util();

class Register extends React.Component {
    render() {
        return (
            <div className="page_loginReg">
                <h3 className="title">视界牧业后台管理系统</h3>
                <p className="dec">与世界分享你的健康、经验和见解</p>
                <ul className="subnav clearfix">
                    <li className="on">注册</li>
                    <li><Link to="/login">登录</Link></li>
                </ul>
                <div className="userInput_content register">
                    <input className="r_un" type="text" maxLength="11" placeholder="姓名" />
                    <input className="r_phone" type="text" maxLength="11" placeholder="手机号" />
                    <input className="r_passwd" type="password" minLength="6" placeholder="密码(不小于6位)" />
                </div>
                <div className="page_login_btn register" onClick={this.onRegist.bind(this)}>注册视界牧业</div>
                <p className="argger">点击「注册」按钮，即代表你同意《视界牧业协议》</p>
            </div>
        )
    }
    onRegist(){
        let r_un = $('.r_un').val();
        let r_phone = $('.r_phone').val();
        let r_passwd = $('.r_passwd').val();
        let json = {
            username:r_un,
            phone:r_phone,
            password:hex_md5(r_passwd),
        }

        _.api('/api/register',{
            method:'post',
            data:json,
        }).then((rs)=>{
            console.log(!!rs);
            if(!!rs && rs.error_code === 22000){
                alert('注册成功');
                this.props.history.push('/login');
            }else{
                alert('注册失败');
            }
        });
    }
}

export default Register