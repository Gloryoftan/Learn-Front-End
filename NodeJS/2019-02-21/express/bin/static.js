const express = require("express");
const path = require("path");

let app = express();

app.listen(8888);

app.use(express.static("../pub"));

app.get("/", (req, res) => {
    res.send("Static测试页面!");
});

app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.join(__dirname, "../pub/icon.png"));
});