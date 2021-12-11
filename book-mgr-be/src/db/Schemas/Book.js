const mongoose = require('mongoose')
const {getMate} = require('./helpers')

const BookSchema = new mongoose.Schema({
    //书名
    name:String,
    //价格
    price:Number,
    //作者
    author:String,
    //出版日期
    publishDate:String,
    //分类 
    classify:String,
    //库存
    count:Number,
    meta: getMate(),//元信息，创建的事件和修改的事件
});

mongoose.model('Book',BookSchema)//第一个参数为名字，第二个参数传递给它的参数 