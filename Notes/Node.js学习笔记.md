[toc]
# Node.js学习笔记
## 2019-02-18 认识Node.js
### 学习工具
[Node.js教程|菜鸟学院](http://www.runoob.com/nodejs/nodejs-tutorial.html)

[Node API文档](http://nodejs.cn/api/)
### Node.js简介
Node.js 是一个给予Chrome V8引擎的JavaScript 运行环境

Node.js使用了一个事件驱动、非阻塞式I/O的模型，使其轻量又高效。

优点：处理高并发

#### Node.js与传统后台语言的区别
I/O密集型：Node.js

CPU密集性：传统后台,如PHP

#### Node.js与JavaScript的区别
原生Js => DOM操作

Node.js 没有DOM相关的内容，顶层对象是global

## 2019-02-18 模块系统
### require & exports
Js文件1:

```js
/* 
require(路径)
    *想要导入自己的文件的话，路径要加./
    *文件后缀默认.js，可以省略
    *所有引入文件中，普通定义的变量存在一个子作用域里面，除非利用global方法【污染顶层对象】
    *返回的是引入文件里的所有的exports

TERMINAL
$node node1.js 
*/
let b = require('./node2');

console.log(b);
```
Js文件2:

```js
console.log("Hello NodeJS");
let a = "Samari";

// global.a = a; 能行，【但会污染顶层对象】，不能使用

exports.a = a;

module.exports.b=a;
/* 
最终输出的是 module.exports
而exports 和 module.exports 是引用关系
*/
```

### 模块缓存
Js文件3:
```js
let a = require('./node2');
console.log(a);

a.c = "Samari";
let d = require('./node2');
console.log(d);
//d 会包含a.c
```

### path
path.js
```js
const path = require("path");

// console.log(path);

/* 
path模块的功能主要是处理路径的
*/
console.log(__dirname);
console.log(__filename);

let p = path.join("NodeJS","2019-02-18","path.js");
console.log(p);

//join 和 resolve 的区别
let p2 = path.join(__dirname,"node2.js");
console.log(p2);
let p3 = path.resolve("node2.js");
console.log(p3);

//relative 问路，相对路径
let p4 = path.relative("c:/a/b","c:/d/c");
console.log(p4);

let p5 = path.parse("/NodeJS/2019-02-18/Module system/node2.js");
console.log(p5);
```
### URL

```js
const url = require("url");

const URL = url.URL;

let u = new URL("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=samaritan&oq=%25E8%25BF%2599%25E9%25A6%2596%25E6%25AD%258C%25E4%25B8%25AD%25E9%2597%25B4%25E8%25AE%25A4%25E8%25AF%2586%25E5%2588%25B0%252C%25E5%258A%25A0%25E5%25BF%25AB%25E8%258A%2582%25E5%25A5%258F&rsv_pq=ecebb1ed000e5982&rsv_t=c102CoCiB95P83cJtVpTn7EMteNSIGFUaSXUqJiaz3ZMPfalHS%2FZw6eZAHY&rqlang=cn&rsv_enter=1&inputT=12313&rsv_sug3=82&rsv_sug1=59&rsv_sug7=100&bs=节奏");

console.log(u);
console.log(u.searchParams.get("ie"));
```
### quertstring
```js
const querystring = require("querystring");

let qs = querystring.parse("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=samaritan&oq=samaritan&rsv_pq=c3fad95f000e9dfa&rsv_t=af92%2F1dNe91ar4NGmlhvD8S%2FOVtHavvCf%2FE6n9mkswvrhWU9sFdA%2B0sAk4E&rqlang=cn&rsv_enter=1&inputT=742177&rsv_sug3=85&rsv_sug1=62&rsv_sug7=100&rsv_sug2=0&rsv_sug4=743079");

console.log(qs);
console.log(qs.f);
```
### 观察者模式
```js
//订阅-发布模式
class Emitter {
    constructor() {
        this.arr = {};
    }
    //订阅
    on(name, callback) {
        if (this.arr[name]) {
            this.arr[name].push(callback);
        } else {
            this.arr[name] = [callback];
        }
    }
    //发布
    emit(name) {
        if (this.arr[name]) {
            this.arr[name].array.forEach((fn) => {
                fn.call(this);
            });
        }
    }
}

//实例1
let emit1 = new Emitter();

//订阅
emit1.on("eve", function () {
    console.log("回调函数1");
});
emit1.on("eve", function () {
    console.log("回调函数2");
});

emit1.on("eve2", function () {
    console.log("回调函数");
});

//eve直播了
setTimeout(() => {
    emit1.emit("eve");
}, 5000);
```
### events
```js
// const events = require("events");
// console.log(events);
const EventEmitter = require("events").EventEmitter;

let a = new EventEmitter();

let fn1 = function (a, b, c) {
    console.log("第一个eve事件触发了！");
    console.log(a, b, c);
};

let fn2 = function () {
    console.log("第二个eve事件触发了！");
};

//绑定事件（addEventListener）
a.on("eve", fn1);

a.on("eve", fn2);

//解绑事件
a.off("eve", fn2);

//触发事件
a.emit("eve", 3, 6, 9);

//newListener
a.on("newListener", () => {
    console.log("监听到了事件的订阅");
});

a.on("eve", () => {
    console.log("订阅新事件");
});

//removeListener
a.on("removeListener", () => {
    console.log("监听到了事件的移除");
});
```
### try catch
js里面防止代码可能会报错，利用try catch。
但是NodeJs里是异步，所以无法用try catch，便约定俗成，第一个callback用于处理报错。
```js
console.log(1);

try {
    console.log(a);
} catch (error) {
    console.log("try里的代码报错");

}

console.log(2);
```
### fs readFile
异步I/O非阻塞
```js
const fs = require("fs");
const path = require("path");


(function () {
    let p = path.join(__dirname, "fstest.txt");

    fs.readFile(p, "utf-8", (error, data) => {
        //没有出错，error为null。出错了，error为对象  
        //出错，抛出错误、停止运行
        if (error) throw error;
        //没错，运行下列代码
        console.log(data);
    });

})();
```
同步阻塞
```js
const fs = require("fs");

let data = fs.readFileSync("./fstest.txt","utf-8");

console.log(data);
```

## 2019-02-19 模块系统
### fs writeFile
```js
const fs = require("fs");

//w创建
fs.writeFile(
    "./fstest2.txt",
    "Something to test fs.writeFile!", {
        flag: "w",
        encoding: "utf-8"
    },
    (error) => {
        if (error) throw error;
    });
//a添加
fs.writeFile(
    "./fstest2.txt",
    "2nd Something to test fs.writeFile!", {
        flag: "a",
        encoding: "utf-8"
    },
    (error) => {
        if (error) throw error;
    });
//同步API
fs.writeFileSync(
    "./writeFileSync.txt",
    "同步的方式写入文件内容"
);
```
### fs copyFile
复制文件
```js
const fs = require("fs");

fs.copyFile("./fstest.txt", "./fstest4.txt", error => {
    if (error) throw error;
})
```
### fs unlink
删除文件
```js
const fs = require("fs");

fs.unlink("./3.txt", error => {
    if (error) throw error;
});
```
### fs readdir
读取文件目录
```js
const fs = require("fs");

fs.readdir("./readdirTest", (error, data) => {
    if (error) throw error;
    console.log(data);
});
```
### fs mkdir
创建文件夹
```js
const fs = require("fs");

fs.mkdir("../mkdirTest", error => {
    if (error) throw error;
})
//recursive:true 可以创建多层路径
fs.mkdir("../mkdirTest/recursiveTest/recursive2/recursive3", {
    recursive: true
}, error => {
    if (error) throw error;
});
```
### fs rmdir
```js
const fs = require("fs");
//只能删除空目录
fs.rmdir("../mkdirTest/recursiveTest/recursive2/recursive3", error => {
    if (error) throw error;
});
```
### fs rename
1. 重命名（文件和文件夹）
2. 移动（文件和文件夹）

```js
const fs = require("fs");

fs.rename("../Module System/renameTest.txt", "../renameTest/renameTest2.txt", error => {
    if (error) throw error;
});
```
### fs link
创建硬链接
```js
const fs = require("fs");

fs.link("./fstest2.txt", "./fstest3.txt", error => {
    if (error) throw errow;
});
```
==以上为fs里重要API==
### fs close open
```js
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
```
### fs stat
```js
const fs = require("fs");

fs.stat("./fstest2.txt",(error,stats)=>{
    if(error)throw error;
    console.log(stats);
    console.log(stats.isDirectory);
    console.log(stats.isFile);
});
```
## 2019-02-19 封装删除文件和文件夹功能
```js
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
```
## 2019-02-19 ES6 里的promise
```js
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
```
## 2019-02-19 流
### fs createReadStream
```js
let fs = require("fs");

let rs = fs.createReadStream("./1.txt");

rs.on("open", () => {
    console.log("open:文件流打开了");
});

rs.on("data", (d) => {
    console.log("data:文件正在被读取");
    console.log(d);
});

rs.on("end", () => {
    console.log("end:文件读取完成！");
});

rs.on("close", () => {
    console.log("close:文件流关闭了");
});
```
```js
//暂停
rs.pause();
//恢复
rs.resume();
```
### fs createWriteStream
```js
let fs = require("fs");

let ws = fs.createWriteStream("./2.txt");

ws.write("createWriteStream Test");

ws.write("createWriteStream Test2");
```
### fs pipe
```js
const fs = require("fs");

let rs = fs.createReadStream("./1.txt", "utf-8");
let ws = fs.createWriteStream("./3.txt");

rs.pipe(ws);
```
## 2019-02-19 http
### http
```js
const http = require("http");

let server = http.createServer();

server.on("request", (req, res) => {
    res.end("这是我创建的第一个HTTP服务器,Hello NodeJS");
});

server.listen(5555);
```
### http respond
```js
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
    });

    fs.readFile("./fsTest.html", "utf-8", (error, data) => {
        if (error) throw error;
        res.write("Hello\n");
        res.write("NodeJs\n");
        res.write("中文测试");
        res.write(`${data}<br>`);
        res.end("Hello NodeJS");
    });
}).listen(5555);
```
## 2019-02-20 npm
```js
/* 
npm 
Node Package Manager

初始化
npm init
npm init -y 无需改变配置

npm install express
下载了node_modules，是express的依赖
npm i express -save(之前的版本里，不会自动添加dependencies)

重要的tips
利用 npm install
可以直接安装配置文件里dependencies所有的内容

npm i express -s -D (-D 开发依赖devDependencies，如webpack)

删除
npm uninstall express

指定版本
npm i express@3.0.0

更新版本
npm undate express

全局安装
npm i webpack -g
生产环境的包不建议全局，可能会出现版本冲突

npm login

npm publish

淘宝镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

*/

const express = require("express");
```

## 2019-02-21 express
### express 基础
```js
const express = require("express");

let app = express();

let obj = {
    name: "Samari",
    age: 18,
    sex: "男"
};

app.get("/", (req, res) => {
    res.status(201);
    res.send("你好，Express!"); //send之后不能再send
});

app.get("/index.html", (req, res) => {
    res.send(obj); //send 里数字会被默认为status
});

//监听端口
app.listen(8888);
```
### 中间件
```js
const express = require("express");

let app = express();

/* 
名词：
    *路由
    请求后面的/index
    注意，这个不是文件夹路径，仅仅是一个地址（服务端不是非要有index）

    *中间件
    在处理路由之前，增加一些东西。在路由之前被处理。
    本质是一个函数。也是用于请求处理的。
    app.use();利用use来做，但use的功能不止于此。
    用use的原因：
    利用use增加一个中间件
    不需要path，默认所有路由都经过中间件
    需要next();表明已执行完

    用处：
    可以对请求进行修改，比如序列化。
*/
let middleware = (req, res, next) => {
    req.useTest = "useTest";
    next();
};

app.use(middleware);

app.use("/use", (req, res) => {
    res.send("这是通过use方法监听的路由。");
});

app.get("/", (req, res) => {
    console.log(req.useTest);
    res.send("你好，express");
});
app.listen(8888);
```
### 默认中间件 
#### 引入
中间件可以通过外置中间件js模块。
```js
module.exports = (req,res,next)=>{
    req.mwareTest = "这是我创建的一个中间件js模块";
    next();
};
```

```js
const express = require("express");
const mware = require("../view/mware");

let app = express();

app.use(mware);

app.get("/", (req, res) => {
    res.send("Hello Express!" + req.mwareTest);
});

app.listen(8888);
```
#### json & urlencoded
```js
const express = require("express");

let app = express();
app.listen(8888);

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post("/form", (req, res) => {
    console.log(req.body);
    res.send("接收到了post请求！");
});
```
#### static
```js
const express = require("express");
const path = require("path");

let app = express();

app.listen(8888);

app.use(express.static("../pub"));

app.get("/", (req, res) => {
    res.send("Static测试页面!");
});

app.get("/favicon.ico", (req, res) => {
    res.sendFile(path.join(__dirname, "../pub/icon.png"));
});
```
#### Router
```js
const express = require("express");

let app = express();

app.listen(8888);

/* 子路由 */
//router
let router = express.Router();
router.get("/", (req, res) => {
    res.send("路由: /");
});
router.get("/main", (req, res) => {
    res.send("路由: /main");
});

let router2 = express.Router();
router2.get("/", (req, res) => {
    res.send("路由2: /");
});
router2.get("/main2", (req, res) => {
    res.send("路由2: /main2");
});
router2.get("/vice2", (req, res) => {
    res.send("路由2: /vice2");
});

//user router
app.use("/index", router);
app.use("/index2", router2);
```
以上可以利用ES6的模块化，转为三个文件：

index.js
```js
const express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
    res.send("路由: /");
});
router.get("/main", (req, res) => {
    res.send("路由: /main");
});

module.exports = router;
```
index2.js
```js
const express = require("express");

let router = express.Router();
router.get("/", (req, res) => {
    res.send("路由2: /");
});
router.get("/main2", (req, res) => {
    res.send("路由2: /main2");
});
router.get("/vice2", (req, res) => {
    res.send("路由2: /vice2");
});

module.exports = router;
```
router.js
```js
const express = require("express");

let app = express();

app.listen(8888);

app.use("/index", require("../Router/index"));
app.use("/index2", require("../Router/index2"));
```
## 2019-02-22 Express
### app
#### app.route
```js
const express = require("express");

let app = express();
app.listen(8888);

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.route("/index")
    .get((req, res) => {
        res.send("GET请求");
    })
    .post((req, res) => {
        res.send("POST请求");
    });
```

#### req.app & res.app
```js
const express = require("express");

let app = express();
app.listen(8888);

app.get("/", (req, res) => {
    //req里的app是为了在分离出来的路由或中间件里面使用的
    console.log(req.app === app);
    console.log(res.app === app);
});
```
#### Regular Expression & Req.params 
1. 利用params可以取得正则的子项
2. 利用params可以取得req里的数据

```js
const express = require("express");

let app = express();
app.listen(8888);

app.get(/teacher(\d+)/, (req, res) => {
    console.log(req.params[0]);
    res.send(req.url);
});

app.get("/index/:user/:id/:age", (req, res) => {
    console.log(req.params);
    res.send("请求完成！");
});
```
#### redirect
在某页面访问不到，或者页面功能一样。
```js
const express = require("express");

let app = express();
app.listen(8888);

app.get("/index", (req, res) => {
    res.redirect("https://www.baidu.com");
});
```
## 2019-02-22 Express要点
```
/*
*******重点理解***********
    *基础写法  
    *get post
    *路由
    *路由和静态资源的区别
    *中间件 子路由 use Router next()
    *urlencoded() static
    *路径的正则写法 req.params[0]
    *重定向
*/
```
## 2019-02-25 爬虫
```js
const request = require("request");
const fs = require("fs");

let word = "前端";

new Promise((res, rej) => {
    request({
        method: "GET",
        url: encodeURI("https://search.jd.com/Search?keyword=" + 
            word
         + "&enc=utf-8"),
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
```
```js
const request = require("request");
const fs = require("fs");

let word = encodeURI("魔术");

let option = {
    url: "http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=" + word,
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
```
## 2019-02-25 jsdom & cheerio
- jsdom

```js
const {
    JSDOM
} = require("jsdom");
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
        //JSDOM处理body
        let window = new JSDOM(body).window;

        let aDOMA = window.document.querySelectorAll("h3.t a");
        [...aDOMA].forEach((ele, index) => {
            console.log(ele.text, ele.href);
        });
    }
});
```
- cheerio

```js
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
```
## 2019-02-25 EJS
- index.js

```js
const express = require("express");

let app = express();
app.listen(8888);

//公开资源，用于读取css、js，存入静态资源库
app.use(express.static("./public"));

//设置当前服务运用的模版引擎
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("你好！");
});

app.use("/info", require("./routers/info"));
```
- info.js

```js
/* info 路由 */
const express = require("express");

let info = express.Router();

/* express 中使用 EJS 模版 
    1.app的模板set的设置
    2.res的render
*/

//模拟数据
let pData = {
    title: "人员信息",
    items: [{
            character: "“盗梦者”道姆·柯布",
            actor: "莱昂纳多·迪卡普里奥"
        },
        {
            character: "“盗梦者”道姆·柯布",
            actor: "莱昂纳多·迪卡普里奥"
        },
        {
            character: "“盗梦者”道姆·柯布",
            actor: "莱昂纳多·迪卡普里奥"
        },
        {
            character: "“盗梦者”道姆·柯布",
            actor: "莱昂纳多·迪卡普里奥"
        },
        {
            character: "“盗梦者”道姆·柯布",
            actor: "莱昂纳多·迪卡普里奥"
        },
        {
            character: "“盗梦者”道姆·柯布",
            actor: "莱昂纳多·迪卡普里奥"
        },
    ]
};

info.get("/", (req, res) => {
    // 利用 render api 来返回给客户端数据
    res.render("../views/info.ejs", pData);
});

module.exports = info;
```
- info.ejs

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TestEJS</title>
    <style>
        /* table,
        table tr th,
        table tr td {
            border: 1px solid #0094ff;
        } */

        table {
            width: 400px;
            min-height: 25px;
            line-height: 25px;
            text-align: center;
            border-collapse: collapse;
        }
    </style>
</head>

<body>
    <table border="1">
        <tbody>
            <tr>
                <th colspan="2">
                    <%= title %>
                </th>
            </tr>
            <tr>
                <th>姓名</th>
                <th>演员</th>
            </tr>
            <% items.forEach((ele,index)=>{     %>
            <tr>
                <td>
                    <%= ele.character %>
                </td>
                <td>
                    <%= ele.actor %>
                </td>
            </tr>
            <% }) %>

            <!-- <tr>
                <td>“盗梦者”道姆·柯布</td>
                <td>莱昂纳多·迪卡普里奥</td>
            </tr>
            <tr>
                <td>“前哨者”亚瑟</td>
                <td>约瑟夫·高登·莱维特</td>
            </tr>
            <tr>
                <td>“筑梦师”阿德里安</td>
                <td>艾伦·佩姬</td>
            </tr>
            <tr>
                <td>“伪装者”伊姆斯</td>
                <td>汤姆·哈迪</td>
            </tr>
            <tr>
                <td>“魅影”梅尔</td>
                <td>玛丽昂·歌迪亚</td>
            </tr>
            <tr>
                <td>“目标”费舍</td>
                <td>希里安·墨菲</td>
            </tr> -->
        </tbody>
        <tfoot></tfoot>
    </table>
</body>

</html>
```

## 2019-02-26 服务器搭建node环境
```js
/* 
    *重置实例密码
    *xshell 连接实例
    
    *安装npm
        #yum install npm
    *检测npm是否安装成功
        #npm -v
    *使用npm安装nodejs的版本控制器 n
        #npm i n -g
    *检测n是否安装成功
        #n -V
    *使用n安装node
        #n stable
        #n latest
        #n 10.1.0
    *n 回车切换版本
    *使用n命令删除某个版本的node
        #n rm10.1.0
    *检测node是否安装成功
        #node -v

    *安装pm2进程守护
        #npm i pm2 -g
    *通过pm2来启动和关闭多个服务
        #pm2 start xxx.js [name]
        #pm2 delete [id]
*/
```
## 2019-02-26 MongoDB
[mac 安装和使用MongoDB](https://www.jianshu.com/p/7241f7c83f4a)

```js
/* 
1. 安装mongoDB
2. 查看有没有安装好

*如何用node使用mongoDB数据库
    #npm i mongoose -s
*/

const mongoose = require("mongoose");

//链接mongoDB数据
mongoose.connect("mongoDB://localhost:27017/user");

mongoose.connection.once("open", function () {
    console.log("连接成功");
});

mongoose.connection.once("error", function () {
    console.log("连接失败");
});

//设计数据库
//required 必填
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: "username"
    },
    password: {
        type: String,
        required: true
    },
    userinfo: {
        personalized: {
            type: String
        },
        time: {
            type: Date
        }
    },
});

