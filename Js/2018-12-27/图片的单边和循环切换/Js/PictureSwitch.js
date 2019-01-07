// 获取元素
let aBtn = document.getElementById("btn").getElementsByTagName("div");
let aImg = document.querySelectorAll("#warp .img .list li");
let aDes = document.querySelectorAll("#warp .img .descrip p");
let aTab = document.querySelectorAll("#warp .tablist .tab");
let oDes1 = aDes[0].getElementsByTagName("span")[0];
let oDes2 = aDes[1].getElementsByTagName("span")[0];

// console.log(oDes2)

let index = 0; //定义变量
let length = aImg.length;

// description2的内容
arrText = [
    "Dark Soul III",
    "深渊监视者",
    "防火女",
    "龙",
    "洛斯里克城",
    "环印城",
    "冷冽谷",
    "环印城骑士",
    "无名",
    "传火"
]
let bool = true; //用一个boolean值来判断tab

// 左btn点击
aBtn[0].onclick = function () {
    aImg[index].className = "";

    index--;

    if (index < 0) {
        index = bool ? 0 : length - 1;
    }

    aImg[index].className = "show";

    //对应的desccription
    oDes1.innerHTML = index + 1;
    oDes2.innerHTML = arrText[index];
};


// 右btn点击

aBtn[1].onclick = function () {
    aImg[index].className = "";

    index++;

    if (index > length - 1) {
        index = bool ? length - 1 : 0;
    }

    aImg[index].className = "show";

    //对应的desccription
    oDes1.innerHTML = index + 1;
    oDes2.innerHTML = arrText[index];
};

//tab的点击
aTab[0].onclick = function () {
    aTab[0].className = "tab tab-1 active";
    aTab[1].className = "tab tab-2";
    //tab
    bool = true;
}

aTab[1].onclick = function () {
    aTab[1].className = "tab tab-2 active";
    aTab[0].className = "tab tab-1";
    //tab
    bool = false;
}