Dao 数据访问对象 
=============

dao文件夹下存放数据访问对象，通过该对象可以对数据对应表格进行增、删、改、查。如下：
<pre>
<code>
/**
 *创建新表
 */
const UserDao = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
},{
    timestamps: true //因为数据库连接的时候已经配置全局不适用时间戳字段，这里需要使用，则单独设置。
});
//服务启动时，自动执行下面语句
UserDao.sync();//如表不存在，则创建表；存在，则同步表内数据
//UserDao.sync({force: true}) // 删除表，然后创建表

/**
 *使用遗留表的的形式
 */
const sutdentDao = sequelize.define('student', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, //主键
        autoIncrement: true //自增
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    age: {
        type: Sequelize.INTEGER,
        field: 'age'
    },
    sex: {
        type:  Sequelize.STRING,
        field: 'sex'
    }
},{
    tableName: 'students_copy' //指定遗留表
});


</code>
</pre>
遗留表的使用请参考连接：http://docs.sequelizejs.com/manual/advanced/legacy.html