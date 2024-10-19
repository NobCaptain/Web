// 导入db文件夹中的index.js文件。
const db = require('../db/index.js');
// 导入bcryptjs模块。
const bcryptjs = require('bcryptjs');
// 导入jsonwebtoken模块。
const jwt = require('jsonwebtoken');
// 导入生成Token字符串所需要的参数配置。
const config = require('./config.js');
// 向外共享用户注册时的处理函数。
exports.regUser = (req,res) => {
    // 获取客户端提交到服务器的用户信息。
    const userinfo = req.body;
    // 定义SQL语句，查询用户名是否被占用。
    const strSQL = 'select * from ev_users where username=?';
    // 执行SQL语句。
    db.query(strSQL,userinfo.username,(err,results) => {
        // SQL语句执行失败。
        if (err) {
            return res.cc(err);
        }
        // 判断用户名是否被占用。
        if (results.length > 0) {
            return res.cc('用户名已被占用');
        }
    });
    // 调用bcryptjs模块中的hashSync方法来加密用户密码。
    userinfo.password = bcryptjs.hashSync(userinfo.password,10);
    // 定义插入用户信息SQL语句。
    const inSQL = 'insert into ev_users set ?';
    // 执行插入用户信息SQL语句。
    db.query(inSQL,{username: userinfo.username,password: userinfo.password},(err,results) => {
        // SQL语句执行失败。
        if (err) {
            return res.cc(err);
        }
        // 判断是否真的插入用户信息成功。
        if (results.affectedRows !== 1) return res.cc('插入用户信息失败');
        res.send({
            status: 0,
            message: '插入用户信息成功'
        });
    });
}
// 向外共享用户登录时的处理函数。
exports.login = (req,res) => {
    // 接收表单数据。
    const userinfo = req.body;
    // 定义查找数据的SQL语句。
    const sqlStr = 'select * from ev_users where username=?';
    // 执行SQL语句。
    db.query(sqlStr,userinfo.username,(err,results) => {
        // 如果SQL语句执行失败将错误信息发送给客户端。
        if (err) return res.cc(err);
        // 如果在数据库中查询不到该用户的用户名，需要返回没有该用户名的错误信息。
        if (results.length !== 1) return res.cc('没有该用户名');
        // 验证用户输入的密码是否正确。
        const compareResult = bcryptjs.compareSync(userinfo.password,results[0].password);
        // 如果用户输入的密码是错误的，则返回用户名密码错误的错误信息。
        if (!compareResult) return res.cc('用户名密码错误');
        // 剔除用户信息中的密码和头像。
        const user = { ...results[0], password: '', user_pic: '' }
        // 将剔除完毕的用户信息，生成为Token字符串。
        const tokenStr  = jwt.sign(user,config.jwtSecretKey,{ expiresIn: config.expiresIn });
        // 用户登录成功后，将生成的Token字符串传递给客户端。
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        });
    });
}