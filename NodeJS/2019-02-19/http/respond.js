const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    });

    fs.readFile("./fsTest.html", "utf-8", (error, data) => {
        if (error) throw error;
        res.write("Hello\n");
        res.write("NodeJs\n");
        res.write("中文测试");
        res.write(`${data}<br>`);
        res.end("Hello NodeJS");
    });
}).listen(5555);