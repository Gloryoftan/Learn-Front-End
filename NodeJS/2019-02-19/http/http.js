const http = require("http");

let server = http.createServer();

server.on("request",(req,res)=>{
    res.end("这是我创建的第一个HTTP服务器,Hello NodeJS");
});

server.listen(5555);