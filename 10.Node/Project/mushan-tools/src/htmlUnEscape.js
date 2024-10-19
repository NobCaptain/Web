// 定义还原HTML的方法
function htmlUnEscape(str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g,match => {
        switch(match) {
            case '&lt;':return '<';
            case '&gt;':return '>';
            case '&quot;':return '"';
            case '&amp;':return '&';
        }
    });
}
// 向外共享成员。
module.exports = {
    htmlUnEscape
}