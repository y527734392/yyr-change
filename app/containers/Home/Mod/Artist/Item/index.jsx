/**
 * Created by Muyi on 17/10/12.
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
class Item extends React.Component {
    render() {
        return (
            <li>
                <div className="musician-avatar" data-aid="">
                    <img className="lazy" src={this.props['yt-data-json']['avatar_url']} data-original="" />
                </div>
                <h3 className="name" title="">{this.props['yt-data-json'].un}</h3>
                <p className="msician-style" title="" >{this.props['yt-data-json'].style}</p>
                <div className="delegate-song cover-hook" data-sids="">
                    <p href="" title="">{this.props['yt-data-json'].song_info.title}</p>
                    <span className="play-btn cover-hook-play"></span>
                </div>
            </li>
        )
    }
}
export default Item

 