let oWrap = document.getElementById("wrap");
let x = new Date(2019, 7, 23);


function fn() {
    let y = new Date();

    let a = x - y;

    let DD = Math.floor(a / 1000 / 60 / 60 / 24);

    let HH = Math.floor(a / 1000 / 60 / 60 % 24);

    let MM = Math.floor(a / 1000 / 60 % 60);

    let SS = Math.floor(a / 1000 % 60);

    oWrap.innerHTML = `距离过年还有<span>${DD}</span>天<span>${HH}</span>小时<span>${MM}</span>分<span>${SS}</span>秒`;
}
fn();

setInterval(fn, 1000);