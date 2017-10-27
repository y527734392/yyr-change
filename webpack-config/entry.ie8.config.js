/**
 * Created by Muyi on 17/9/12.
 */

var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
//var pageArr = require('./base/page-entries.config.js');
var EntryPage= require('./base/page-entries.config.js');
var configEntry = {};

var js =[];
EntryPage.buildjs.forEach((pagejs) => {
    js = js.concat(path.resolve(dirVars.buildjsDir, pagejs));
    configEntry['index'] = js;
});
module.exports = configEntry;
