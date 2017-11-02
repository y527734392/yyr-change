/**
 * Created by Muyi on 17/10/24.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'


//content
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className="news-artist-list">
                <div className="artist-avatar"><img src={this.props['yt-data-json'].avatar_url} width="25" height="25" /></div>
                <h6 className="artist-name">
                    <Link to={'/artist/'+this.props['yt-data-json'].artist_id} title={this.props['yt-data-json'].un}>{this.props['yt-data-json'].un}</Link>
                </h6>
            </div>
        )
    }
}
export default Item
 