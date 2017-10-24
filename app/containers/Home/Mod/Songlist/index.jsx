/**
 * Created by lgl on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import ReactSwipe from 'react-swipe';
import Item from './Item'

/**
 * css
 */
//import 'less/xxxx';

//content
class Songlist extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var items1 = [],items2 = [],items3 = [];
		this.props['yt-data-songlist'].map((list,index)=>{
			if(index<=3){
				items1.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
			}else if(index<=7){
				items2.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
			}else{
				items3.push(<Item key={index} yt-data-json={list} yt-data-index={index} />)
			}
		});

		return (
			<div className="home-songlist-inner">
				<h3 className="title home-title">{this.props['yt-data-title']}</h3>
				<div className="songlists-con">
					<ReactSwipe className="songlist-carousel clearfix" swipeOptions={{continuous: true,auto: 5000,}}>
						<div>{items1}</div>
						<div>{items2}</div>
						<div>{items3}</div>
					</ReactSwipe>
				</div>
			</div>
		)
	}
}
export default Songlist

