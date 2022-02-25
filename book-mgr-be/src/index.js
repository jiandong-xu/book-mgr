//每个文件都是一个模块
const Koa = require('koa')
const koaBody = require('koa-body')
const {connect} = require('./db/')
const registerRouters = require('./routers/index')//注册模块
const koaStatic = require('koa-static');
const {middleware:koaJwtMiddleware,checkUser,catchTokenError} = require('./helpers/token');
const {LogMiddleware} = require('./helpers/log/index');
const cors = require('@koa/cors');
const config = require('./project.config');
const path = require('path');

const app = new Koa();

app.use(koaStatic(path.resolve(__dirname,'../public')))

connect().then(() => {//用promise保证时序不出问题
    app.use(cors());
    app.use(koaBody({
        multipart:true,  //打开后支持文件上传
        forFileSize:{
            maxFileSize:200*1024*1024//对上传文件大小限制
        }
    }));

    app.use(catchTokenError);

    koaJwtMiddleware(app);

    app.use(checkUser);

    app.use(LogMiddleware);

    registerRouters(app);

    //开启一个http服务
    //接受http请求，并做处理，处理完后响应
    app.listen(config.SERVER_PORT,() => {
        console.log('启动成功');
    })
})


