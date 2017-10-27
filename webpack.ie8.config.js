/**
 * Created by Muyi on 17/9/12.
 */

//require('./npm-scripts/before-build.script');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var dirVars = require('./webpack-config/base/dir-vars.config.js');

module.exports = {
    entry: require('./webpack-config/entry.ie8.config.js'),
    output:require('./webpack-config/output.ie.config.js'),
    module:{
    	rules: [
	    	{
	            test: /\.js$/,
	            loader: 'es3ify-loader',
	        },
        ]
    },
    plugins:[
    	new HtmlWebpackPlugin({
	        filename: 'index.html',
	        template: path.resolve(dirVars.buildDir, 'index.html'),
	        hash: true, // 为静态资源生成hash值
	        xhtml: true,
	        inject:'body',
	    })
    ],
};