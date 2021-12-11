const Router = require('@koa/router')
const mongoose = require('mongoose')
const { getBody } = require('../../helpers/utils/index.js')

const BOOK_CONST = {
    IN:'IN_COUNT',
    OUT:'OUT_COUNT',
}

const Book = mongoose.model('Book')

const router = new Router({
    prefix: '/book',
})

router.post('/add',async(ctx) => {
    const {name,price,author,publishDate,classify,count} = getBody(ctx);

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
    //库存
    count
    })

    const res = await book.save();
    
    ctx.body = {
        data:res,
        code:1,
        msg:'添加成功',
    };
})//这里注意括号位置，容易引起报错
    router.get('/list',async(ctx) => {
        const {
            page = 1,
            keyword = ''
        } = ctx.query;

        let {size = 10,} = ctx.query;
        size = Number(size)

        const query = {};

        if(keyword) {
            query.name = keyword;
        }

        const total = await Book.countDocuments();//查看一共有几条文档

        //(page - 1) * size
        const list = await Book
        .find(query)
        .skip((page - 1) * size)//需要跳过的数据
        .limit(size)//一页需要的数据
        .exec();

        ctx.body = {
            data:{
                total,
                list,
                page,
                size
            },
            code:1,
            msg:'获取列表成功'
        }
    })

    //MRTHOD DELETE
    //PATH   /book/:id
    router.delete('/:id',async (ctx) => {
        const {
            id
        } = ctx.params;

        const delMsg = await Book.deleteOne({
            _id:id,
        })

        ctx.body = {
            data:delMsg,
            msg:'删除成功',
            code:1
        }
    })

    router.post('/update/count',async (ctx) => {
        const {
            id,
            type
        } = ctx.request.body;
   
    let {num} = ctx.request.body;

    num = Number(num)

    const book = await Book.findOne({
        _id:id,
    }).exec();

    if(!book) {
        ctx.body = {
            code:0,
            msg:'没有找到书籍'
        };

        return;
    }

    //找到了书
    if(type === BOOK_CONST.IN) {
        //入库操作
        num = Math.abs(num);
       
    }else{
        //出库操作
        num = 0-Math.abs(num)
        
    }

    book.count = book.count + num;

    if(book.count < 0) {
        ctx.body = {
            code:0, 
            msg:'剩下的量不足以出库',
        }
        return;
    }

    const res = await book.save();

    ctx.body = {
        data:res,
        code:1,
        msg:'操作成功'
    }
})

router.post('/update',async (ctx) => {
    const {
        id,
        ...others
    } = ctx.request.body;

    const one = await Book.findOne({
        _id:id,
    }).exec();

    if(!one) {
        ctx.body = {
            msg:'没有找到书籍',
            code:0
        }
        return;
    }

    const newQuery = {};

    Object.entries(others).forEach(([key,value]) => {
        if(value) {
            newQuery[key] = value;
        }
    });

    Object.assign(one,newQuery);

    const res = await one.save();

    ctx.body = {
        data:res,
        code:1,
        msg:"保存成功"
    };
    
});

module.exports = router;