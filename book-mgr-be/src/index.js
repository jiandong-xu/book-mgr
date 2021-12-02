//每个文件都是一个模块
const Koa = require('koa')
const koaBody = require('koa-body')
const {connect} = require('./db/')
const registerRouters = require('./routers/index')//注册模块
const cors = require('@koa/cors') 

const app = new Koa();

connect().then(() => {//用promise保证时序不出问题
    app.use(cors())
    app.use(koaBody())
    registerRouters(app);

    //开启一个http服务
    //接受http请求，并做处理，处理完后响应
    app.listen(3000,() => {
        console.log('启动成功');
    })
})


