const request = require("request");
const fs = require("fs");

let word = "前端";

new Promise((res, rej) => {
    request({
        method: "GET",
        url: encodeURI("https://search.jd.com/Search?keyword=" + {
            word
        } + "&enc=utf-8"),
        headers: {
            "User-Agent": "Mozilla / 5.0(Macintosh; Intel Mac OS X 10 _14_3) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 72.0 .3626 .109 Safari / 537.36"
        }
    }, (err, response, body) => {
        res(body);
    });
}).then((msg) => {
    console.log(msg);
    let reg = /\/\/.+?\.(jpg|jpeg|png|webp|gif)/gi;
    let srcArr = msg.match(reg);
    console.log(srcArr);

    srcArr.forEach((val) => {

        fs.writeFile("./main/2.txt", val + "\n", {
            flag: "a"
        }, err => {
            if (err) throw err;
        });
    });
});