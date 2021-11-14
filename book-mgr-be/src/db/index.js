const mongoose = require('mongoose')

/**
 * 明确三件事情
 * 1.给那个数据库
 * 2.哪个集合
 * 3.添加什么格式的文档
 */

//Schema 模式（会映射成集合）(映射了MongoDB下的集合，并且它的内容就是集合下文档的构成)

//Modal 模型（根据Schema生成的一套方法集合，这套方法用来操作集合和集合下的文档 ）

const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String, 
    age:Number
})

const UserModel = mongoose.model('User',UserSchema)
 
const connect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr') //连接数据库 

    mongoose.connection.on('open',() => {//当数据库被打开的时候，做一下事情
        console.log('连接成功');

        //创建文档
        const user = new UserModel({
            nickname:"小明",
            password:"123456",
            age:12
        })
        user.age = 99;
        user.save();//保存，同步到MongoDB
    })
}

connect()