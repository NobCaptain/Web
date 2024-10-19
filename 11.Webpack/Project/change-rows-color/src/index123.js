// 使用ES6语法导入所需要的模块。
import $ from "jquery";
import "../css/index.css";
import "../less/index.less";
import logo from "../imgs/图片.png";
import touxiang from "../imgs/头像.jpg";
import '@/js/test/test.js';
// 定义入口函数。
$(function() {
    $('li:odd').css('background-color','yellow');
    $('li:even').css('background-color','pink');
    $('.box').attr('src',logo);
    $('div').text(logo);
    $('.box1').attr('src',touxiang);
});
function info(target) {
    target.info = 'Parson info';
}
@info
class Parson {}
console.log(Parson.info);