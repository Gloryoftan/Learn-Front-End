let oWrap = document.getElementById("wrap");

setInterval(() => {
    let rgba = randomColor()[0];
    let txtRgba = randomColor()[1];
    oWrap.innerHTML += `<span style="background-color:${rgba}"><b style="color:${txtRgba}">${rgba}</b></span>`
}, 1000);

function randomColor() {
    let [r, g, b, a] = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.random().toFixed(1)
    ];
    let [tr, tg, tb, ta] = [
        256 - r,
        256 - g,
        256 - b,
        1
    ];
    return [`rgba(${r},${g},${b},${a})`, `rgba(${tr},${tg},${tb},${ta})`];
}