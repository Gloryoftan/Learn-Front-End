const fs = require("fs");

fs.unlink("./3.txt", error => {
    if (error) throw error;
});