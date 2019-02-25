const cheerio = require("cheerio");
const request = require("request");

let word = encodeURI("魔术");

request({
    url: "https://www.baidu.com/s?wd=" + word,
    headers: {
        "User-Agent": "Mozilla / 5.0(Macintosh; Intel Mac OS X 10 _14_3) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 72.0 .3626 .109 Safari / 537.36"
    }
}, (err, response, body) => {
    if (err) throw err;

    if (response.statusCode >= 200 && response.statusCode < 300) {
        //Cherrio处理body
        let $ = cheerio.load(body);
        $("h3.t a").each((index, ele) => {
            console.log($(ele).text() + $(ele).attr("href"));
        });
    }
});