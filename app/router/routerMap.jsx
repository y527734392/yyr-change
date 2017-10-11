
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
//import {BrowserRouter as Router,Route,Link,HashRouter,BrowserRouter,Switch,Provider,Redirect} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'

import Login from '../containers/Login'
import Register from '../containers/Register'

//admin
import Banner from '../containers/Admin/Banner'
import Recommend from '../containers/Admin/Recommend'
import Product from '../containers/Admin/Product'
import ProductSet from '../containers/Admin/Product/Set'
import Orderuser from '../containers/Admin/Orderuser'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        {console.log(this.props.history)}
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                        <IndexRoute component={Home}/>
                        <Route exact strict path="/admin/banner" component={Banner} />
                        <Route exact strict path="/admin/recommend" component={Recommend} />
                        <Route exact strict path="/admin/product" component={Product} />
                        <Route exact strict path="/admin/orderuser" component={Orderuser} />
                        <Route exact strict path="/admin/productedit/:set" component={ProductSet} />
                </Route>
            </Router>
        )
    }
}

export default RouteMap