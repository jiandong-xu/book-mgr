const mongoose = require('mongoose')
const {getMeta,preSave} = require('./helpers')

const UserSchema = new mongoose.Schema({
    account:String,//账户
    password:String,//密码    
    character:String,//代表的角色是什么   文案，类型，权限

    meta: getMeta(),//元信息，创建的事件和修改的事件
})

UserSchema.pre('save',preSave);

mongoose.model('User',UserSchema)//第一个参数为名字，第二个参数传递给它的参数 