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