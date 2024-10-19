const express = require('express');
const app = express();
const mw = (req,res,next) => {
    console.log('这是最简单的中间件函数');
    next();
}
app.get('/',mw,function(req,res) {
    res.send('这个路由调用了中间件');
})
app.get('/user',function(req,res) {
    res.send('这个路由没有调用中间件');
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});