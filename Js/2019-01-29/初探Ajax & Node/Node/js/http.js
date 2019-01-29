//通过Node的原声模块 http搭建服务器 提供数据接口
const http = requeire('http');
http.createServer(function (req, res) {
    res.writeHeader(200, {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain;charset=utf8"
    });

    res.end('hello world');
}).listen(6060);