/**
 * Created by Muyi on 17/10/25.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'


//content
class Col extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className={'artist-infoConLists-warp artist-infoConLists-warp'+this.props['yt-data-index']}>
                {this.props['yt-data-json']}
            </div>
        )
    }
}

export default Col

 