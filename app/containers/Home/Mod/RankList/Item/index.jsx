/**
 * Created by lgl on 17/10/14.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'


/**
 * css
 */
//import 'lessDir/xxxx';

//content
class Items extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			num :(this.props['yt-data-index']+1) <10? '0'+(this.props['yt-data-index']+1):(this.props['yt-data-index']+1),
		}
	}
	render() {
		return (
			<li className="clearfix">
				<span className="number">{this.state.num}</span>
				{/*<span className="status-center"><i></i></span>*/}
				<div className="user-avatar">
					<img src={this.props['yt-data-json']['img_url']} alt="" />
				</div>
				<Link className="song-name">{this.props['yt-data-json']['title']}</Link>
				<span className="status-bar">
					<span className="status-inner-bar" style={{width:this.props['yt-data-json']['percent']+'%'}}></span>
				</span>
				<Link className="name">{this.props['yt-data-json']['artist']}</Link>

			</li>
		)
	}

}
export default Items

