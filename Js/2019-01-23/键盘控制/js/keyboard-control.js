let oWrap = document.getElementById("wrap");

let ifDown = {};

document.onkeydown = function (ev) {
    let keyCode = ev.keyCode;
    switch (keyCode) {
        case 65:
            oWrap.style.left = oWrap.offsetLeft - 10 + 'px';
            break;
        case 87:
            oWrap.style.top = oWrap.offsetTop - 10 + 'px';
            break;
        case 68:
            oWrap.style.left = oWrap.offsetLeft + 10 + 'px';
            break;
        case 83:
            oWrap.style.top = oWrap.offsetTop + 10 + 'px';
            break;
    }
};

//运动定时器
function moveLeft() {
    ! function m() {
        oWrap.style.left = oWrap.offsetLeft - 10 + 'px';
        requestAnimationFrame(m);
    }();
}

function moveTop() {
    ! function m() {
        oWrap.style.top = oWrap.offsetTop - 10 + 'px';
        requestAnimationFrame(m);
    }();
}

function moveRight() {
    ! function m() {
        oWrap.style.left = oWrap.offsetLeft + 10 + 'px';
        requestAnimationFrame(m);
    }();
}

function moveDown() {
    ! function m() {
        oWrap.style.top = oWrap.offsetTop + 10 + 'px';
        requestAnimationFrame(m);
    }();
}