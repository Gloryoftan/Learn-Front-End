const fs = require("fs");

fs.stat("./fstest2.txt",(error,stats)=>{
    if(error)throw error;
    console.log(stats);
    console.log(stats.isDirectory);
    console.log(stats.isFile);
});