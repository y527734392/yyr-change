/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import DayOrWeek from '../Mod/DayOrWeek'
import SongsWeek from './Mod/SongsWeek'
/**
 * voter
 */
import util from 'utils/help'
let _ = new util();


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
			<div className="songClassWeek">
				<DayOrWeek yt-data-listType={this.props.params.type}/>
				{
					this.state.initDone
						? <div>
							<div className="play-all clearfix">
								<div className="btn">
									<i></i>
									<span>播放榜单</span>
								</div>
								<p className="day-desc">
									<Link to={"/top/song/"+ this.props.params.type +"/week/"+this.state.data.prevPeriod.substring(0,4) +"/"+this.state.data.prevPeriod.substring(5)}>{this.state.data.prevPeriod}</Link>
									<Link to={"/top/song/"+ this.props.params.type +"/week/"+this.state.data.nextPeriod.substring(0,4) +"/"+this.state.data.nextPeriod.substring(5)}>{this.state.data.nextPeriod}</Link>
								</p>
								<div className="share">分享到:</div>
							</div>
							<SongsWeek yt-data-json={this.state.data.hot_songs}/>
						</div>
						:'加载中。。。'
				}

			</div>
		)
	}
	componentWillMount(){
		_.api('/plaza/top/song/'+this.props.params.type,{
			method:'post',
			data:{
				t:'week',
				y:this.props.params.y,
				p:this.props.params.p
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
	componentDidMount(){

	}
	shouldComponentUpdate(nextProps,nextState){
		console.log(12345);
		// _.api('/plaza/top/song/'+this.props.params.type,{
		// 	method:'post',
		// 	data:{
		// 		t:'week',
		// 		y:this.props.params.y,
		// 		p:this.props.params.p
		// 	}
		// }).then((rs)=>{
		// 	if(rs.error_code === 22000){
		// 		this.setState({
		// 			data: rs.data,
		// 			initDone: true
		// 		})
		// 	}
		// });
		return true;
	}
	/*componentWillUpdate(){
		/!*_.api('/plaza/top/song/'+this.props.params.type,{
			method:'post',
			data:{
				t:'week',
				y:this.props.params.y,
				p:this.props.params.p
			}
		}).then((rs)=>{
			if(rs.error_code === 22000){
				this.setState({
					data: rs.data,
					initDone: true
				})
			}
		});*!/
	}*/
}
export default SongMusicianDay

