/**
 * Created on 2017/7/18.
 */
var Sequelize = require('sequelize')

module.exports = new Sequelize('kakacenter', 'u_kkdnodejs_owner', '1c4B76^073E7b', {
    host: '10.139.60.143',//数据库服务器地址
    port: '1433',//数据库服务器端口
    dialect: 'mssql',//数据库类型，支持种：'mysql'|'sqlite'|'postgres'|'mssql',
    pool: {
        max: 1500,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false //对所有的实例都不添加时间戳字段,若实例需要用到，则单独设置
    },
    logging: false
});
//module.exports = new Sequelize('mysql://数据库服务器地址:端口/数据库名称');