const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        ref: "user",
        type: mongoose.Schema.Types.ObjectId
    },
});
//发布文章 肯定是已经注册了的用户（数据库里用户信息是已经存在了的）利用ref 关联

//建表
const user = mongoose.model("user", userSchema);
const article = mongoose.model("article", articleSchema);

//保存数据
// user.create({
//     username: "Samari",
//     password: "123",
// }); 

//查询数据
// user.find().then((doc) => {
//     console.log(doc);
// });

// 查询数据回调写法
user.find(function (err, data) {
    console.log(data);
    article.create({
        title: "S1",
        author: data[1]._id
    });
});

article.find().then(() => {
    console.log(doc);
});

article.find().populate("author").exec(function (err, data) {
    console.log(data);
});
```

## 2019-02-27 MongoDB命令行操作
```js
/* MongoDB数据库操作指北

*启动服务，并且设定MongoDB的存储位置 
    *monogod --dbpath 路径

*启动mongo客户端，允许在控制台输入mongo命令
    *mongo

*显示当前存储位置所有的数据库
    *show dbs

* 切换/创建 数据库
    *use 数据库名

*打印当前所处的数据库
    *use

*为数据库创建集合
    *db.createCollection("集合名")

*查看当前数据库里的集合
    *show collections

*在集合里面插入数据,如果集合不存在，会隐式的添加集合
    *db.集合名.insert(bson)

*查找集合中的数据
    *db.集合名.find(【条件】)

*删除数据
    *db.集合名.deleteOne(【条件】)
    *db.集合名.deleteMany(【条件】)

*删除集合
    *db.集合名.drop()

*删除数据库
    *db.dropDatabase()
*/ 
```
## 2019-02-27 mongoose操作MongoDB

```js
/* 
1. 安装mongoDB
2. 查看有没有安装好

*如何用node使用mongoDB数据库
    #npm i mongoose -s
*/

