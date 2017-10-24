/**
 * Created by lgl on 17/10/13.
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
class Items extends React.Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			show_time: _.formateTime(this.props['yt-data-json']['show_starttime'],'MM月dd日')+' '+
			_.formateTime(this.props['yt-data-json']['show_starttime'],'hh:mm')+'-'+
			_.formateTime(this.props['yt-data-json']['show_endtime'],'hh:mm')

		}
	}
	render() {
		return (
			<li>
				<a className="show_pic">
					<img src={this.props['yt-data-json']['avatar_url']} alt="" />
				</a>
				<a className="show_title">{this.props['yt-data-json']['show_name']}</a>
				<div className="show_info">
					<p>艺人：{this.props['yt-data-json']['show_artist']}</p>
					<p>时间：{this.state.show_time}</p>
					<p>场馆：{this.props['yt-data-json']['show_site']}</p>
					<p>票价：<span className="price">￥{this.props['yt-data-json']['show_price']}</span>元起</p>

				</div>

			</li>
		)
	}

}
export default Items

