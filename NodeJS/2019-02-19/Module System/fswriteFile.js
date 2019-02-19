const fs = require("fs");

//w创建
fs.writeFile(
    "./fstest2.txt",
    "Something to test fs.writeFile!", {
        flag: "w",
        encoding: "utf-8"
    },
    (error) => {
        if (error) throw error;
    });
//a添加
fs.writeFile(
    "./fstest2.txt",
    "2nd Something to test fs.writeFile!", {
        flag: "a",
        encoding: "utf-8"
    },
    (error) => {
        if (error) throw error;
    });
//同步API
fs.writeFileSync(
    "./writeFileSync.txt",
    "同步的方式写入文件内容"
);