const mongoose = require("mongoose");

//链接mongoDB数据库,27017后面是选择使用的数据库
mongoose.connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true
});

mongoose.connection.once("open", function () {
    console.log("连接成功");
});

mongoose.connection.once("error", function () {
    console.log("连接失败");
});

//设计数据库
//required 必填
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: "username"
    },
    password: {
        type: String,
        required: true
    },
    userinfo: {
        personalized: {
            type: String
        },
        time: {
            type: Date
        }
    },
    arrayT: [{
        ex: {
            type: Number
        }
    }]
});

const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        ref: "user",
        type: mongoose.Schema.Types.ObjectId
    },
});
//发布文章 肯定是已经注册了的用户（数据库里用户信息是已经存在了的）利用ref 关联

//建表
const user = mongoose.model("user", userSchema);
const article = mongoose.model("article", articleSchema);

//增
// user.create({
//     username: "Samari3",
//     password: "123456",
// }); 

//查询数据
// user.find().then((doc) => {
//     console.log(doc);
// });

// 查询数据回调写法
// user.find(function (err, data) {
//     console.log(data);
//     article.create({
//         title: "S1",
//         author: data[1]._id
//     });
// });

//如何显示表和表之间的关联
// article.find().populate("author").exec(function (err, data) {
//     console.log(data);
// });

