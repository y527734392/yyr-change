/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import TopSubNav from 'components/TopSubNav'
import SongsList from './Mod/SongsList'
/**
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */
//import 'less/xxxx';

//content
class TopHome extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data:false,
            initDone:false
        }
    }
    render() {
        return (
            <div className="top-songAll clearfix">
                <TopSubNav yt-data-type="song_all" />
                {this.state.initDone
                    ? <SongsList yt-data-songslist={this.state.data} yt-data-type="song-musician" />
                    : '正在加载。。。'
                }
            </div>
        )
    }

    componentWillMount(){
        _.api('/app/rank/toprank',{
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
export default TopHome

 