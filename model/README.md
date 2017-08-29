model 数据访问层
=============

model文件夹下存放访问数据的对象，对象中包含增、删、改、查数据的方法。如下：
<pre>
<code>
const User = require('../dao/userDao');

/**
 * 插入数据
 * @param firstName
 * @param lastName
 * @returns {Promise.<Model>|*|Promise|Domain}
 */
const insert = (firstName, lastName) => {
    return User.create({
        firstName: firstName,
        lastName: lastName
    })
}

/**
 * 查询Users表中的所有数据，并返回查询结果,查询结果为promise对象
 * @returns {Promise.<Array.<Model>>}
 */
const findAllUser = () => {
    return User.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}
    })
}

module.exports = {
    insert:insert,
    findAllUser:findAllUser
}


</code>
</pre>

使用sequelizejs操作数据的方式有很多，这里不多赘述了，详情请点击下面的链接进一步了解：<br/>
[http://docs.sequelizejs.com/manual/tutorial/instances.html](http://docs.sequelizejs.com/manual/tutorial/instances.html) 
