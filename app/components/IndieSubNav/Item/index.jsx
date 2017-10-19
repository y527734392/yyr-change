/**
 * Created by Muyi on 17/10/13.
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
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <li className="on">
                <Link>{
                    'title' in this.props['yt-data-json']
                    ?this.props['yt-data-json'].title
                    :this.props['yt-data-json'].genre_name}</Link>
            </li>
        )
    }
}
export default Item

 