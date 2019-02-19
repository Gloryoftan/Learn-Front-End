const fs = require("fs");

fs.rename("../Module System/renameTest.txt", "../renameTest/renameTest2.txt", error => {
    if (error) throw error;
});