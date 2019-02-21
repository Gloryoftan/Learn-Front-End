const express = require("express");
const mware = require("../view/mware");

let app = express();

app.use(mware);

app.get("/", (req, res) => {
    res.send("Hello Express!" + req.mwareTest);
});

app.listen(8888);