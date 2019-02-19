const fs = require("fs");
new Promise((resolve, reject) => {
    fs.readFile("1.txt", (error, data1) => {
        if (error) reject(error);
        resolve();
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        fs.readFile("2.txt", (error, data2) => {
            if (error) reject(error);
            resolve();
        });
    });
}).then(() => {
    return new Promise((resolve, reject) => {
        fs.readFile("3.txt", (error, data3) => {
            if (error) reject(error);
            resolve();
        });
    });
}).catch((error) => {
    throw error;
});