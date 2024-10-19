const express = require('express');
const app = express();
const mw1 = (req,res,next) => {
    console.log('这是第一个中间件函数');
    next();
}
const mw2 = (req,res,next) => {
    console.log('这是第二个中间件函数');
    next();
}
app.get('/',mw1,mw2,function(req,res) {
    res.send('这个路由调用了两个中间件');
})
app.get('/user',[mw1,mw2],function(req,res) {
    res.send('这个路由调用了两个中间件');
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});