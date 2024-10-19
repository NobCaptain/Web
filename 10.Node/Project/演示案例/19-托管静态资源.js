const express = require('express');
const app = express();
app.use('/js',express.static('./js'));
app.use('/file',express.static('./files'));
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});