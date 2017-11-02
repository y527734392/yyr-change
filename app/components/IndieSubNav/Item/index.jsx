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
            <li className="on">
                <Link to={"/"+this.props['yt-data-json']}>{ this.props['yt-data-title']|| '未知'}</Link>
            </li>
        )
    }
}
export default Item

 