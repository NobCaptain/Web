// 导入fs文件系统模块。
const fs = require('fs');
// 使用readFile()方法，读取成绩.txt文件中的考试数据。
fs.readFile('./files/成绩单.txt','utf8',(err,dataStr) => {
    // 判断文件是否读取失败。
    if (err) {
        return console.log(`读取文件失败：${err.message}`);
    }
    // 文件读取成功后，处理成绩数据。
    const oldArr = dataStr.split(' ');
    const newArr = [];
    oldArr.forEach(ele => {
        newArr.push(ele.replace('=','：'));
    });
    const str = newArr.join('\r\n');
    // 将处理完成的成绩数据，调用fs.writeFile()方法，写入到新文件成绩-ok.txt中。
    fs.writeFile('./files/成绩-ok.txt',str,err => {
        if (err) {
            return console.log('写入失败');
        }
        console.log('写入成功');
    });
});