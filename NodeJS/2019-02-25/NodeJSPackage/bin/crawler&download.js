const request = require("request");
const fs = require("fs");

let word = "魔术";

let option = {
    url: encodeURI("http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=魔术"),
    method: "GET",
    headers: {
        "User-Agent": "Mozilla / 5.0(Macintosh; Intel Mac OS X 10 _14_3) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 72.0 .3626 .109 Safari / 537.36"
    },
};

new Promise((res) => {
    request(option, (err, response, body) => {
        if (err) throw err;
        // console.log(body);

        let reg = /https?:\/\/.+?\.(jpg|png|webp|jpeg|gif)/ig;
        let urlArr = body.match(reg);
        res(urlArr);
    });

}).then((arr => {
    arr.forEach((value, index) => {
        let ext = value.match(/jpg|png|webp|jpeg|gif/)[0];
        request(value).pipe(fs.createWriteStream("./img/" + index + "." + ext));
    });
}));