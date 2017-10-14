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
class Songlist extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var items = [];
		this.props['yt-data-songlist'].map((list,index)=>{
			if (index<=5){
				items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
			}
		});
		return (
			<div className="home-songlist-inner">
				<h3 className="title home-title">{this.props['yt-data-title']}</h3>
				<div className="songlist-list">
					{items}
				</div>

			</div>
		)
	}


}
export default Songlist

