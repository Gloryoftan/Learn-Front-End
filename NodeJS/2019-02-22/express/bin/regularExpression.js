const express = require("express");

let app = express();
app.listen(8888);

app.get(/teacher(\d+)/, (req, res) => {
    console.log(req.params[0]);
    res.send(req.url);
});

app.get("/index/:user/:id/:age", (req, res) => {
    console.log(req.params);
    res.send("请求完成！");
});