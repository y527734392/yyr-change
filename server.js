/**
 * Created by muyi on 2016/12/13.
 */
//引入必要模块
var express = require("express");
var path = require('path');
var fs = require('fs');
var proxy = require('http-proxy-middleware');
var history = require('connect-history-api-fallback');

var webpack = require('webpack');
var config = require('./webpack.dev.config');
var opn = require('opn');

//创建一个express实力
var app = express();

app.use(history());


//调用webpack并把配置传递过去
var compiler = webpack(config);

//使用webpack-dev-middleware
var devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath : config.output.publicPath,
    stats: {
        colors:true,
        chunks:false,
    },
});
//使用webpack-hot-middleware
var hotMiddleware = require('webpack-hot-middleware')(compiler);

//注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);





var port = 8700;
// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' });
        cb();
    })
});



var uri = 'http://yt.com:' + port;

//接口转发
var options = {
    target: 'http://192.168.217.16:8088', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    /*ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/old-path' : '/api/new-path',     // rewrite path
        '^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        'dev.localhost:3000' : 'http://localhost:8000'
    }*/
};
var exampleProxy = proxy(options);
app.use('/app/*', exampleProxy);



//8800,开启服务器
app.listen(port,function(err){
    if(err){
        console.log(err);
        return
    }
    console.log("Listening "+port);
});

// when env is testing, don't need open it
if (process.env.NODE_ENV !== 'testing') {
    //opn(uri)
}