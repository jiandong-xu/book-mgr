const mongoose = require('mongoose')
const {getMeta,preSave} = require('./helpers')

const LogSchema = new mongoose.Schema({
    user: {
        account:String,
        id:String
    },
    request: {
        method:String,
        url:String,
        status:Number
    },

    startTime:Number,
    endTime:Number,

    show:Boolean,

    meta: getMeta(),//元信息，创建的事件和修改的事件
});

LogSchema.pre('save',preSave);

mongoose.model('Log',LogSchema)//第一个参数为名字，第二个参数传递给它的参数 