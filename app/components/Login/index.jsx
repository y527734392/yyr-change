/**
 * Created by Muyi on 17/10/20.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions/index'
/**
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */
//import 'lessDir/xxxx';

//content
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <span className="login need-login" onClick={this.login.bind(this)}>登录</span>
        )
    }
    login(){
        _.login(0,'baidu_musician',()=>{
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
)(Login)

 