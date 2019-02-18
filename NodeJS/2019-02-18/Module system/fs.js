const fs = require("fs");
const path = require("path");


(function () {
    let p = path.join(__dirname, "fstest.txt");

    fs.readFile(p, "utf-8", (error, data) => {
        //没有出错，error为null。出错了，error为对象  
        //出错，抛出错误、停止运行
        if (error) throw error;
        //没错，运行下列代码
        console.log(data);
    });

})();