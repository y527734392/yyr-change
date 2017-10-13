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
//import 'lessDir/xxxx';

//content
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            num :(this.props['yt-data-index']+1) <10? '0'+(this.props['yt-data-index']+1):(this.props['yt-data-index']+1),
            initDone:false
        }
    }
    render() {
        return (
            <li className="clearfix">
                <span className="num">{this.state.num}</span>
                <span className="status"><i></i></span>
                <div className="song—info clearfix">
                    <h3 className="title">{this.props['yt-data-json'].title}</h3>
                    <p className="artist">{this.props['yt-data-json'].artist_info.un}</p>
                </div>
                <p className="play-num">xx万次播放</p>
            </li>
        )
    }
}
export default Item

 