/**
 * Created by muyi on 2017/9/16.
 */

class Utils {
    constructor(){

    }
    api(url,options){
        console.log();
        if(!url){
            alert('请设置url参数');
            return false;
        }
        if(!!options.method && options.method.toLowerCase() === 'post'){
            return window.fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: this.parseJson2Url(options.data)
            }).then((res) => {
                if(res.ok){
                    return res.json();
                }else{
                    alert('数据请求失败,接口出问题了');
                }
            });
        }else {
            if(url.indexOf('?')>0){
                url = url+"&"+this.parseJson2Url(options.data)
            }else{
                url = url+"?"+this.parseJson2Url(options.data)
            };
            return window.fetch(url, {
                credentials: 'include',
                headers: {
                    'Accept': 'application/json, text/plain, */*'
                },
            }).then((res) => {
                if(res.ok){
                    return res.json();
                }else{
                    alert('数据请求失败,接口出问题了');
                }
            });
        }
    }
    parseJson2Url(param, key) {
        var paramStr = '';
        var mappingOperator = '=';
        var separator = '&';
        if (param instanceof String || typeof (param) == 'string' || param instanceof Number || typeof (param) == 'number' || param instanceof Boolean || typeof (param) == 'boolean') {
            paramStr += separator + key + mappingOperator + encodeURIComponent(param);
        } else {
            for (var i in param) {
                var value = param[i];
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += separator + this.parseJson2Url(value, k);
            }
        }
        return paramStr.substr(1);
    }
}

export default Utils