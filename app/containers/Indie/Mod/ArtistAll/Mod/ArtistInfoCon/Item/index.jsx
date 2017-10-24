/**
 * Created by Muyi on 17/10/13.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

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
        return (
            <li className={this.props['yt-data-index']%5 ==0 ?'no_ml':''}>
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
                {/*<ul className="artist-songs">
                    <li>
                        <span>title</span>
                        <span className="btn"></span>
                    </li>
                </ul>*/}
            </li>
        )
    }
}
export default Item

 