// 导入格式化时间的自定义模块。
const zdy = require('./js/11-npm包管理工具初体验之使用传统的方式格式化时间');
// 调用格式化时间的函数。
const date = new Date();
console.log(zdy.time(date));