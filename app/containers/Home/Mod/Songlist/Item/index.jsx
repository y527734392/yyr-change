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
//import 'less/xxxx';

//content
class Items extends React.Component {
	constructor(props,context){
		super(props,context);

	}
	render() {
		var songs = [];
		this.props['yt-data-json']['song_list'].map((list,index)=>{
			if(index<=2){
				songs.push(<li key={index} yt-data-json={list} yt-data-index={index}>
					<div className="song-title"><Link>{list.title}</Link></div>
					<div className="song-artist"><Link>{list.artist}</Link></div></li>)
			}else{
				return false;
			}
		});
		return (
			<dl className="songlist_item">
				<dt className="songlist_pic">
					<img src={this.props['yt-data-json']['desc']['img']} alt="" />
					<div className="audition-box"><span className="audition-icon"><i></i>{this.props['yt-data-json']['desc']['hot']}</span></div>
				</dt>
				<dd>
					<div className="title-box">
						<Link>{this.props['yt-data-json']['desc']['title']}</Link><span>(12首歌)</span>
					</div>
					<ul className="show-songs">
						{songs}
					</ul>
				</dd>
			</dl>


		)
	}

}
export default Items

