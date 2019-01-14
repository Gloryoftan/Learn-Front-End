let aBtn = document.querySelectorAll("#wrap .nav .btn li");
let oUl = document.getElementById("slide");
let oWrap = document.getElementById("wrap");
let aArrow = document.querySelectorAll("#wrap .shift div");
let aLi = document.querySelectorAll("");

let len = aBtn.length;
let liLen = aLi.length;

let index = 0;

function change(i) {
    aBtn[index].classList.remove("active");

    if (index < 0) {
        index = len - 1;
    } else if (index >= len) {
        index = 0;
    } else {
        index = i;
    }

    oUl.style.left = "-" + index * 100 + "%";
    aBtn[index].classList.add("active");
}

//添加点击事件
[...aBtn].forEach(function (x, i) {
    x.onclick = function () {
        if (index === i) return;
        change(i);
    };
});

//定时器
function fn() {
    change(index);
}
let timer = setInterval(fn, 3000);

//停止/重开定时器
oWrap.onmouseenter = function () {
    clearInterval(timer);
};
oWrap.onmouseleave = function () {
    timer = setInterval(fn, 3000);
};

//左右箭头
aArrow[0].onclick = function () {
    change(index);
};
aArrow[1].onclick = function () {
    change(index);
};