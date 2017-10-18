/**
 * Created by Muyi on 17/9/12.
 */

require('./npm-scripts/before-build.script');

module.exports = {
    entry: require('./webpack-config/entry.config.js'),
    output:require('./webpack-config/output.config.js'),
    module:require('./webpack-config/module.dev.config.js'),
    resolve:require('./webpack-config/resolve.config.js'),
    plugins:require('./webpack-config/plugins.pro.config.js'),
    //devServer: require('./webpack-config/devServer.config.js'),
};