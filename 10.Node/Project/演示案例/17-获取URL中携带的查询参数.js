const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send(req.query);
});
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});