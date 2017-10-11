/**
 * Created by muyi on 2017/9/16.
 */

import React from 'react'
import { Link } from 'react-router'

import util from 'utils/help'
let _ = new util();

import 'lessDir/footer';


class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className="y-footer">
                <hgroup>
                    <a href="/" className="foot-logo"></a>
                    <nav className="nav">
                        <a href="/blog/1387253721">常见问题</a>
                        <a href="/artist/register">申请成为音乐人</a>
                        <a target="_blank" href="http://music.baidu.com" className="go-music">回到百度音乐</a>
                        <a id="fqFeedback" href="javascript:">问题反馈</a>
                    </nav>
                    <p className="connect-text">联系邮箱：th_musician_help@taihe.com</p>
                    <section className="about">©Baidu<a target="_blank" href="http://www.baidu.com/duty/">使用百度前必读</a>文网文[2010]197号</section>
                    <section className="connect">
                        <a className="weibo" target="_blank" href="http://e.weibo.com/baidumusician">加关注</a>
                        <a id="foot-weixin" className="weixin popover-link" href="javascript:;" data-original-title="" title="">加微信好友</a>
                        <a href="/download/app" className="down-app" target="_blank">下载APP</a>
                    </section>
                </hgroup>
            </footer>
        )
    }
}
export default Footer
