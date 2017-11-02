/**
 * Created by Muyi on 17/9/12.
 */


module.exports = {
    entry: require('./webpack-config/entry.config.js'),
    output:require('./webpack-config/output.pro.config.js'),
    module:require('./webpack-config/module.dev.config.js'),
    resolve:require('./webpack-config/resolve.config.js'),
    plugins:require('./webpack-config/plugins.pro.config.js'),
};