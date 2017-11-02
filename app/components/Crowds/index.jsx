/**
 * Created by lgl on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'
import LoadMore from 'components/LoadMore'
/**
 * css
 */
import 'less/components/Crowds';

//content
class Crowds extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		var items = [];
		this.props['yt-data-crowds'].map((list,index)=>{
			if (this.props['yt-data-crowds'] && index<= this.props['yt-data-num']){
				items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
			}else{
				items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
			}
		});
		return (
			<div className="crowd-inner">
				{
					this.props['yt-data-title']
					?<h3 className="title home-title">{this.props['yt-data-title']}</h3>
					:''
				}
				<ul className="crowds-list clearfix">
					{items}
				</ul>
				{
					this.props.hasMore
					?<LoadMore isLoadingMore={this.props.isLoadingMore} hasMore={this.props.hasMore} loadMoreFn={this.props.loadMoreFn} />
					:''
				}
			</div>
		)
	}


}
export default Crowds

