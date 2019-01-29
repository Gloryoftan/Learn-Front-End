//利用express框架搭建node服务器 提供数据接口

//为了记录node项目所用的依赖 npm init -y

//现在已经过时了

const express = require("express");
const app = express();

const http = require("http").Server(app);

app.get("/", function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.send("hello world");
});

http.listen(6061);