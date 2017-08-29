Hapi.js、sequelize.js项目结构
=============

本项目由hapi.js 和 sequelize.js 搭建而成,并配置了hapi-swagger组件，便于查看接口文档。<br/>

项目结构
- 
![](http://i.imgur.com/jFUlpmB.png)<br>

- conf/：项目通用配置文件<br>
- controller/*.js：梳理数据的逻辑层<br>
- model/conf/*.js：数据库链接配置<br>
- model/dao/*.js：设置数据库表对应的实例<br>
- model/*.js：设置数据访问对象<br>
- service/*.js：对外接口访问服务<br>
- views/html/：模板文件<br>
- views/server/：视图服务配置<br>
- app.js：项目启动文件<br>

使用步骤
- 
1. npm install。
2. 在model/conf/下配置数据库连接
3. 在model/dao/下根据实际数据库设计，设置表的实例文件。比如：自动创建表、使用遗留表。
4. 在model下编写读取数据的操作
5. 开始coding
