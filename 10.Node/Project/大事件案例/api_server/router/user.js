// 导入Express模块。
const express = require('express');
// 导入router_Handler文件夹中的user.js文件。
const router_Handler = require('../router_Handler/user.js');
// 导入@escook/express-joi模块。
const expressJoi = require('@escook/express-joi');
// 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
const { reg_login_schema } = require('../schema/user.js');
// 创建路由对象。
const router = express.Router();
// 用户注册接口。
// 在注册新用户的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证，在数据验证通过后，会把这次请求流转给后面的路由处理函数，但是如果数据验证失败，那么就会终止后续代码的执行，并抛出一个全局的Error错误，我们可以进入全局错误级别中间件中来进行处理。
router.post('/reguser',expressJoi(reg_login_schema),router_Handler.regUser);
// 用户登录接口。
// 在用户登录的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
router.post('/login',expressJoi(reg_login_schema),router_Handler.login);
// 向往共享router对象。
module.exports = router;