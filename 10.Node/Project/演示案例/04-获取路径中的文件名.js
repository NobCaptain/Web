const path = require('path');
const str = './a/b/c/index.html';
console.log(path.basename(str));
console.log(path.basename(str,'.html'));