var webpack = require('webpack');
var pluginsConfig = require('./inherit/plugins.config.js');
var dirVars = require('./base/dir-vars.config.js');
var path = require('path');

pluginsConfig.push(new webpack.DefinePlugin({
    IS_PRODUCTION: false,
}));
pluginsConfig.push(new webpack.LoaderOptionsPlugin({
    options: {
        //postcss: require('./inherit/postcss.config.js'),
        //eslint: require('./vendor/eslint.config.js'),
    },
}));

module.exports = pluginsConfig;
