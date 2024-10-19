const fs = require('fs');
fs.writeFile('./files/02-向指定文件中写入内容.txt','abcd',(err) => {
    console.log(err);
});
fs.writeFile('f:\files\02-向指定文件中写入内容.txt','abcd',(err) => {
    if (err) {
        return console.log('写入文件失败');
    }
    console.log('写入文件成功');
});