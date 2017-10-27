/**
 * Created by Muyi on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import Item_playList from './Item_playList'
/**
 * css
 */
//import 'less/xxxx';

//content
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        var items = [];
        !!this.props['yt-data-json']['play_list'] && this.props['yt-data-json']['play_list'].map((list,index)=>{
            items.push(<Item_playList key={index} yt-data-json={list} yt-data-index={index} />)
        });
        return (
            <li>
                <div className="artist-content">
                    <div className="pic"><img src={this.props['yt-data-json'].avatar} alt=""/></div>
                    <div className="desc">
                        <h3 className="artist-name">{this.props['yt-data-json'].un}</h3>
                        <div className="artist-txt">
                            <span className="fans num"><i className="icon-at"></i>{this.props['yt-data-json'].fans_total}</span>
                            <span className="listen num"><i className="icon-at"></i>{this.props['yt-data-json'].hot}</span>
                        </div>
                    </div>

                </div>
                <div className="artist-songs">
                    {items}
                </div>
            </li>
        )
    }
}
export default Item

 