const express = require("express");

let app = express();
app.listen(8888);

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post("/form", (req, res) => {
    console.log(req.body);
    res.send("接收到了post请求！");
});