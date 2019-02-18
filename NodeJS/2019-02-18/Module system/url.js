const url = require("url");

const URL = url.URL;

let u = new URL("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=samaritan&oq=%25E8%25BF%2599%25E9%25A6%2596%25E6%25AD%258C%25E4%25B8%25AD%25E9%2597%25B4%25E8%25AE%25A4%25E8%25AF%2586%25E5%2588%25B0%252C%25E5%258A%25A0%25E5%25BF%25AB%25E8%258A%2582%25E5%25A5%258F&rsv_pq=ecebb1ed000e5982&rsv_t=c102CoCiB95P83cJtVpTn7EMteNSIGFUaSXUqJiaz3ZMPfalHS%2FZw6eZAHY&rqlang=cn&rsv_enter=1&inputT=12313&rsv_sug3=82&rsv_sug1=59&rsv_sug7=100&bs=这首歌中间认识到%2C加快节奏");

console.log(u);
console.log(u.searchParams.get("ie"));