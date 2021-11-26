const mongoose = require('mongoose')
const {getMate} = require('./helpers')

const UserSchema = new mongoose.Schema({
    account:String,//账户
    password:String,//密码    

    meta: getMate(),//元信息，创建的事件和修改的事件
})

mongoose.model('User',UserSchema)//第一个参数为名字，第二个参数传递给它的参数 