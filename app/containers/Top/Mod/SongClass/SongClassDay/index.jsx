/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import DayOrWeek from '../Mod/DayOrWeek'
import SongsDay from './Mod/SongsDay'

/**
 * css
 */
//import 'less/xxxx';

//content
class SongMusicianDay extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        	//type:this.props.location.state.type,
            data:false,
            initDone:false
        }
    }
    render() {
        return (
            <div className="songClassDay">
                <DayOrWeek yt-data-listType={this.props.params.type} />
                {
                    this.state.initDone
                    ? <div>
                        <div className="play-all clearfix">
                            <div className="btn">
                                <i></i>
                                <span>播放榜单</span>
                            </div>
                            <p className="day-desc">本榜单根据每天的全站流行歌曲整首播放量自动生成 更新时间：每天02:00</p>
                            <div className="share">分享到:</div>
                        </div>
                        <SongsDay yt-data-json={this.state.data}/>
                    </div>
                    :'加载中。。。'
                }

            </div>
        )
    }
    componentWillMount(){
    	console.log(this.props.params.type);
	    _.api('/plaza/top/song/'+this.props.params.type,{
		    method:'post',
		    data:{
			    t:'day'
		    }
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
export default SongMusicianDay

 