import React from 'react'

import Banner from './Mod/Banner'
import Songs from './Mod/Songs/'
import UserInfo from './Mod/UserInfo'
import Artist from './Mod/Artist'
import MusicClassify from './Mod/MusicClassify'

/**
 * voter
 */
import util from 'utils/help'
let _ = new util();


import 'lessDir/containers/Home';


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
                ? <div className="home">
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
                {/*
                 <div>
                 <div>
                 <Songs />
                 <Albums />
                 </div>
                 <div>

                 </div>
                 </div>
                 <div>
                 <div>
                 <Artist />
                 </div>
                 <div>
                 <MusicClassify />
                 </div>
                 </div>*/}
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
