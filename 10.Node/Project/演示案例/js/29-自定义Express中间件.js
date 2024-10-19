const querystring = require('querystring');
const qs = (req,res,next) => {
    let str = '';
    req.on('data',(chunk) => {
        str += chunk;
    });
    req.on('end',() => {
        const body = querystring.parse(str);
        console.log(body);
        // 通过使用querystring模块中的parse()方法，将客户端向Web服务器发送的URL-encoded格式的请求体数据，解析成对象的格式，将其对象挂载到请求对象中的自定义的body属性中。
        req.body = body;
        next();
    });
}
module.exports = qs;