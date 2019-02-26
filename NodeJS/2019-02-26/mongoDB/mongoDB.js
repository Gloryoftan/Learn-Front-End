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