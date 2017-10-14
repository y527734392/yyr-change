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
import 'lessDir/containers/Top';

//content
class Top extends React.Component {

    render() {
        return (
            <div className="top-content">
                <div className="inner">{this.props.children}</div>
            </div>
        )
    }


}
export default Top

 