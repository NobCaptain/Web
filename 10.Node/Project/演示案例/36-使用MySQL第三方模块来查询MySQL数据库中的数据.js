// 导入mysql模块。
const mysql = require('mysql');
// 建立与MySQL数据库的连接关系。
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
});
// 使用数据库对象中的query()方法来向MySQL数据库中执行SELECT语句。
db.query('select * from users',(err,results) => {
    if(err) return console.log(err.message);
    console.log(results);
});