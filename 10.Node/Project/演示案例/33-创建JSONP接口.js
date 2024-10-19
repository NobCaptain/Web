// 导入Express模块。
const express = require('express');
// 实例化Web服务器对象。
const app = express();
// 编写JSONP接口。
// 因为JSONP仅支持GET请求，不支持POST、PUT、DELETE等请求，所以我们要监听客户端发起的GET请求。
app.get('/api/jsonp',(req,res) => {
    // 通过请求对象中的query属性中的callback属性，来获取客户端向Web服务器发送的回调函数的名字。
    const funcName = req.query.callback;
    // 获取服务器要通过JSONP形式发送给客户端的数据。
    const data = {name: 'zs',age: 34}
    // 拼接出一个函数调用的字符串。
    const scriptStr = `${funcName}(${JSON.stringify(data)})`;
    // 把拼接出的函数调用的字符串，响应给客户端的<script>标签进行解析执行。
    res.send(scriptStr);
});
// 导入CORS中间件。
const cors = require('cors');
// 使用Web服务器对象中的use()方法，来将CORS中间件设置成全局生效的Express中间件。
app.use(cors());
// 启动Web服务器。
app.listen(80,() => {
    console.log('http server runing at http://127.0.0.1');
});