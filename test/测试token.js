var jwt = require('jsonwebtoken');
var token = jwt.sign({ 
    //这里就是payload传递的信息
    account:'a.cc.com',
    _id:123//标记一个用户
}, 'aaa');//secret密钥，结合加密算法加密用的，把加密后的内容放到最后

console.log(token); 

//header
//加密的算法  sha256算法
//jwt


//payload
//传递过去的参数，服务端想拿到的信息

//signature

jwt.verify(token,'aaa',(err,payload) => {
    console.log('err:'+err,payload);
})//第二个参数就是密钥