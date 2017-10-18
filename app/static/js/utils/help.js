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
	formateTime(time, fmt) {
		var f = new Date(time * 1000);
		var o = {
			"M+": f.getMonth() + 1,                 //月份
			"d+": f.getDate(),                    //日
			"h+": f.getHours(),                   //小时
			"m+": f.getMinutes(),                 //分
			"s+": f.getSeconds(),                 //秒
			"q+": Math.floor((f.getMonth() + 3) / 3), //季度
			"S": f.getMilliseconds()             //毫秒
		};

		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (f.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	}
    Login( sta,tpl ) {
        var TPASS = new Tpass();
        var tar = sta === 2 ? '_blank' : (sta === 0 ? 'pop' : '_self');
        var param = {
            tpl: tpl,
            u: loc.href,
            target: tar,
            staticPage: location.protocol + '//' + location.host + '/static/html/tpassjump.html'
        };
        TPASS.login(param, function (d) {
            _m.utils.new_userinfo();
            _m.cfg.login_log = 0;
            window.MiniPipe.refreshBlock();

        });
    }
}

export default Utils