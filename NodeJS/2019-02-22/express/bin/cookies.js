const express = require("express");
const cookie = require("cookie-parser");

let app = express();
app.listen(8888);

app.use(cookie());
app.get("/index", (req, res) => {
    console.log(req.cookies);
});