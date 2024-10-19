const express = require('express');
const app = express();
app.post('/user/:id',(req,res) => {
    res.send(req.params);
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});