const express = require("express");

let app = express();

let obj = {
    name: "Samari",
    age: 18,
    sex: "男"
};

app.get("/", (req, res) => {
    res.status(201);
    res.send("你好，Express!"); //send之后不能再send
});

app.get("/index.html", (req, res) => {
    res.send(obj); //send 里数字会被默认为status
});

//监听端口
app.listen(8888);