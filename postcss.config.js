/**
 * Created by muyi on 2017/9/13.
 */
var precss = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = function postcss() {
    return [precss, autoprefixer({
        remove: false,
        browsers: ['ie >= 8', '> 1% in CN'],
    })];
};
