/**
 * Created by Muyi on 17/10/12.
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
class Artist extends React.Component {
    render() {
        var items = [];
        this.props['yt-data-artist'].map((list,index)=>{
            items.push(<Item key={index} yt-data-json={list} />)
        });

        return (
            <div className="home-artists">
                <h3 className="title home-title">{this.props['yt-data-title']}</h3>
                <ul className="artists-list clearfix">
                    {items}
                </ul>
            </div>
        )
    }
}
export default Artist

 