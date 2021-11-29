const mongoose = require('mongoose')
const {getMate} = require('./helpers')

const InviteCodeSchema = new mongoose.Schema({
     //邀请码
    code:String,
    //用来注册哪个账户
    user:String,
    meta: getMate(),//元信息，创建的事件和修改的事件
})
 
mongoose.model('InviteCode',InviteCodeSchema)//第一个参数为名字，第二个参数传递给它的参数 