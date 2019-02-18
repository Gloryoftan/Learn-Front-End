/* 
require(路径)
    *想要导入自己的文件的话，路径要加./
    *文件后缀默认.js，可以省略
    *所有引入文件中，普通定义的变量存在一个子作用域里面，除非利用global方法【污染顶层对象】
    *返回的是引入文件里的所有的exports

TERMINAL
$node node1.js 
*/
let b = require('./node2');

console.log(b);

