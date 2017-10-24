/**
 * Created by Muyi on 17/10/12.
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
class DayOrWeek extends React.Component {
    render() {
        //console.log(this.props.params.type);
        return (
            <div className="dayOrWeek">
                <ul className="clearfix">
                    <li className="on">
                        <Link to={"/top/song/"+ this.props['yt-data-listType']+"/day"}>日榜</Link>
                    </li>
                    <li>
                        <Link to={"/top/song/"+ this.props['yt-data-listType']+"/week"}>周榜</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default DayOrWeek

 