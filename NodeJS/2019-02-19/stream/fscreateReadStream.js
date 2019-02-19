let fs = require("fs");

let rs = fs.createReadStream("./1.txt");

rs.on("open", () => {
    console.log("open:文件流打开了");
});

rs.on("data", (d) => {
    console.log("data:文件正在被读取");
    console.log(d);
});

rs.on("end", () => {
    console.log("end:文件读取完成！");
});

rs.on("close", () => {
    console.log("close:文件流关闭了");
});
//暂停
rs.pause();
//恢复
rs.resume();