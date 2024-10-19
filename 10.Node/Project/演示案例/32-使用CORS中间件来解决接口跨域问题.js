// 导入Express模块。
const express = require('express');
// 实例化Web服务器对象。
const app = express();
// 导入模块化的Express路由的JavaScript文件。
const api = require('./js/30-使用Express编写APi接口');
// 导入CORS中间件。
const cors = require('cors');
// 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
app.use(cors());
// 使用Express内置的Express中间件来解析客户端向Web服务器发送的URL-encoded格式的请求体数据。
app.use(express.urlencoded({extended: false}));
// 使用Web服务器对象中的use()方法来注册导入的Express路由模块对应的JavaScript文件。
app.use('/api',api);
// 启动Web服务器。
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});