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