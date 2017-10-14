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
		{/*var items = [];
		this.props['yt-data-crowds'].map((list,index)=>{
			if (index<=3){
				items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
			}
		});*/}
		return (
			<div className="home-ranklist-inner">
				<h3 className="title home-title">{this.props['yt-data-title']}</h3>

			</div>
		)
	}


}
export default RankList

