const Sequelize = require('sequelize');
const sequelize = require('../conf/dbConnect');

const NoticeDao = sequelize.define('notice', {
    descript: {
        type: Sequelize.STRING //描述
    },
    url: {
        type: Sequelize.STRING //生成的链接
    },
    content: {
        type: Sequelize.TEXT //链接对应的富文本内容
    },
    uid: {
        type: Sequelize.STRING,//uid，唯一标识
    }
},{
    timestamps: true
});

//服务启动时，自动执行下面语句
NoticeDao.sync();//如表不存在，则创建表；存在，则同步表内数据
//NoticeDao.sync({force: true}) // 删除表，然后创建表
module.exports = NoticeDao;