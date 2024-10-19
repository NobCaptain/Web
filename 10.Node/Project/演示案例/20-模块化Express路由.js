// 导入Express模块。
const express = require('express');
// 创建Web服务器。
const app = express();
// 导入Express路由模块对应的JavaScript文件。
const router = require('./js/20-模块化Express路由');
// 使用Web服务器对象中的use()方法来注册导入的Express路由模块对应的JavaScript文件。
app.use('/api',router);
// 启动Web服务器。
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});