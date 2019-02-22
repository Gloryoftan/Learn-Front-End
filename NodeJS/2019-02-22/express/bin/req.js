const express = require("express");

let app = express();
app.listen(8888);

app.get("/", (req, res) => {
    //req里的app是为了在分离出来的路由或中间件里面使用的
    console.log(req.app === app);
    console.log(res.app === app);
});