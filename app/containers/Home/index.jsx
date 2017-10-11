import React from 'react'

import Banner from './Mod/Banner'
import Songs from './Mod/Songs'

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
            data:false
        }
    }
    render() {
        return (
            <div>
                <Banner yt-data-pic={this.state.data.focus}/>
                <div>
                    <div>
                        <Songs yt-data-title="最新单曲" yt-data-songs={this.state.data.suggest_songs} />
                    </div>
                    <div>
                    </div>
                </div>
                {/*
                <div>
                    <div>
                        <Songs />
                        <Albums />
                    </div>
                    <div>
                        <Webappinfo />
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
        )
    }

    componentWillMount(){
        _.api('/app/suggest/preview',{
            method:'post',
        }).then((rs)=>{
            if(rs.error_code === 22000){
                this.setState({
                    data: rs.data
                })
            }
        });
    }
}

export default Home
