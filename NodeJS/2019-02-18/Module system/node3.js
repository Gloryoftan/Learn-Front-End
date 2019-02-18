let a = require('./node2');
console.log(a);

a.c = "Samari";
let d = require('./node2');
console.log(d);
//d 会包含a.c