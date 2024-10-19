const path = require('path');
// 导入html-webpack-plugin插件。
const HtmlPlugin = require('html-webpack-plugin');
// 创建html-webpack-plugin插件的实例对象。
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个HTML文件。
    template: './src/index.html',
    // 指定要将复制的文件粘贴在哪里，并指定该文件的文件名。
    filename: './index.html'
});
// 解构赋值clean-webpack-plugin插件。
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 创建clean-webpack-plugin插件的实例对象。
const cleanPlugin = new CleanWebpackPlugin();
module.exports = {
    mode: 'development',
    // 设置Source Map的功能。
    devtool: 'source-map',
    // 指定Webpack打包项目开始时的入口文件。
    entry: path.join(__dirname,'./src/index123.js'),
    // 指定Webpack打包项目结束后的输出文件的存放路径以及输出文件的文件名。
    output: {
        // 指定Webpack打包项目结束后的输出文件的存放路径。
        path: path.join(__dirname,'./out'),
        // 指定Webpack打包项目结束后的输出文件的文件名。
        filename: './js/index321.js'
    },
    devServer: {
        // 修改webpack-dev-server插件的实时打包构建项目的http服务器打开项目的默认路径。
        static: './',// 该属性值是将webpack-dev-server插件的实时打包构建项目的http服务器设置成默认打开项目的根目录。
        // 设置初次使用webpack-dev-server插件进行打包构建项目时，是否自动打开webpack-dev-server插件的实时打包构建项目的http服务器。
        open: true,
        // 修改webpack-dev-server插件的实时打包构建项目的http服务器的主机地址。
        host: '127.0.0.1',
        // 修改webpack-dev-server插件的实时打包构建项目的http服务器的端口。
        port: 8081,
    },
    // 让html-webpack-plugin插件生效，也让clean-webpack-plugin插件生效。
    plugins: [htmlPlugin,cleanPlugin],
    // 指定Webpack在打包构建项目时，遇到后缀不为.js的文件时，就调用相对应的loader。
    module: {
        rules: [
            // 设置Webpack在打包构建项目时，遇到后缀为.css的文件时，就调用style-loader和css-loader。
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            // 设置Webpack在打包构建项目时，遇到后缀为.less的文件时，就调用less-loader。
            {
                test: /\.less/,
                use: ['style-loader','css-loader','less-loader']
            },
            // 设置Webpack在打包构建项目时遇到图片时，就调用url-loader。
            {
                test: /\.jpg|png|gif$/,
                use: 'url-loader?limit=5120&outputPath=imgs'
            },
            // 设置Webpack在打包构建项目时遇到包含了JavaScript高级语法的相关文件时，就调用babel-loader。
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            // 配置Webpack中的@，让@表示src文件夹目录。
            '@': path.join(__dirname,'./src')
        }
    }
}