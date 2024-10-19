const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.post('/',(req,res) => {
    console.log(req.body);
    res.send(req.body);
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});