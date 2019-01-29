//新一代node技术解决方案 新一代框架

//学习koa2框架 必须要学好 ES6

//学习了es6 才能学习 H5 才能学习前端领域的新框架(核心底层的架构 都是ES6处理的)

const Koa2 = require("koa");
const app = new Koa2();

app.use(ctx => {
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.body = "hello world";
});

app.listen(6062);