// 导入express模块。
const express = require('express');
// 创建路由对象。
const router = express.Router();
// 导入router_Handler文件夹中的userinfo.js文件。
const userinfo_handler = require('../router_Handler/userinfo.js');
// 导入@escook/express-joi模块。
const expressJoi = require('@escook/express-joi');
// 导入schema文件夹中的user.js文件，并将其进行解构，获得验证规则对象。
const { update_userinfo_schema,update_password_schema,update_avatar_schema } = require('../schema/user.js');
// 获取用户基本信息。
router.get('/userinfo',userinfo_handler.getUserInfo);
// 更新用户基本信息。
// 在更新用户基本信息的路由中，将@escook/express-joi模块声明成一个局部中间件，来对当前请求中携带的数据进行验证。
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserInfo);
// 重置用户密码。
router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword);
// 更新用户头像。
router.post('/update/avatar',expressJoi(update_avatar_schema),userinfo_handler.updateAvatar);
// 向外共享路由对象。
module.exports = router;