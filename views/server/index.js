//自动导出当前目录下的所有js文件
var requireDirectory = require('require-directory');

var requireObject = requireDirectory(module)

var list = [];
for(var item in requireObject) {
    list.push(requireObject[item]);
}
// 把controller文件下的组件以列表的形式导出
module.exports = list