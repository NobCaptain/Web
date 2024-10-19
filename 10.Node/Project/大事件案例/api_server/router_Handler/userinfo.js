// 导入db文件夹中的index.js文件。
const db = require('../db/index.js');
// 导入bcryptjs模块
const bcryptjs = require('bcryptjs');
// 向外共享获取用户信息时的处理函数。
exports.getUserInfo = (req,res) => {
    // 定义SQL语句，根据用户的id查询用户的基本信息。
    const sqlstr = 'select id, username, nickname, email, user_pic from ev_users where id=?';
    // 执行SQL语句。
    db.query(sqlstr,req.auth.id,(err,results) => {
        // SQL语句执行失败。
        if (err) return res.cc(err);
        // SQL语句执行成功，但是没有查询到用户信息。
        if (results.length !== 1) return res.cc('获取用户信息失败！');
        // SQL语句执行成功，并查询到了用户的基本信息，就将用户信息发送给客户端。
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        });
    });
}
// 向外共享更新用户信息时的处理函数。
exports.updateUserInfo = (req,res) => {
    // 定义SQL语句，根据用户的id来查询需要更新用户基本信息的用户，并将其基本信息进行修改。
    const sqlstr = 'update ev_users set ? where id=?';
    // 执行SQL语句。
    db.query(sqlstr,[req.body,req.body.id],(err,results) => {
        // SQL语句执行失败。
        if (err) return res.cc(err);
        // SQL语句执行成功，但是影响行数不等于1。
        if(results.affectedRows !== 1) return res.cc('更新用户的基本信息失败');
        // SQL语句执行成功。
        res.cc('更新用户信息成功！',0);
    });
}
// 向外共享重置用户密码时的处理函数。
exports.updatePassword = (req,res) => {
    // 定义SQL语句，根据用户的id来查询需要重置密码的用户是否存在。
    const sqlStr = 'select * from ev_users where id=?';
    // 执行SQL语句。
    db.query(sqlStr,req.auth.id,(err,results) => {
        // SQL语句执行失败。
        if (err) return res.cc(err);
        // SQL语句执行成功，但是影响行数不等于1。
        if(results.length !== 1) return res.cc('用户不存在');
        // 判断用户发送的旧密码是否和用户的原密码相同。
        const compareResult = bcryptjs.compareSync(req.body.oldPwd, results[0].password);
        if (!compareResult) return res.cc('原密码错误！');
        // 定义SQL语句，根据用户的id来重置用户的密码。
        const sqlStr = 'update ev_users set password=? where id=?';
        // 对用户发送过来的新密码进行加密处理。
        const newPwd = bcryptjs.hashSync(req.body.newPwd, 10);
        // 执行SQL语句。
        db.query(sqlStr,[newPwd,req.auth.id],(err,results) => {
            // SQL语句执行失败。
            if (err) return res.cc(err);
            // SQL语句执行成功，但是影响行数不等于1。
            if (results.affectedRows !== 1) return res.cc('更新密码失败！');
            // 更新密码成功。
            res.cc('更新密码成功！', 0);
        });
    });
}
// 向外共享更新用户头像时的处理函数。
exports.updateAvatar = (req, res) => {
    // 定义SQL语句，根据用户的id来更新用户的头像。
    const sql = 'update ev_users set user_pic=? where id=?';
    // 执行SQL语句。
    db.query(sql, [req.body.avatar, req.auth.id],(err,results) => {
        // SQL语句执行失败。
        if (err) return res.cc(err);
        // SQL语句执行成功，但是影响行数不等于1。
        if (results.affectedRows !== 1) return res.cc('更新头像失败！');
        // 更新头像成功。
        res.cc('更新头像成功！', 0);
    });
}