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
import 'lessDir/containers/Indie';

//content
class Indie extends React.Component {
    render() {
        return (
            <div className="indie-content">
                <div className="inner">{this.props.children}</div>
            </div>
        )
    }
}
export default Indie

 