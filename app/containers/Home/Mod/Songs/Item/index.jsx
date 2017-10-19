/**
 * Created by Muyi on 17/10/11.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
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
class Items extends React.Component {
    render() {
        return (
            <li className="home-items" data-sids="" data-aid="">
                <div className={"home-pic "+this.props['yt-data-class']} title={this.props['yt-data-json']['title']}>
                    <div className="cover_songs_bg"><img src={this.props['yt-data-json']['img_url']} alt="" /></div>
                    <span className="play-btn-track"></span>
                    <span className="icon-play cover-hook-play"></span>
                </div>
                <h6 className="name" title={this.props['yt-data-json']['title']}>{this.props['yt-data-json']['title']}</h6>
                <p className="artist" title={this.props['yt-data-json'].artist}>{this.props['yt-data-json'].artist}</p>
            </li>
        )
    }
}
export default Items

 