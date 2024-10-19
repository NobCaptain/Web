// 定义转义HTML的方法
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g,match => {
        switch(match) {
            case '<':return '&lt;';
            case '>':return '&gt;';
            case '"':return '&quot;';
            case '&':return '&amp;';
        }
    });
}
// 向外共享成员。
module.exports = {
    htmlEscape
}