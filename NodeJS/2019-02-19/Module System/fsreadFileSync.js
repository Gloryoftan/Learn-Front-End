const fs = require("fs");

let data = fs.readFileSync("./fstest.txt","utf-8");

console.log(data);
