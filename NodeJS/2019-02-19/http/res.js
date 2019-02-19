let http = require("http");

let resData = {
    name: 'Samari',
    age: 18,
    sex: "男"
};

http.createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify(resData));
    }
}).listen(5555);