/**
 * Created by Muyi on 17/9/12.
 */
var dirVars = require('./base/dir-vars.config.js');
console.log(dirVars.buildDir);
module.exports = {
    path: dirVars.buildDir,
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].build.js'
};