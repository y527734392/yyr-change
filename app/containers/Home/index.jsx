import React from 'react'

import Banner from './Mod/Banner'
import Songs from './Mod/Songs/'
import UserInfo from './Mod/UserInfo'
import Artist from './Mod/Artist'
import MusicClassify from './Mod/MusicClassify'
import Crowds from 'components/Crowds'
import Songlist from './Mod/Songlist'
import RankList from './Mod/RankList'
import Event from './Mod/Event'

/**
 * voter
 */
import util from 'utils/help'
let _ = new util();

import 'less/containers/Home';


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:false,
            initDone:false
        }
    }
    render() {
        return (
            <div>
            {
                this.state.initDone
               ?<div className="home">
                    <Banner yt-data-pic={this.state.data.focus}/>
                    <div className="home-news clearfix">
                        <div className="lf">
                            <Songs yt-data-title="最新单曲" yt-data-songs={this.state.data.suggest_songs} yt-data-class="songlist" />
                            <Songs yt-data-title="最新专辑" yt-data-songs={this.state.data.suggest_albums} yt-data-class="albumlist" />
                        </div>
                        <div className="userInfo">
                            <UserInfo />
                        </div>
                    </div>
                    <div className="home-artistsAndClass clearfix">
                        <div className="inner">
                            <Artist yt-data-title="推荐音乐人" yt-data-artist={this.state.data.suggest_artists} />
                            <MusicClassify />
                        </div>
                    </div>
                    <div className="home-crowd clearfix">
                        <Crowds yt-data-title="推荐众筹" yt-data-num='3' yt-data-crowds={this.state.data.suggest_crowd} />
                    </div>
                    <div className="home-rankList clearfix">
                        <div className="inner">

                        </div>
                    </div>
                    <div className="home-events">
                        <Event yt-data-title="推荐演出" yt-data-events={this.state.data.suggest_events} />
                    </div>
                </div>
                : <div>正在加载...</div>
            }
            </div>
        )
    }

    componentWillMount(){
        _.api('/app/suggest/preview',{
            method:'post',
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.setState({
                    data: rs.data,
                    initDone: true
                })
            }
        });
    }
}

export default Home
