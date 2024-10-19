const express = require('express');
const app = express();
app.use((req,res,next) => {
    req.time = new Date();
    next();
});
app.use((req,res,next) => {
    console.log(req.time);
    next();
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});