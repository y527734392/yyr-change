/**
 * Created by lgl on 17/10/19.
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
import 'lessDir/components/Events';

//content
class Events extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var items = [];
		this.props['yt-data-events'].map((list,index)=>{
			if (this.props['yt-data-events'] && index<= this.props['yt-data-num']){
				items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
			}else{
				items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
			}
		});
		return (
			<div className="events-inner">
				{
					this.props['yt-data-title']
					?<h3 className="title home-title">{this.props['yt-data-title']}</h3>
					:''
				}
				<ul className="events-list clearfix">
					{items}
				</ul>
			</div>
		)
	}


}
export default Events

