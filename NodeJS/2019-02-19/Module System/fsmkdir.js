const fs = require("fs");

fs.mkdir("../mkdirTest", error => {
    if (error) throw error;
})
//recursive:true 可以创建多层路径
fs.mkdir("../mkdirTest/recursiveTest/recursive2/recursive3", {
    recursive: true
}, error => {
    if (error) throw error;
});