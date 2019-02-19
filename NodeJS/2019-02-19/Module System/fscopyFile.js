const fs = require("fs");

fs.copyFile("./fstest.txt", "./fstest4.txt", error => {
    if (error) throw error;
})