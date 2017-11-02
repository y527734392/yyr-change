var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var es3ifyPlugin = require('es3ify-webpack-plugin');
var dirVars = require('../base/dir-vars.config.js');
var pageArr = require('../base/page-entries.config.js');
//var HashOutput = require('webpack-plugin-hash-output');
var configPlugins = [

    /* 全局shimming */
    new webpack.ProvidePlugin({
        $: 'zepto',
    }),
    /* 抽取出所有通用的部分 */
    new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',      // 需要注意的是，chunk的name不能相同！！！
        filename: 'static/js/commons.[hash].js',
        minChunks: 2,
    }),
    /* 抽取出webpack的runtime代码()，避免稍微修改一下入口文件就会改动commonChunk，导致原本有效的浏览器缓存失效 */
    /*new webpack.optimize.CommonsChunkPlugin({
        name: 'webpack-runtime',
        filename: 'commons/webpack-runtime.[hash].js',
    }),*/

    new CopyWebpackPlugin([
        {
            /* 抽取第三方部分 */
            from: path.resolve(dirVars.vendorDir),
            to: path.resolve(dirVars.buildDir,'static/vendor'),
        },
    ]),

    /* 抽取出chunk的css */
    new ExtractTextPlugin('static/css/[name]-[contenthash].css',{
        allChunks: false
    }),

    /* 兼容ie8 */
    new es3ifyPlugin(),

    // 添加三个插件热加载
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(dirVars.srcRootDir, 'index.html'),
        hash: true, // 为静态资源生成hash值
        xhtml: true,
        inject:'body',
        title:'hello'
    })
];

module.exports = configPlugins;
