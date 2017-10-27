/**
 * Created by Muyi on 17/10/25.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

//content
class Item_playList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className="songs">
                <span className="txt">{this.props['yt-data-json'].title}</span>
                <span className="btn"></span>
            </div>
        )
    }
}

export default Item_playList

 