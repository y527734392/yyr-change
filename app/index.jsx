/**
 * Created by muyi on 2017/9/15.
 */


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory } from 'react-router';

import RouteMap from './router/routerMap'
//const history = createHistory()

//common-css
import 'lessDir/main.less';


// 渲染组件到页面
render(
    <RouteMap history={browserHistory} />,
    document.getElementById('root')
);