/**
 * Created by muyi on 2017/9/13.
 */
var dirVars = require('./base/dir-vars.config.js');
const moduleConfig = require('./inherit/module.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

moduleConfig.rules.push({
    test: /\.css$/,
    exclude: /node_modules|bootstrap/,
    loader: 'style-loader!css-loader!postcss-loader',
});

moduleConfig.rules.push({
    test: /\.less$/,
    include: dirVars.srcRootDir,
    loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!postcss-loader!less-loader"}),
});

module.exports = moduleConfig;
