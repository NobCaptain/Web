// 导入jsonwebtoken模块。
const jwt = require('jsonwebtoken');
// 导入express-jwt模块。
const {expressjwt: expressJWT} = require('express-jwt');
// 导入Express模块。
const express = require('express');
// 实例化Web服务器对象。
const app = express();
// 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
app.use(express.urlencoded({extended: false}));
// 定义Secret密钥。
const secretKey = 'hello word';
// 将express-jwt模块注册为全局中间件，然后配置express-jwt模块来将Token字符串转换为JSON对象。
app.use(expressJWT({secret: secretKey,algorithms: ['HS256']}).unless({path: [/^\/api\//]}));
// 在用户登录成功后，将用户的信息生成为JWT字符串。
app.post('/api/login',(req,res) => {
    // 将请求体中的数据转存为常量。
    const userinfo = req.body;
    if (userinfo.username !== 'admin' || userinfo.password !== '123456') {
        return res.send({
            status: 0,
            massage: '登录失败'
        });
    }
    // 使用jsonwebtoken模块中的sign()方法，来将用户的信息生成为JWT字符串。
    const tokenStr = jwt.sign({username: userinfo.username},secretKey,{expiresIn: '60s'});
    // 将JWT字符串响应给客户端。
    res.send({
        status: '1',
        massage: '登录成功',
        token: tokenStr
    });
});
// 获取用户信息。
app.get('/admin/user',(req,res) => {
    console.log(req.auth);
    res.send({
        status: '1',
        massage: '获取信息成功',
        data: req.auth
    });
});
// 捕获解析JWT字符串失败后，所产生的错误。
app.use((err,req,res,next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: '401',
            massage: '解析JWT字符串错误'
        });
    }
    res.send({
        status: '500',
        massage: '未知错误'
    });
});
// 启动Web服务器。
app.listen(80,() => {
    console.log('Express server run in http://127.0.0.1');
});