const fs = require('fs');
fs.readFile('./files/01-读取指定文件中的内容.txt','utf8',(err,dataStr) => {
    console.log(err);
    console.log(dataStr);
});
fs.readFile('./files/02-读取指定文件中的内容.txt','utf8',(err,dataStr) => {
    if (err) {
        console.log(`错误信息：${err.message}`);
    }
    console.log(dataStr);
});