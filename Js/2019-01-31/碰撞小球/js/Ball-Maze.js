let oWrap = document.getElementById("wrap");
let oShadow = document.getElementById("shadow");
let pLeft = oWrap.offsetLeft;
let pTop = oWrap.offsetTop;

//获取浏览器可视区的宽高
let MaxLeft = window.innerWidth - oWrap.offsetWidth;
let MaxTop = window.innerHeight - oWrap.offsetHeight;
window.onresize = function () {
    MaxLeft = window.innerWidth - oWrap.offsetWidth;
    MaxTop = window.innerHeight - oWrap.offsetHeight;
};

//运动step
let stepX = 3;
let stepY = 3;

function move() {
    pLeft += stepX;
    pTop += stepY;

    if (pLeft >= MaxLeft) {
        pLeft = MaxLeft;
        stepX = -stepX;
    }

    if (pLeft <= 0) {
        pLeft = 0;
        stepX = -stepX;
    }

    if (pTop >= MaxTop) {
        pTop = MaxTop;
        stepY = -stepY;
    }

    if (pTop <= 0) {
        pTop = 0;
        stepY = -stepY;
    }

    oWrap.style.left = pLeft + 'px';
    oWrap.style.top = pTop + 'px';

    createShadow(pLeft, pTop);
    requestAnimationFrame(move);
}
requestAnimationFrame(move);

//生成拖尾
function createShadow(left, top) {
    let oP = document.createElement("p");
    oP.style.left = left + "px";
    oP.style.top = top + "px";
    oP.style.transition = "transform 1s, opacity .5s";
    // oP.style.backgroundColor = randomColor();
    setTimeout(() => {
        oP.style.transform = " scale(0.3)";
        oP.style.opacity = " 0";
    });
    setTimeout(() => {
        oShadow.removeChild(oP);
    }, 500);
    oShadow.appendChild(oP);
}

//随机颜色
// function randomColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     return `rgb(${r},${g},${b})`;
// }