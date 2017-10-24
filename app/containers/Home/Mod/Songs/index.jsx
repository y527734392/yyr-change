/**
 * Created by Muyi on 17/10/11.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item from './Item'

/**
 * css
 */
//import 'less/xxxx';

//content
class Songs extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        var items = [];
        this.props['yt-data-songs'].map((list,index)=>{
            if (index<=4){
                items.push(<Item key={index} yt-data-json={list} yt-data-class={this.props['yt-data-class']} />)
            }
        });

        return (
            <div className={"home-newlist home-"+ this.props['yt-data-class']}>
                <h3 className="home-title title">{this.props['yt-data-title']}</h3>
                <ul className="cf clearfix">
                    {items}
                </ul>
            </div>
        )
    }


}
export default Songs

 