let oWrap = document.getElementById("wrap");

oWrap.onmousedown = function (e) {
    //获取鼠标初始位置
    let sX = e.clientX;
    let sY = e.clientY;
    //获取按下时，盒子的位置
    let sLeft = oWrap.offsetLeft;
    let sTop = oWrap.offsetTop;

    document.onmousemove = function (e) {
        //获取鼠标当前位置
        let mX = e.clientX;
        let mY = e.clientY;

        //计算出鼠标位置的变化量
        let x = mX - sX;
        let y = mY - sY;

        //盒子当前的位置 = 盒子按下的位置 + 变化量
        oWrap.style.left = sLeft + x + 'px';
        oWrap.style.top = sTop + y + 'px';
    };
};

document.onmouseup = function () {
    this.onmousemove = null;
};