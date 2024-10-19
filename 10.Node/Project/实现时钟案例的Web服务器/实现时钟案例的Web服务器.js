// 导入所需模块。
const fs = require('fs');
const path = require('path');
const http = require('http');
// 创建基本的Web服务器。
const server = http.createServer();
server.on('request',(req,res) => {
    // 将资源的请求URL地址映射为文件的存放路径。
    let fpath = '';
    if (req.url === '/') {
        fpath = path.join(__dirname,'./clock/clock.html');
    } else {
        fpath = path.join(__dirname,'./clock',req.url);
    }
    // 读取文件的内容并响应给客户端。
    fs.readFile(fpath,'utf8',(err,dataStr) => {
        if (err) {
            return res.end('读取文件失败：' + err.message);
        }
        res.end(dataStr);
    });
});
server.listen(80,() => {
    console.log('server is runing at http://127.0.0.1');
});