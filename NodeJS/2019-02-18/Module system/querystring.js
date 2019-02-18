const querystring = require("querystring");

let qs = querystring.parse("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=samaritan&oq=samaritan&rsv_pq=c3fad95f000e9dfa&rsv_t=af92%2F1dNe91ar4NGmlhvD8S%2FOVtHavvCf%2FE6n9mkswvrhWU9sFdA%2B0sAk4E&rqlang=cn&rsv_enter=1&inputT=742177&rsv_sug3=85&rsv_sug1=62&rsv_sug7=100&rsv_sug2=0&rsv_sug4=743079");

console.log(qs);
console.log(qs.f);