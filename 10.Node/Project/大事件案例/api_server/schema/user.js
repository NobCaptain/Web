// 导入joi模块。
const joi = require('joi');
const { use } = require('../router/user');
// 定义用户名的验证规则。
const username = joi.string().alphanum().min(1).max(18).required();
// 定义密码的验证规则。
const password = joi.string().pattern(/^[\S]{6,12}$/).required();
// 定义id的验证规则。
const id = joi.number().integer().min(1).required();
// 定义昵称的验证规则。
const nickname = joi.string().required();
// 定义邮箱的验证规则。
const email = joi.string().email().required();
// 定义用户头像的验证规则。
const avatar = joi.string().dataUri().required();
// 将定义的验证规则打包成对象共享出去。
exports.reg_login_schema = {
    body: {
        username,
        password
    }
}
// 将定义的验证规则打包成对象共享出去。
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email
    }
}
// 将定义的验证规则打包成对象共享出去。
exports.update_password_schema = {
    body: {
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}
// 将定义的验证规则打包成对象共享出去。
exports.update_avatar_schema = {
    body: {
        avatar
    }
}