const fs = require("fs");

fs.readdir("./readdirTest", (error, data) => {
    if (error) throw error;
    console.log(data);
});
