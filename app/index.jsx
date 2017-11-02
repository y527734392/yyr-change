/**
 * Created by muyi on 2017/9/15.
 */


import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from 'reduxStore/configStore'

import RouteMap from './router/routerMap'

/*兼容ie start*/
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('json3');
require('fetch-ie8');
require('babel-polyfill');
/*兼容ie end*/


//common-css
import 'less/main.less';

let store = configureStore();

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li>Posts</li>
                        <li>About</li>
                    </ul>
                </header>
            </div>
        );
    }
});


// 渲染组件到页面
render(
    <Provider store={store}>
        <RouteMap history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);