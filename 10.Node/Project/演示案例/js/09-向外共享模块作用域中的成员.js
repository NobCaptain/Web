const num = 10;
module.exports.name = '张三';
module.exports.age = num;
module.exports.sayHi = () => {
    console.log('Hello');
}
module.exports = {
    name: '李四',
    age: num,
    sayHi: () => {
        console.log('你好');
    }
}