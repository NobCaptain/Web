const express = require('express');
const app = express();
const qs = require('./js/29-自定义Express中间件');
app.use(qs);
app.post('/',(req,res) => {
    console.log(req.body);
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});