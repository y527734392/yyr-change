
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
//import {BrowserRouter as Router,Route,Link,HashRouter,BrowserRouter,Switch,Provider,Redirect} from 'react-router-dom'

import App from '../containers/App'
/*首页*/
import Home from '../containers/Home'

/*榜单*/
import Top from '../containers/Top' //基础
import SongAll from '../containers/Top/Mod/SongAll' //全部
import SongClass from '../containers/Top/Mod/SongClass' //分类 (原创、古风等)
import SongClassDay from '../containers/Top/Mod/SongClass/SongClassDay' //日榜
import SongClassWeek from '../containers/Top/Mod/SongClass/SongClassWeek' //日榜
//import SongMusicianDay from '../containers/Top/Mod/SongMusician/SongMusicianWeek' //周榜

/*歌手*/
import Indie from '../containers/Indie' //基础
import ArtistAll from '../containers/Indie/Mod/ArtistAll' //基础

/*众筹*/
import Project from '../containers/Project' //基础
/*演出*/
import Show from '../containers/Show' //基础


import Login from '../containers/Login'
/*import Register from '../containers/Register'



//admin
import Banner from '../containers/Admin/Banner'
import Recommend from '../containers/Admin/Recommend'
import Product from '../containers/Admin/Product'
import ProductSet from '../containers/Admin/Product/Set'
import Orderuser from '../containers/Admin/Orderuser'*/
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="/top" component={Top} >
                            <IndexRoute component={SongAll}/>
                            <Route exact strict path="/top/song(/:type)" component={SongClass}>
                                <IndexRoute component={SongClassDay}/>
                                <Route path="/top/song/:type/day" component={SongClassDay} />
                                <Route exact strict path="/top/song/:type/week(/:y)(/:p)" component={SongClassWeek} />
                            </Route>
                        </Route>
                        <Route path="/indie/musician" component={Indie} >
                            <IndexRoute component={ArtistAll}/>
                        </Route>
                        <Route path="/project" component={Project} />
                        <Route path="/show" component={Show} />
                        <Route path="/login" component={Login} />

                    {/*<Route exact strict path="/admin/banner" component={Banner} />
                        <Route exact strict path="/admin/recommend" component={Recommend} />
                        <Route exact strict path="/admin/product" component={Product} />
                        <Route exact strict path="/admin/orderuser" component={Orderuser} />
                        <Route exact strict path="/admin/productedit/:set" component={ProductSet} />*/}
                        <Route exact strict path="*" component={NotFound} />
                </Route>

            </Router>
        )
    }
}

export default RouteMap