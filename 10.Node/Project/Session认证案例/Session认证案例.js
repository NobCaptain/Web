// 导入Express模块。
const express = require('express');
// 实例化Web服务器。
const app = express();
// 导入Express-session模块。
const session = require('express-session');
// 将Express-Session模块注册为全局中间件，并配置Express-Session模块。
app.use(session({
    // secret属性的属性值可以为任意字符串。
    secret: 'keyboard cat',
    // 固定写法。
    resave: false,
    // 固定写法。
    saveUninitialized: true
}));
// 托管静态页面。
app.use(express.static('./pages'));
// 解析POST提交过来的表单数据。
app.use(express.urlencoded({ extended: false }));
// 向Session对象中存储数据。
app.post('/api/login',(req,res) => {
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({status: 0,massage: '登录失败'});
    }
    req.session.user = req.body;
    req.session.islogin = true;
    res.send({status: 1,massage: '登录成功'});
});
// 向Session对象中取数据。
app.get('/api/username',(req,res) => {
    if (!req.session.islogin) {
        return res.send({status: 0,massage: 'fail'});
    }
    res.send({status: 1,massage: '获取成功',user: req.session.user.username});
});
// 清除Session对象中的数据。
app.post('/api/logout',(req,res) => {
    req.session.destroy();
    res.send({status: 1,massage: '退出登录成功'});
});
app.listen(80,function() {
    console.log('Express server running at http://127.0.0.1');
});