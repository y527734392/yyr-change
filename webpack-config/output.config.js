/**
 * Created by Muyi on 17/9/12.
 */
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
    path: dirVars.buildDir,
    publicPath: '/',
    filename: 'static/[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].build.js'
};