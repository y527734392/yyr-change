/**
 * Created by Muyi on 17/9/12.
 */

var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
//var pageArr = require('./base/page-entries.config.js');
var EntryPage= require('./base/page-entries.config.js');
var configEntry = {};
var devClient = path.resolve(dirVars.webapckConfigDir , 'dev-client');


var extras = [devClient];
configEntry['index'] = extras.concat(path.resolve(dirVars.srcRootDir, 'index'));

/*var vendors =[];
EntryPage.vendors.forEach((vendor) => {
    vendors = vendors.concat(path.resolve(dirVars.vendorDir, vendor));
    configEntry['vendor'] = vendors;
});*/
module.exports = configEntry;
