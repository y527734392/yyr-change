/**
 * Created by Muyi on 17/10/17.
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
class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        console.log(this.props.actions)
        return (
            <div>
                {this.props.info.un}
            </div>
        )
    }
}
export default UserInfo

 