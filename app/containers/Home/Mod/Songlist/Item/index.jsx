/**
 * Created by  lgl on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import SongItem from './SongItem'
/**
 * voter
 */
import util from 'utils/help'
let _ = new util();

/**
 * css
 */
//import 'lessDir/xxxx';

//content
class Items extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {

		}
	}
	render() {
		return (
			<dl className="songlist_item">
				<dt className="songlist_pic">
					<img src={this.props['yt-data-json']['img_url']} alt="" />
				</dt>
				<dd>
					<div className="title-box">
						<Link>{this.props['yt-data-json']['title']}</Link><span>(12首歌)</span>
					</div>
					<div className="show-songs"></div>
				</dd>
			</dl>


		)
	}

}
export default Items

