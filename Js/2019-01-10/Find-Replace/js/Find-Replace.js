let aInput = document.querySelectorAll("#wrap .top input");
let aBtn = document.querySelectorAll("#wrap .top span");
let oContent = document.querySelector("#wrap .content");
let contHTML = oContent.innerHTML; //初始获取以后，再次点击查找则会使用原始的内容
let contentReset = contHTML;
let oDiv = document.getElementsByClassName("content");

console.log(oDiv);

//搜索点击事件
aBtn[0].onclick = function () {
    //获取第一个input的值
    let val = aInput[0].value;
    //如果没有填写内容直接return
    if (!val) {
        alert("Please input the content!");
        return;
    }
    //以val为界限切割
    let arr = contHTML.split(val);
    let newHTML = arr.join("<b>" + val + "</b>");
    oContent.innerHTML = newHTML;
};

//替换点击事件
aBtn[1].onclick = function () {
    let val1 = aInput[0].value;
    let val2 = aInput[1].value;
    if (!val1 || !val2) {
        alert("Please input the content!");
        return;
    }
    let arr = contHTML.split(val1);
    let newHTML = arr.join("<b>" + val2 + "</b>");
    oContent.innerHTML = newHTML;
    //改变最原始的内容，防止再次查询时使用原来的内容
    contHTML = arr.join(val2);
};

oDiv[0].onclick = function () {
    oContent.innerHTML = contHTML;
}

//Reset点击事件
aBtn[2].onclick = function () {
    aInput[0].value = aInput[1].value = "";
    oContent.innerHTML = contentReset;
    contHTML = contentReset;
};