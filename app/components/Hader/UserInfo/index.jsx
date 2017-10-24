/**
 * Created by Muyi on 17/10/19.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from 'reduxActions/index'

import HaveUserInfo from './Mod/HaveUserInfo'


/**
 * css
 */
//import 'lessDir/xxxx';

//content
class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone:false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ?<div className="info-con">
                    {
                        JSON.stringify(this.props.userinfo) != '{}'
                            ?<div className="haveUser">
                                <HaveUserInfo />
                            </div>
                            :<div className="noUser">
                                <div className="noUser-con">
                                    <span className="login need-login" onClick={this.login.bind(this)}>登录</span>
                                    <span className="spacing">|</span>
                                    <span className="signup">注册</span>
                                </div>
                            </div>
                    }
                </div>
                    :'加载中...'
                }
            </div>
        )
    }
    login(){
        _.login(0,'baidu_musician',()=>{
            this.setState({
                initDone: false
            });
            _.api('/app/user/info',{
                method:'post',
            }).then((rs)=>{
                if(rs.error_code === 22000){
                    this.setState({
                        initDone: true
                    });
                    this.props.Actions.login(rs.data)
                }
            });
        });
    }
    componentDidMount(){
        this.setState({
            initDone: true
        });
    }
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
)(UserInfo)

 