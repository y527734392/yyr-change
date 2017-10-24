/**
 * Created by  lgl on 17/10/13.
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
class SongItem extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {

		}

	}
	render() {
		return (
			<div>
				<dl>
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
			</div>


		)
	}

}
export default SongItem

