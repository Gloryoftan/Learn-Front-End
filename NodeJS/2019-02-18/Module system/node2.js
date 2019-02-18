console.log("Hello NodeJS");
let a = "Samari";

// global.a = a; 能行，【但会污染顶层对象】，不能使用

exports.a = a;

module.exports.b=a;
/* 
最终输出的是 module.exports
而exports 和 module.exports 是引用关系
*/