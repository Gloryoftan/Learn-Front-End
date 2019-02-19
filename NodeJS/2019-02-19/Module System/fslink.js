const fs = require("fs");

fs.link("./fstest2.txt", "./fstest3.txt", error => {
    if (error) throw errow;
});