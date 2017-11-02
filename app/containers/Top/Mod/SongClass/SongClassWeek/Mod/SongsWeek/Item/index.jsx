/**
 * Created by lgl on 17/10/23.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
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
class Item extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			num :(this.props['yt-data-index']+1) <10? '0'+(this.props['yt-data-index']+1):(this.props['yt-data-index']+1),
		}
	}
	render(){
		return (
			<li className="songs-box-li wide clearfix">
				<span className="num">{this.state.num}</span>
				<span className="status"><i></i></span>
				<div className="song-info clearfix">
					<div className="pic"><Link></Link></div>
					<div className="title"><Link>{this.props['yt-data-json'].title}</Link></div>
					<div className="artist"><Link>{this.props['yt-data-json']['all_artist']}</Link></div>
				</div>
				<div className="hot-info">{this.props['yt-data-json']['hot_listen']}次播放</div>
			</li>
		)
	}
}
export default Item
