/**
 * Created on 2017/7/18.
 * 测试数据库连接-- test database Connection
 */
const sequelize = require('./dbConnect');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been successfully.');
        process.exit();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        process.exit();
    });

