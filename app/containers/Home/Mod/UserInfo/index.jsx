/**
 * Created by Muyi on 17/10/11.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

/**
 * css
 */
//import 'less/xxxx';

//content
class ArtistInfo extends React.Component {
    render() {
        return (
            <div className="login-info">
                <div className="user-info-new fast-login" id="sidebarUserInfo">
                    <div className="user-info-new fast-login" id="sidebarUserInfo">

                        <div className="user-avatar" id="userAvatarLogin"><img src="/static/img/bg/default_avatar.jpg" width="70" height="70" /></div>
                        <div className="user-btn">
                            <a href="javascript:;" id="userBtnLogin" target="_blank">登录</a>
                        </div>
                        <div className="login-btn">
                            <a className="signup-btn" href="javascript:;" target="_blank">注册</a>
                        </div>

                        <span className="line-dotted"></span>
                    </div>
                </div>
                <div className="recom-musician">
                    <p className="title">最近加入的音乐人：</p>
                    <dl className="musician-list">
                        <dt><img className="lazy" src="/static/img/bg/default_40.jpg" width="25" height="25" /></dt>
                        <dd>
                            <a href="" title=""></a>
                        </dd>
                    </dl>
                </div>
                <div className="musician-number">
                    <div className="musician-number-text">
                        <p>现在共有<span></span>位音乐人加入</p>
                        <p>上传作品<span></span>首</p>
                        <p>爱玩音乐的你快来入驻吧！ </p>
                    </div>
                    <div id="sidebarBtnArea">
                        <div className="userBar_loading"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ArtistInfo

 