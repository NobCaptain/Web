// 导入Express模块。
const express = require('express');
// 实例化Web服务器对象。
const app = express();
// 导入Express-Session模块。
const session = require('express-session');
// 将Express-Session模块注册为全局中间件，并且配置Express-Session模块。
app.use(session({
    // secret属性的属性值可以为任意字符串。
    secret: 'keyboard cat',
    // 固定写法。
    resave: false,
    // 固定写法。
    saveUninitialized: true
}));
// 当Express-Session模块配置成功后，即可通过请求对象中的Session对象来存储用户的关键信息。
app.post('/api/login',(req,res) => {
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({status: 1, massage: '登录失败'});
    }
    // 将用户信息存储到请求对象中的Session对象中。
    req.session.user = req.body;
    // 将用户登录状态存储到请求对象中的Session对象中。
    req.session.islogin = true;
    res.send({status: 0,massage: '登录成功'});
});
// 当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象来读取Session对象中存储的数据了。
app.get('/api/username',(req,res) => {
    if (!req.session.islogin) {
        res.send({status: 1,massage: 'fall'});
    }
    res.send({status: 0,massage: req.session.user});
});
// 当Express-Session模块配置成功后，并且请求对象中的Session对象中也存储了数据后，我们就可以直接使用请求对象中的Session对象中的destroy()方法来清除Session对象中存储的数据了。
app.post('/api/logout',(req,res) => {
    req.session.destroy();
    res.send({status: 0,massage: '退出登录'});
});