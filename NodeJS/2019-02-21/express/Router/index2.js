const express = require("express");

let router = express.Router();
router.get("/", (req, res) => {
    res.send("路由2: /");
});
router.get("/main2", (req, res) => {
    res.send("路由2: /main2");
});
router.get("/vice2", (req, res) => {
    res.send("路由2: /vice2");
});

module.exports = router;