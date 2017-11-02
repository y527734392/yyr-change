/**
 * Created by Muyi on 17/10/11.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'reduxActions/index'

import Item from './Item'

/**
 * css
 */
//import 'less/xxxx';

/**
 * 引入所需图片
 */
import default_avatar from 'img/default/avatar.jpg'

//content
class ArtistInfo extends React.Component {
    render() {
        var items = [];
        this.props['yt-data-joinArtists'].newest_artist.map((list,index)=>{
            items.push(<Item key={index} yt-data-json={list} />)
        });
        return (
            <div className="sliderUser">
                <div className="sliderUser-con loading-pos">
                {
                    this.props.userload
                    ?<div className="sliderUser-inner">
                        {
                            JSON.stringify(this.props.userinfo) != '{}'
                            ?<div className="sliderUser-login sliderUser-info">
                                <div className="user-avatar">
                                    <Link to="/user/center"><img src={this.props.userinfo.avatar_url} width="70" height="70"/></Link>
                                </div>
                                <span className="user-name">{this.props.userinfo.un}</span>
                                {
                                    this.props.userinfo.artist_status ==2
                                    ?<div className="user-btn">
                                        <Link to={"/artist/"+ this.props.userinfo.atist_id} title="我的主页">我的主页</Link>
                                    </div>
                                    :''
                                }
                                <ul className="user-numInfo">
                                   <li>
                                       <p className="num">{ this.props.userinfo.fav_artist_cnt || 0}</p>
                                       <Link className="txt" to="/user/center">关注</Link>
                                   </li>
                                    <li>
                                        <p className="num">{ this.props.userinfo.favorite_song_cnt || 0}</p>
                                        <Link className="txt" to="/user/center">收藏的歌曲</Link>
                                        <i></i>
                                    </li>
                                    {
                                        this.props.userinfo.artist_status ==2
                                        ?<li>
                                            <p className="num">{ this.props.userinfo.fans_cnt}</p>
                                            <Link className="txt" to="/user/center">粉丝</Link>
                                            <i></i>
                                        </li>
                                        :''
                                    }

                                </ul>
                            </div>
                            :<div className="sliderUser-notLogin sliderUser-info">
                                <div className="user-avatar">
                                    <img src={default_avatar} width="70" height="70" />
                                </div>
                                <div className="user-btn">
                                    <a href="javascript:;" id="userBtnLogin">登录</a>
                                </div>
                                <div className="login-btn">
                                    <a className='signup-btn' href="javascript:;" target="_blank" >注册</a>
                                </div>
                            </div>
                        }
                    </div>
                    :<div className="y_loading"></div>

                }
                </div>
                <div className="newest_artist">
                    <h4 className="title">最近加入的音乐人：</h4>
                    {items}
                </div>
                <div className="musician-number">
                    <div className="musician-number-text">
                        <p><em>现在共有</em><span>{this.props['yt-data-joinArtists'].artist_cnt}</span><em>位音乐人加入</em></p>
                        <p><em>上传作品</em><span>{this.props['yt-data-joinArtists'].song_cnt}</span><em>首</em></p>
                        <p>爱玩音乐的你快来入驻吧！ </p>
                    </div>
                    <div id="sidebarBtnArea" className="loading-pos">
                        {
                            this.props.userload
                                ?<div className="sliderUser-inner">
                                    {
                                        JSON.stringify(this.props.userinfo) != '{}'
                                            ?this.props.userinfo.artist_status ==1
                                                ?<span className="apply-btn apply-wait">资料审核中，请等待...</span>
                                                :this.props.userinfo.artist_status ==0
                                                    ?<Link className="apply-btn need-login" to="/artist/register">申请成为百度音乐人</Link>
                                                    :this.props.userinfo.artist_status ==2
                                                        ?<Link className="apply-btn" to={"/artsit/"+this.props.userinfo.artist_id}>进入我的音乐人主页</Link>
                                                        :<Link className="apply-btn need-login" to="/artist/register">申请成为百度音乐人</Link>
                                            :<Link className="apply-btn need-login" to="/artist/register">申请成为百度音乐人</Link>
                                    }
                                </div>
                                :<div className="y_loading"></div>

                        }
                        <div className="userBar_loading"></div>
                    </div>
                </div>
            </div>
        )
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
)(ArtistInfo)