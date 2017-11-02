/**
 * Created by lgl on 17/10/23.
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
//import 'less/xxxx';

//content
class SongsWeek extends React.Component {
	render() {
		var items = [];
		this.props['yt-data-json'].map((list,index)=>{
			if(index<10){
				items.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
			}else{
				return false;
			}
		});
		return (
			<ul className="SongsWeek-box">
				{items}
			</ul>
		)
	}
}
export default SongsWeek

