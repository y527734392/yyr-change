import React from 'react'
import Pace from 'react-pace-progress'

import Header from '../components/Hader'
import Footer from '../components/Footer'
//require('http://static0.qianqian.com/pc-tpass/prd/scripts/jsdk/tpass-2.0.0.js');

import util from 'utils/help'
window._ = new util();

function createMarkup() {

    return {__html: 'First &middot; Second'};
}
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
                <script type="text/babel">alert(1234)</script>
                <p dangerouslySetInnerHTML={{__html:'<script type="text/babel">alert(123)</script>',sanitize: true}}></p>
                {/*<Pace height='2px' color="#ff0f50" />*/}
                <Header />
                <div className="content" style={{minHeihgt:"300px"}}>{this.props.children}</div>
                <Footer />
            </div>

        )
    }
    //实时监控路由变化
    componentWillReceiveProps(nextProps){
        //当路由切换时
        if(this.props.location !== nextProps.location){
            window.scrollTo(0,0)
        }

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