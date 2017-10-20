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
class HaveUserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {

        return (
            <div className="haveUser-con clearfix">
                <div className="user-menu">
                    <Link className="user-pic" to="/user/center">
                        <img src={this.props.userinfo.avatar_url} alt=""/>
                    </Link>
                    <ul className="menu-list">
                        <li>
                            <Link to="/user/center">个人中心</Link>
                        </li>
                        <li>
                            <Link to="/user/myorder">我的订单</Link>
                        </li>
                        <li>
                            <Link to="/user/binding">账号设置</Link>
                        </li>
                        <li>
                            <span className="logout">退出</span>
                        </li>
                    </ul>
                </div>
                <Link className="message" to="/user/center"></Link>
                {
                    'artist_status' in this.props.userinfo && this.props.userinfo.artist_status == 2
                    ?<div className="manage">
                        <Link className="icon" to="/artist/mydata"></Link>
                        <ul className="manage-list">
                            <li>
                                <Link to="/ttong">我的主页</Link>
                            </li>
                            <li>
                                <Link to="/artist/mydata">后台管理</Link>
                            </li>
                            <li>
                                <Link to="/ttong?editPanel=show">账号设置</Link>
                            </li>
                        </ul>
                    </div>
                    :''
                }
            </div>
        )
    }

    componentDidMount(){
        $('.user-menu').on('mouseenter',()=>{
            $('.menu-list').show();
        }).on('mouseleave',()=>{
            $('.menu-list').hide();
        });
        $('.logout').on('click',()=>{
            console.log(12344444);
            _.logout(()=>{
                this.props.Actions.login({})
            })
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
)(HaveUserInfo)

 