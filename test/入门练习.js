const Koa = require('koa')

const app = new Koa()

//通过app.use注册中间件
//中间件本质上 他就是一个函数
//context上下文，当前请求的相关信息都在里面
app.use(async(context,next) => {
    // console.log(context);
    const { require:req } = context;
    // const url = req.url;
    const{ url } = req;

    if(url === '/') {
        // context.body = 'abcde'
        context.response.body = '<h1>主页</h1>'
        return;
    }

    if(url === '/user/list') {
        // context.body = 'abcde'
        context.response.body = '<h1>用户列表<h1>'
        return;
    }
    context.body = '404'  
    console.log(1);
    await next()
    console.log(3);
})

app.use(async(context) => {
    console.log(2);
    context.body = '找不到资源'
})

app.listen(3000,() => {
    console.log('启动成功');
})

console.log('1122333'); 