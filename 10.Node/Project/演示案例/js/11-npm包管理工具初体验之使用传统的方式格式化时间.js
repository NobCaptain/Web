// 定义格式化时间的方法。
function time(dtStr) {
    const y = bl(dtStr.getFullYear());
    const m = bl(dtStr.getMonth() + 1);
    const d = bl(dtStr.getDate());
    const hh = bl(dtStr.getHours());
    const mm = bl(dtStr.getMinutes());
    const ss = bl(dtStr.getSeconds());
    return `${y}年${m}月${d}日 ${hh}时${mm}分${ss}秒`;
}
// 创建补零函数。
function bl(data) {
    return data > 9 ? data: '0' + data;
}
// 从自定义模块中导出格式化时间的函数。
module.exports = {
    time
}