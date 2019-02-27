/* MongoDB数据库操作指北

*启动服务，并且设定MongoDB的存储位置 
    *monogod --dbpath 路径

*启动mongo客户端，允许在控制台输入mongo命令
    *mongo

*显示当前存储位置所有的数据库
    *show dbs

* 切换/创建 数据库
    *use 数据库名

*打印当前所处的数据库
    *use

*为数据库创建集合
    *db.createCollection("集合名")

*查看当前数据库里的集合
    *show collections

*在集合里面插入数据,如果集合不存在，会隐式的添加集合
    *db.集合名.insert(bson)

*查找集合中的数据
    *db.集合名.find(【条件】)

*删除数据
    *db.集合名.deleteOne(【条件】)
    *db.集合名.deleteMany(【条件】)

*删除集合
    *db.集合名.drop()

*删除数据库
    *db.dropDatabase()
*/ 