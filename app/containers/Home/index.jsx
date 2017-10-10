import React from 'react'

import Subnav from '../Subnav'
import Header from '../Hader'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Home
