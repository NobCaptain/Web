// 导入fs模块。
const fs = require('fs');
// 导入path模块。
const path = require('path');
// 创建两个正则表达式，分别用来匹配<style>和<script>标签。
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
// 使用fs模块，读取需要被处理的文件。
fs.readFile(path.join(__dirname,'./index.html'),'utf8',(err,dataStr) => {
    if (err) {
        return console.log(`读取文件失败：${err.message}`);
    }
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
});
// 自定义resolveCSS方法，来写入index.css样式文件。
function resolveCSS(data) {
    const arr = regStyle.exec(data);
    const newStr = arr[0].replace('<style>','').replace('</style>','');
    fs.writeFile(path.join(__dirname,'./clock/clock.css'),newStr,err => {
        if (err) {
            return console.log('写入文件失败');
        }
        console.log('写入文件成功');
    });
}
// 自定义resolveJS方法，来写入index.js脚本文件。
function resolveJS(data) {
    const arr = regScript.exec(data);
    const newStr = arr[0].replace('<script>','').replace('</script>','');
    fs.writeFile(path.join(__dirname,'./clock/clock.js'),newStr,err => {
        if (err) {
            return console.log('写入文件失败');
        }
        console.log('写入文件成功');
    });
}
// 自定义resolveHTML方法，来写入index.html文件。
function resolveHTML(data) {
    const newStr = data.replace(regStyle,'<link rel="stylesheet" href="./clock.css">').replace(regScript,'<script src="./clock.js"></script>');
    fs.writeFile(path.join(__dirname,'./clock/clock.html'),newStr,err => {
        if (err) {
            return console.log('写入文件失败');
        }
        console.log('写入文件成功');
    });
}