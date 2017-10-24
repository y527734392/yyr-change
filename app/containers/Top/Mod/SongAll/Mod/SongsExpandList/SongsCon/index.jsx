/**
 * Created by lgl on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'


/**
 * css
 */
//import 'less/xxxx';

//content
class SongsExpandCon extends React.Component {
	render() {
		return (
			<div className={"songs-content "+this.props['yt-data-class']}>
				<div className="songs-title-info clearfix">
					<h2 className="title">{this.props['yt-data-title']}</h2>
					<i className="split">|</i>
					<Link to={{pathname:this.props['yt-data-url'],state:{type:this.props['yt-data-type']}}} className="more-info">更多</Link>
					<div className="cover-hook play-all">
						<a href="" className="cover-hook-play icon-play-large"><i></i></a>
					</div>
				</div>
				<div className="songs-con">
					<ul>
						{this.props['yt-data-item']}
					</ul>
				</div>
			</div>
		)
	}
}
export default SongsExpandCon

