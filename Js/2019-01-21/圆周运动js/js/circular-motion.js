let startDeg = 90;
let d = 150;
let oDot = document.querySelector("#wrap .dot");
let oShadow = document.querySelector("#wrap .shadow");

function randomColor() {
    let [r, g, b, a] = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.random().toFixed(1)
    ];
    return [`rgba(${r},${g},${b},${a})`];
}

function cir() {
    startDeg -= 6;
    d -= 2;
    let radian = startDeg / 180 * Math.PI;

    let x = Math.cos(radian) * d;
    let y = Math.sin(radian) * d;
    let oLeft = x + 150 - 5;
    let oTop = 150 - y - 5;

    oDot.style.left = oLeft + "px";
    oDot.style.top = oTop + "px";

    oShadow.innerHTML += `<span style="background-color:${randomColor()};left:${oLeft}px;top:${oTop}px"> </span>`

    requestAnimationFrame(cir);
}
requestAnimationFrame(cir);