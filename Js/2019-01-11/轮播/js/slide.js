let aBtn = document.querySelectorAll("#wrap .nav .btn li");
let oUl = document.getElementById("slide");
let oWrap = document.getElementById("wrap");

let len = aBtn.length;

let index = 0;


[...aBtn].forEach(function (x, i) {
    x.onclick = function () {
        aBtn[index].classList.remove("active");

        index = i;
        oUl.style.left = "-" + index * 100 + "%";

        aBtn[index].classList.add("active");
    };
});

//定时器
function fn() {
    aBtn[index].classList.remove("active");

    index++;
    index %= len;

    oUl.style.left = "-" + index * 100 + "%";
    aBtn[index].classList.add("active");
}
let timer = setInterval(fn, 3000);

//停止/重开定时器
oWrap.onmouseenter = function () {
    clearInterval(timer);
};
oWrap.onmouseleave = function () {
    timer = setInterval(fn, 3000);
};