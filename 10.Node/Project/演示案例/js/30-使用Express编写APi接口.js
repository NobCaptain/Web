// 导入Express模块。
const express = require('express');
// 实例化路由对象。
const router = express.Router();
router.get('/get',(req,res) => {
    // 通过请求对象中query属性来获取客户端向Web服务器发起GET请求时，请求的URL地址中的查询字符串。
    const query = req.query;
    // 当客户端向Web服务器发起GET请求时，Web服务器向客户端发送处理的结果。
    res.send({
        // 状态，0表示请求成功，1表示请求失败。
        status: 0,
        // 状态描述。
        message: 'GET请求成功',
        // Web服务器向客户端发送处理的结果的具体的数据。
        data: query
    });
});
router.post('/post',(req,res) => {
    // 通过请求对象中body属性来获取客户端向Web服务器发起POST请求时，客户端向Web服务器发送的请求体数据。
    const body = req.body;
    // 当客户端向Web服务器发起POST请求时，Web服务器会向客户端发送处理的结果。
    res.send({
        // 状态，0表示请求成功，1表示请求失败。
        status: 0,
        // 状态描述。
        message: 'POST请求成功',
        // Web服务器向客户端发送处理的结果的具体的数据。
        data: body
    })
});
// 向外共享路由对象。
module.exports = router;