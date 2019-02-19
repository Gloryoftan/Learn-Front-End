const fs = require("fs");
//只能删除空目录
fs.rmdir("../mkdirTest/recursiveTest/recursive2/recursive3", error => {
    if (error) throw error;
});