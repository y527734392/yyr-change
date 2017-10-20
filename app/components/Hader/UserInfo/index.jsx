/**
 * Created by Muyi on 17/10/19.
 */

/**
 * react component
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from 'actions/index'

import HaveUserInfo from './Mod/HaveUserInfo'
import NoUserInfo from './Mod/NoUserInfo'
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
        console.log(JSON.stringify(this.props.userinfo) != '{}')
        return (
            <div className="info-con">
                {
                    JSON.stringify(this.props.userinfo) != '{}'
                    ?<div className="haveUser">
                        <HaveUserInfo />
                    </div>
                    :<div className="noUser">
                        <NoUserInfo />
                    </div>

                }
                {/*<div onClick={this.login.bind(this)}>登陆</div>*/}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo)

 