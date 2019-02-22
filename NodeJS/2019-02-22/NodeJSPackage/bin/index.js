const request = require("request");

request({
    method: "GET",
    url: "https://www.baidu.com",
}, (err, res, body) => {
    console.log(err);
    console.log(res.statusCode);
    console.log(body);
});