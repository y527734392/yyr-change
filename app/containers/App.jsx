import React from 'react'

import Header from '../components/Hader'
import Footer from '../components/Footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content" style={{minHeihgt:"300px"}}>{this.props.children}</div>
                <Footer />
            </div>

        )
    }
}

export default App