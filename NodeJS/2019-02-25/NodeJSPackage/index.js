const express = require("express");

let app = express();
app.listen(8888);

//设置当前服务运用的模版引擎
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("你好！");
});

app.use("/info", require("./routers/info"));