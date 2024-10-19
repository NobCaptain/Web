const express = require('express');
const app = express();
app.get('/',function(req,res) {
    throw new Error('服务器内部发生了错误');
    res.send('HOME PAGE');
});
app.use((err,req,res,next) => {
    console.log('发生了错误' + err.message);
    res.send('Error' + err.message);
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});