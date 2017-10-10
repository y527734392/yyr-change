/**
 * Created by muyi on 2017/9/17.
 */

import React from 'react'
import Subnav from '../../Subnav'
class Banner extends React.Component {
    render() {
        return (
            <div className="home">
                <Subnav data="banner"/>
                <div className="content">
                    banner
                </div>
            </div>
        )
    }
}
export default Banner