/**
 * good日志插件配置
 */
//日期格式化为字符串
Date.prototype.pattern=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}
const data = new Date();

//参考链接：https://github.com/hapijs/good/blob/master/API.md#reporter-interface
module.exports = {
    ops: {
        interval: 15000//调用Oppsy.start（）时使用的间隔。默认为15000。Oppsy是一个用于收集hapi服务器操作信息的对象.
    },
    reporters: {
        myConsoleReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*'}]//log:记录信息不限于特定请求，如系统错误，后台处理,配置错误等。映射到从hapi服务器发出的“日志”事件
        }, {
            module: 'good-console'
        }, 'stdout'],
        // opsFileReporter: [{
        //     module: 'good-squeeze',
        //     name: 'Squeeze',
        //     args: [{ ops: '*'}]//l系统和过程性能 如： CPU，内存，磁盘和其他指标
        // }, {
        //     module: 'good-squeeze',
        //     name: 'SafeJson'
        // }, {
        //     module: 'good-file',
        //     args: ['./log/ops'+ data.pattern('yyyy-MM-dd')]
        // }],
        logFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ log: '*'}]//log:记录信息不限于特定请求，如系统错误，后台处理,配置错误等。映射到从hapi服务器发出的“日志”事件
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }, {
            module: 'good-file',
            args: ['./log/serverlog/'+ data.pattern('yyyy-MM-dd')]
        }],
        responseFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{response:"*"}]//response:关于传入请求和响应的信息
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }, {
            module: 'good-file',
            args: ['./log/response/'+ data.pattern('yyyy-MM-dd')]
        }],
        errorFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ error: '*' }]//请求状态代码为500的响应。这将映射到“请求错误”hapi事件
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'//SafeJson流可用于对对象进行字符串化以防止循环对象错误
        }, {
            module: 'good-file',
            args: ['./log/error/'+ data.pattern('yyyy-MM-dd')]
        }],
        requestFileReporter: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{ request: '*' }]//请求记录信息。这将映射到通过request.log（）发出的hapi'request'事件
        }, {
            module: 'good-squeeze',
            name: 'SafeJson'
        }, {
            module: 'good-file',
            args: ['./log/request/'+ data.pattern('yyyy-MM-dd')]
        }]
    }
};