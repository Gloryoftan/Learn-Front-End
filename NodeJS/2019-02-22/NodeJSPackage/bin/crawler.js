const request = require("request");
const fs = require("fs");

let word = "frontend";

new Promise((res, rej) => {
    request({
        method: "GET",
        url: encodeURI("https://search.jd.com/Search?keyword=前端&enc=utf-8&suggest=2.his.0.0&wq=&pvid=0355455724244ac9916308e7e19b78a7"),
        headers: {
            "User-Agent": "Mozilla / 5.0(Macintosh; Intel Mac OS X 10 _14_3) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 72.0 .3626 .109 Safari / 537.36"
        }
    }, (err, response, body) => {
        res(body);
    });
}).then((msg) => {

    let reg = /\/\/.+?n7.+?\.(jpg|jpeg|png|webp|gif)/gi;
    let srcArr = msg.match(reg);
    console.log(srcArr);
    

    srcArr.forEach((val, index) => {

        fs.writeFile("./main/2.txt", val+"\n", err => {
            if (err) throw err;

        });
    });

});