//删
// user.deleteOne({
//     username: "Samari3"
// }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// user.deleteMany({
//     username: "Samari2"
// }, (err, data) => {
//     if (err) throw err
// });

//改
// user.updateOne({
//     username: "Samari2"
// }, {
//     $set: {
//         password: "333",
//         userinfo:{
//             personalized:"Samari2signature"
//         }
//     }
// }, (err, data) => {
//     if (err) throw err;
// });

//改数组
// user.updateOne({
//     username: "Samari3"
// }, {
//     $push: {
//         arrayT: {
//             ex: 333
//         }
//     }
// }, (err, data) => {
//     if (err) throw err;
// });

//删数组里符合条件的数据
// user.updateOne({
//     username: "Samari3"
// }, {
//     $pull: {
//         arrayT: {
//             ex: 333
//         }
//     }
// }, (err, data) => {
//     if (err) throw err;
// });

//更新数组数据【把数组arrayT中下标为0的数据的ex属性改为333】
// user.updateOne({
//     username: "Samari3"
// }, {
//     $set: {
//         "arrayT.0.ex": 333
//     }
// }, (err, data) => {
//     if (err) throw err;
// });

// //查找
// user.findOne();
// //查找所有
// user.find((err, data) => {
//     console.log(data);
// });

//统计总数
//分页1，总数   2，每页多少条）
user.estimatedDocumentCount((err, data) => {
    if (err) throw err;
    console.log(data);
});

//可以进行条件判断的统计总数
user.countDocuments({
    username: "Samari4"
}, (err, data) => {
    if (err) throw errr;
    console.log(data);
});

//skip&limit连起来使用,从第几个开始查找，查找多少个（分页）。
user.find().skip(2).limit(2).exec((err, data) => {
    if (err) throw err;
    console.log(data);
});

//排序
user.find().sort({
    _id: -1
}).exec((err, data) => {
    if (err) throw err;
    console.log(data);
});

//populate自动去关联的表里查找对应的数据
article.find().populate("author").exec((err, data) => {
    if (err) throw err;
    console.log(data);
});
```

































































































































































