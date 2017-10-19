var path = require('path');
var dirVars = require('./base/dir-vars.config.js');

module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  alias: {
    /* 各种目录 */

    /* components */
    components: path.resolve(dirVars.srcRootDir, 'components'),

    /* actions */
    actions: path.resolve(dirVars.srcRootDir, 'actions'),

    /* config */
    config: path.resolve(dirVars.srcRootDir, 'config'),

    /* reducers */
    reducers: path.resolve(dirVars.srcRootDir, 'reducers'),

    /* store */
    store: path.resolve(dirVars.srcRootDir, 'store'),

    /* vendor */
    vendor: path.resolve(dirVars.srcRootDir, 'vendor'),

    /* img */
    img: path.resolve(dirVars.staticDir, 'img'),

    /* html */
    html: path.resolve(dirVars.staticDir, 'html'),

    /* icon */
    iconfont: path.resolve(dirVars.staticDir, 'iconfont/'),

    /* less */
    less: path.resolve(dirVars.staticDir, 'less'),

    /* config */
    //configModule: path.resolve(dirVars.configDir, 'common.config'),

    /* utils */
    utils: path.resolve(dirVars.staticDir, 'js/utils'),
  },

  // 当require的模块找不到时，尝试添加这些后缀后进行寻找
  extensions: ['.js','.jsx', '.css', '.less' ,'.html'],
};
