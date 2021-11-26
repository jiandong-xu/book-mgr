const Router = require('@koa/router');
const mongoose = require('mongoose');

const User = mongoose.model('User')

const router = new Router({
    prefix:'/auth'
}); 

router.post('/register',async(ctx) => {
    console.log(ctx.request.body);

    const {account,password} = ctx.request.body;

    const one = await User.findOne({//findOne表示经查询条件
        account
    }).exec();//查询完成后执行一下
    
    if(one) {//用来判断用户是否已经存在
        ctx.body = {//返回给前端用的数据
            code:0,
            msg:'已存在该用户',
            data:null
        }  
        return;
    }

    const user = new User({
        account,
        password
    })

    const res = await user.save();

    ctx.body = {//返回给前端用的数据
        code:1,
        msg:'注册成功',
        data:res
    }  
});



router.post('/login',async(ctx) => {
    ctx.body = "登陆成功";
});

module.exports = router;
