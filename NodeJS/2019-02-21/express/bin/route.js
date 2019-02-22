const express = require("express");

let app = express();
app.listen(8888);

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.route("/index")
    .get((req, res) => {
        res.send("GET请求");
    })
    .post((req, res) => {
        res.send("POST请求");
    });