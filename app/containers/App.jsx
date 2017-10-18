import React from 'react'
import Pace from 'react-pace-progress'

import Header from '../components/Hader'
import Footer from '../components/Footer'



class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            loading:false,
        }
    }
    render() {
        return (
            <div className="warp">

                {/*<Pace height='2px' color="#ff0f50" />*/}
                <Header />
                <div className="content" style={{minHeihgt:"300px"}}>{this.props.children}</div>
                <Footer />
            </div>

        )
    }
    //实时监控路由变化
    componentWillReceiveProps(a){
        //当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过调用this.setState()来更新你的组件状态
        this.setState({
            //loading:true,
        })
    }
    componentDidMount(){
        this.setState({
            loading:true,
        })
    }
    componentWillMount (){
    }
}

export default App