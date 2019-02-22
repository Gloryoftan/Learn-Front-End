const express = require("express");

let app = express();

app.listen(8888);

/* 子路由 */
//router
let router = express.Router();
router.get("/", (req, res) => {
    res.send("路由: /");
});
router.get("/main", (req, res) => {
    res.send("路由: /main");
});

let router2 = express.Router();
router2.get("/", (req, res) => {
    res.send("路由2: /");
});
router2.get("/main2", (req, res) => {
    res.send("路由2: /main2");
});
router2.get("/vice2", (req, res) => {
    res.send("路由2: /vice2");
});

//user router
app.use("/index", router);
app.use("/index2", router2);