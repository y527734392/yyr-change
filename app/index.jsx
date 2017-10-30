/**
 * Created by muyi on 2017/9/15.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from 'reduxStore/configStore'

import RouteMap from './router/routerMap'

//const history = createHistory()



//common-css
import 'less/main.less';

let store = configureStore();


// 渲染组件到页面
render(
    <Provider store={store}>
        <RouteMap history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);