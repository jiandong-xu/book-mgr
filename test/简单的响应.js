const Koa = require('koa')

const app = new Koa()

//context =>ctx当前请求的上下文(信息)
app.use((ctx) => {
    // console.log(ctx.URL);
    // console.log(ctx.path);

    const {path="/"} = ctx;
    if(path === '/user/123') {
        ctx.body = '返回用户123的信息'
    }

    if(path === '/settings') {
        ctx.body = '返回一些设置的信息'
    }

     
})

app.listen(3000,() => {
    console.log('启动成功');
})