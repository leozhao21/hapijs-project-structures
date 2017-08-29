
var basePath = '/mmsapi/v1';//设置根路径

module.exports = {
    documentationPage: true,//设置为false，则不显示文档
    basePath: basePath,//设置基础访问路径
    pathPrefixSize: (basePath.split('/')).length,//展开路径的级数
    lang:'zh-cn',//文档语言设置
    info: {
        title: '接口文档',//文档标题
        version: require('../package.json').version,//文档版本
        description:'整个项目的接口文档',
        termsOfService: 'https://github.com/glennjones/hapi-swagger/'
    },
    schemes: ['http'],//设置访问协议
    debug: true  // 开启debug
};