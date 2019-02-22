const express = require("express");

let app = express();
app.listen(8888);

app.get("/index", (req, res) => {
    res.redirect("https://www.baidu.com");
});