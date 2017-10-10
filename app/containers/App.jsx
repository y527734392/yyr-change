import React from 'react'
import Header from '../containers/Hader'

class App extends React.Component {
    render() {
        return (
            <div>
                {location.href.split('#')[1] === '/login' || location.href.split('#')[1] === '/register'?'':<Header />}
                <div>{this.props.children}</div>
            </div>

        )
    }
}

export default App