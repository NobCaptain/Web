const time = require('./src/time');
const htmlEscape = require('./src/htmlEscape');
const htmlUnEscape = require('./src/htmlUnEscape');
// 向外共享所有的成员。
module.exports = {
    ...time,
    ...htmlEscape,
    ...htmlUnEscape
}