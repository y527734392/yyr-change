/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'
import SongsCon from './SongsCon'
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
class SongExpandAll extends React.Component {
	render() {
		{/*var items = [];
		this.props['yt-data-songslist']['song_list'].map((list,index)=>{
			if(index<=9){
				items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
			}
		});*/}
		return (
			<div className="song-list clearfix">

			</div>
		)
	}
}
export default SongExpandAll

