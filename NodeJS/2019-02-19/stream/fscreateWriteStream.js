let fs = require("fs");

let ws = fs.createWriteStream("./2.txt");

ws.write("createWriteStream Test");

ws.write("createWriteStream Test2");