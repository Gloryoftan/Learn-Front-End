const fs = require('fs');

fs.open("./fstest2.txt", "r", (error, fd) => {
    if (error) throw error;
    let buf = Buffer.from("something like this");
    fs.read(fd, buf, 0, 2, 0, (error, bytesRead, buffer) => {
        if (error) throw error;
        console.log(bytesRead);
        console.log(buffer.toString());

        fs.close(fd);
    });
});