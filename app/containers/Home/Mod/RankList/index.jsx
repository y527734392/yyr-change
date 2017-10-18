/**
 * Created by lgl on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'
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
class RankList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var items = [];
		this.props['yt-data-rank']['song_list'].map((list,index)=>{
			if (index<=9){
				items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
			}
		});
		return (
			<div className="ranking-box">
				<div className="hd">
					<h3 className="title">{this.props['yt-data-title']}</h3>
					<div className="cover-hook">
						<span className="text">榜单更新至：2016-08-03 热歌榜</span>
					</div>
				</div>
				<div className="bd">
					<ul>
						{items}
					</ul>
					<div className="ranking-more"><Link>完整榜单</Link></div>
				</div>


			</div>
		)
	}


}
export default RankList

