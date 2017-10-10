/**
 * Created by Muyi on 17/9/12.
 */
var fs = require('fs');
var rimraf = require('rimraf');
var dirVars = require('../webpack-config/base/dir-vars.config.js');
rimraf(dirVars.buildDir, fs, function cb() {
    const _josn = {
        "build":"目录已清空",
    };
    console.log(_josn);
});