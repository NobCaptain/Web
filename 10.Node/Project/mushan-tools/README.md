## 安装
```
npm i mushan-tools
```
## 导入
```javascript
const tools = require('mushan-tools');
```
## 格式化时间的用法
```javascript
// 调用time方法对时间进行格式化
const dtStr = tools.time(new Date());
// 结果 2022-7-18 18:33:55
console.log(dtStr);
```
## 转义HTML中的特殊字符
```javascript
// 带转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
// 调用htmlEscape方法进行转换
const str = tools.htmlEscape(htmlStr);
// 转换的结果为&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
```
## 还原HTML中的特殊字符
```javascript
// 待还原的HTML字符串
const str2 = tools.htmlUnEscape(str);
// 输出的结果为<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2);
```