const express = require('express');
const app = express();
app.use((req,res,next) => {
    console.log('这是最简单的中间件函数1');
    next();
});
app.use((req,res,next) => {
    console.log('这是最简单的中间件函数2');
    next();
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});