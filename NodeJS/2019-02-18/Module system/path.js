const path = require("path");

// console.log(path);

/* 
path模块的功能主要是处理路径的
*/
console.log(__dirname);
console.log(__filename);

let p = path.join("NodeJS","2019-02-18","path.js");
console.log(p);

//join 和 resolve 的区别
let p2 = path.join(__dirname,"node2.js");
console.log(p2);
let p3 = path.resolve("node2.js");
console.log(p3);

//relative 问路，相对路径
let p4 = path.relative("c:/a/b","c:/d/c");
console.log(p4);

let p5 = path.parse("/NodeJS/2019-02-18/Module system/node2.js");
console.log(p5);

