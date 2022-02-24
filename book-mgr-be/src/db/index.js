require('./Schemas/User');//为了让这个文件执行，执行后就会被注册，注册后就可以在routers中使用
require('./Schemas/InviteCode');
require('./Schemas/Book');
require('./Schemas/InventoryLog');
require('./Schemas/Character');
require('./Schemas/Log');
require('./Schemas/LogResponse');
require('./Schemas/ForgetPassword');
require('./Schemas/BookClassify');

const mongoose = require('mongoose');

const connect = () => { 
    return new Promise((resolve) => {
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr') //连接数据库 
        mongoose.connection.on('open', () => {//当数据库被打开的时候，做一下事情
            console.log('数据库连接成功');

            resolve();
        })  
    })
}

module.exports = {
    connect
}
