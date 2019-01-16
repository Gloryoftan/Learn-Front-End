let aBtn = document.querySelectorAll("#wrap .nav .btn li");
let oUl = document.getElementById("slide");
let oWrap = document.getElementById("wrap");
let aArrow = document.querySelectorAll("#wrap .shift div");
let aLi = document.querySelectorAll("#slide li");

let navLen = aBtn.length;
let liLen = aLi.length;

let index = 0;

console.log(navLen);

//变化函数
function change(x) {
    //处理slide-left
    oUl.classList.remove("cons");
    oUl.style.left = "-" + (x + 1) * 100 + "%";

    //处理x
    if (x < 0) {
        x = navLen - 1;
        setTimeout(function () {
            oUl.classList.add("cons");
            oUl.style.left = "-" + (liLen - 2) * 100 + "%";
        }, 1000);
    } else if (x >= navLen) {
        //无缝跳转
        setTimeout(function () {
            oUl.classList.add("cons");
            oUl.style.left = "-" + 1 * 100 + "%";
        }, 1000);
        x = 0;
    }

    //处理tab样式
    aBtn[index].classList.remove("active");
    index = x;
    aBtn[index].classList.add("active");
}

//nav的点击
[...aBtn].forEach((e, i) => {
    e.onclick = function () {
        change(i);
    };
});

//左右箭头的点击
[...aArrow].forEach((e, i) => {
    e.onclick = function () {
        change(i ? index + 1 : index - 1);
    };
});

//自动轮播
function Autoslide() {
    timer = setInterval(() => {
        change(index + 1);
    }, 3000);
}
Autoslide();
oWrap.onmouseenter = function () {
    clearInterval(timer);
};
oWrap.onmouseleave = Autoslide;