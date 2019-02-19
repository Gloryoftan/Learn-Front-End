const fs = require("fs");

let rs = fs.createReadStream("./1.txt", "utf-8");
let ws = fs.createWriteStream("./3.txt");

rs.pipe(ws);