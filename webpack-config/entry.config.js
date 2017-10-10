/**
 * Created by Muyi on 17/9/12.
 */

var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
var pageArr = require('./base/page-entries.config.js');
var configEntry = {};
var devClient = path.resolve(dirVars.webapckConfigDir , 'dev-client');
//pageArr.forEach((page) => {
//    var extras = [devClient];
//    configEntry[page] = extras.concat(path.resolve(dirVars.pagesDir, page + '/index'));
//});

var extras = [devClient];
configEntry['index'] = extras.concat(path.resolve(dirVars.srcRootDir, 'index'));
module.exports = configEntry;
