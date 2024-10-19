const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));
app.post('/',(req,res) => {
    console.log(req.body);
    res.send(req.body);
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});