const express = require("express");

let app = express();

/* 
名词：
    *路由
    请求后面的/index
    注意，这个不是文件夹路径，仅仅是一个地址（服务端不是非要有index）

    *中间件
    在处理路由之前，增加一些东西。在路由之前被处理。
    本质是一个函数。也是用于请求处理的。
    app.use();利用use来做，但use的功能不止于此。
    用use的原因：
    利用use增加一个中间件
    不需要path，默认所有路由都经过中间件
    需要next();表明已执行完

    用处：
    可以对请求进行修改，比如序列化。
*/
let middleware = (req, res, next) => {
    req.useTest = "useTest";
    next();
};

app.use(middleware);

app.use("/use", (req, res) => {
    res.send("这是通过use方法监听的路由。");
});

app.get("/", (req, res) => {
    console.log(req.useTest);
    res.send("你好，express");
});
app.listen(8888);