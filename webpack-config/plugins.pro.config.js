var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');
var dirVars = require('./base/dir-vars.config.js');
var path = require('path');

// webpack 内置的 banner-plugin

pluginsConfig.push(new webpack.BannerPlugin("Copyright by yangtongtong@taihe.com Date: " + new Date().toLocaleDateString()));

/* 压缩插件 */
pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        properties: false,
        warnings: false
    },
    output: {
        beautify: true,
        quote_keys: true
    },
    mangle: {
        screw_ie8: false
    },
    sourceMap: false
}));

pluginsConfig.push(new webpack.DefinePlugin({
    IS_PRODUCTION: false,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}));

module.exports = pluginsConfig;
