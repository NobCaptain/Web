// 导入Express模块。
const express = require('express');
// 导入Cors模块。
const cors = require('cors');
// 实例化Web服务器对象。
const app = express();
// 导入router文件夹中的user.js文件。
const router = require('./router/user.js');
// 导入joi模块。
const joi = require('joi');
// 导入express-jwt模块。
const {expressjwt: expressJWT} = require('express-jwt');
// 导入生成Token字符串所需要的参数配置。
const config = require('./router_Handler/config.js');
// 导入router文件夹中的userinfo.js文件。
const userinfo = require('./router/userinfo.js');
// 将Cors模块注册为全局中间件。
app.use(cors());
// 配置解析表单数据中间件。
app.use(express.urlencoded({extended: false}));
// 优化res.send()函数
app.use((req,res,next) => {
    res.cc = function(err,status = 1) {
        res.send ({
            status: status, // 可以直接简写成status
            message: err instanceof Error ? err.message : err // 判断函数的第一个形参是否为错误对象，如果是就使用该错误对象中的meassage属性中的属性值，如果不是就直接输出第一个形参中的值。
        });
    }
    next();
});
// 将express-jwt模块注册为全局中间件，并使用express-jwt模块来解析客户端传递过来的Token字符串，并设置那些请求路径下无需解析客户端传递过来的Token字符串。
app.use(expressJWT({secret: config.jwtSecretKey,algorithms: ['HS256']}).unless({path: [/^\/api\//]}));
// 使用router文件夹中的user.js文件。
app.use('/api',router);
// 使用router文件夹中的userinfo.js文件。
app.use('/my',userinfo);
// 定义错误级别的全局中间件。
app.use((err,req,res,next) => {
    // 判断是否为表单数据验证失败所导致的错误，如果是就返回表单数据验证失败，如果不是就返回未知错误。
    if (err instanceof joi.ValidationError) return res.cc(err);
    // 判断是否为解析客户端传递过来的Token字符串是错误的，如果是错误的就返回Token字符串验证失败，如果不是就返回未知错误。
    if (err.name === 'UnauthorizedError') return res.cc('Token字符串验证失败');
    res.cc(err);
});
// 启动Web服务器。
app.listen(3006,() => {
    console.log('api_server is run in http://127.0.0.1');
});