//封装了删除功能，利用isFile和isDirectory
const PATH = require("path");
const fs = require("fs");

function del(path, callback) {
    (function stat(path) {
        fs.stat(path, (error, stats) => {
            if (error) callback(error);

            if (stats.isFile()) {
                fs.unlinkSync(path);
            } else if (stats.isDirectory()) {
                fs.rmdir(path, error => {
                    if (error) {
                        fs.readdir(path, (errpr, fileArr) => {
                            fileArr.forEach((p) => {
                                console.log(PATH.join(path, p));
                                stat(PATH.join(path, p));
                            });
                            stat(path);
                        });
                    }
                });
            }
        });
    })(path);
}

module.exports.del = del;