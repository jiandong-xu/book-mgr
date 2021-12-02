const Router = require('@koa/router')
const mongoose = require('mongoose')
const Book = mongoose.model('Book')
const { getBody } = require('../../helpers/utils/index.js')

const router = new Router({
    prefix: '/book',
})

router.post('/add',async(ctx) => {
    const {name,price,author,publishDate,classify} = getBody(ctx);

    const book = new Book({
    //书名
    name,
    //价格
    price,
    //作者
    author,
    //出版日期
    publishDate,
    //分类 
    classify,
    })

    const res = await book.save();
    
    ctx.body = {
        data:res,
        code:1,
        msg:'添加成功',
    };
})//这里注意括号位置，容易引起报错
    router.get('/list',async(ctx) => {
        const list = await Book.find().exec();

        ctx.body = {
            data:list,
            code:1,
            msg:'获取列表成功'
        }
    })


module.exports = router;