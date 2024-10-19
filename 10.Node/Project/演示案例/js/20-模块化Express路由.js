// 导入Express模块。
const express = require('express');
// 使用Express模块中的Router()函数，来创建路由对象。
const router = express.Router();
// 往路由对象上挂载具体的路由。
router.get('/',(req,res) => {
    res.send('你好');
});
router.post('/',(req,res) => {
    res.send('收到');
});
// 向外共享路由对象。
module.exports = router;