/**
 * Created by Muyi on 17/10/12.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import TopSubNav from 'components/TopSubNav'
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
class SongMusician extends React.Component {

    render() {

        return (
            <div className="songClass">
                <TopSubNav yt-data-type="song_musician" />
                <div className="songClassInner">{this.props.children}</div>
            </div>
        )
    }

}
export default SongMusician

 