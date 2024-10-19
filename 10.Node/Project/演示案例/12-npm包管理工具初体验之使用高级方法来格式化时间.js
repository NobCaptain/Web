// 使用require()方法导入格式化时间的包。
const date = require('dayjs');
// 参考dayjs的官方的API文档来对时间进行格式化。
console.log(date().format('YYYY-MM-DD HH:mm:ss'));