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
class SongMusicianWeek extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.mounted = true;
		this.state = {
			//type:this.props.location.state.type,
			data:false,
			initDone:false,
			mounted:false,
		}
	}
	_api(type,y,p){
		_.api('/plaza/top/song/'+type,{
			method:'post',
			data:{
				t:'week',
				y:y,
				p:p
			}
		}).then((rs)=>{
			if(rs.error_code === 22000){
				this.setState({
					data: rs.data,
					initDone: true,
				})
			}
		});
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
									&nbsp;
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
		this._api(this.props.params.type,this.props.params.y,this.props.params.p);
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate');
		console.log(nextProps.params);
		console.log(nextState);
		if(!this.state.initDone){
			return true;
		}else{
			if(!(nextProps.params.y === this.props.params.y && nextProps.params.p === this.props.params.p)){
				return true;
			}else{
				if(!this.state.mounted){
					return true;
				}else{
					return false;
				}
			}
		}
	}
	componentWillUpdate(nextProps,nextState){
		if(this.state.initDone && !(nextProps.params.y === this.props.params.y && nextProps.params.p === this.props.params.p)){
			_.api('/plaza/top/song/'+nextProps.params.type,{
				method:'post',
				data:{
					t:'week',
					y:nextProps.params.y,
					p:nextProps.params.p,
				}
			}).then((rs)=>{
				if(rs.error_code === 22000){
					this.setState({
							data: rs.data,
							mounted: true,
						})
				}
			});
		}
	}
	componentDidUpdate(nextProps,nextState){
		if(!(nextProps.params.y === this.props.params.y && nextProps.params.p === this.props.params.p)){
			this.state.mounted = false;
		}

		/*_.api('/plaza/top/song/'+nextProps.params.type,{
			method:'post',
			data:{
				t:'week',
				y:nextProps.params.y,
				p:nextProps.params.p
			}
		}).then((rs)=>{
			if(rs.error_code === 22000){
				this.setState({
						data: rs.data,
						initDone: true
					},
					function(){console.log(111111111111111)}())

			}
		});*/
		/*_.api('/plaza/top/song/'+this.props.params.type,{
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
				})
				console.log(this.state.data);
			}
		});*/

	}
}
export default SongMusicianWeek

