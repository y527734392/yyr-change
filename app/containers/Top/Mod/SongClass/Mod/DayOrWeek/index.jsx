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
class DayOrWeek extends React.Component {
    render() {
        return (
            <div className="dayOrWeek">
                <ul className="clearfix">
                    <li className="on">
                        <Link to="/top/song/day">日榜</Link>
                    </li>
                    <li>
                        <Link to="/top/song/week">周榜</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default DayOrWeek

 