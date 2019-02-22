const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.send("路由: /");
});
router.get("/main", (req, res) => {
    res.send("路由: /main");
});

module.exports = router;