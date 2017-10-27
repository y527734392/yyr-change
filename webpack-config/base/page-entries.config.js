/**
 * Created by Muyi on 17/9/12.
 */

var glob = require('glob');
var dirVars = require('./dir-vars.config.js');
var vendors = {
    cwd: dirVars.testDir, // 在vendor目录里找
    sync: true, // 这里不能异步，只能同步
};
var globVendors = new glob.Glob('!(_)*', vendors); // 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录

module.exports = {
    vendors: globVendors.found,// 一个数组，形如['vendor/html', 'vendor/img', 'vendor/js']
};
//module.exports = globHtmls.found; // 一个数组，形如['index/index', 'index/login', 'alert/index']
