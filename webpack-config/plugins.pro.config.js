var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');
var dirVars = require('./base/dir-vars.config.js');
var path = require('path');

// webpack 内置的 banner-plugin

pluginsConfig.push(new webpack.BannerPlugin("Copyright by yangtongtong@taihe.com Date: "+ new Date().toLocaleDateString()));

/* 压缩插件 */
pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
  /*compress: {
    warnings: false,
  },*/
}));

pluginsConfig.push(new webpack.DefinePlugin({
  IS_PRODUCTION: false,
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
}));

pluginsConfig.push(new webpack.LoaderOptionsPlugin({
  options: {
    //postcss: require('./postcss.config.js'),
    //eslint: require('./vendor/eslint.config.js'),
  },
}));

module.exports = pluginsConfig;
