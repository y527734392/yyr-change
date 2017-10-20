/**
 * Created by Muyi on 17/10/20.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'

import Login from 'components/Login'
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
class NoUserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div className="noUser-con">
                <Login  content="登陆"/>
                <span className="spacing">|</span>
                <span className="signup">注册</span>
            </div>
        )
    }
}

export default NoUserInfo

 