let aP = [...document.querySelectorAll("#wrap p")];
let aFirstSpan = [...document.querySelectorAll("#wrap div p span.first")];
let aSecondSpan = [...document.querySelectorAll("#wrap div p span.second")];
let lastTime = [];

//返回时分秒字符串
function getTime() {
    let nowD = new Date();
    let HH = nowD.getHours();
    let MM = nowD.getMinutes();
    let SS = nowD.getSeconds();
    HH = HH < 10 ? "0" + HH : HH + "";
    MM = MM < 10 ? "0" + MM : MM + "";
    SS = SS < 10 ? "0" + SS : SS + "";
    // console.log([...HH,...MM,...SS]);
    return [...HH, ...MM, ...SS];
}

//初始加载一次
function showTime() {
    let d = getTime();
    let lastTime = d;
    aFirstSpan.forEach((ele, index) => {
        ele.innerHTML = d[index];
    });
    return function () {
        let d = getTime();
        d.forEach((value, index) => {
            if (value === lastTime[index]) return;
            aSecondSpan[index].innerHTML = d[index];
            //p的动画
            aP[index].classList.add("tran");
            aP[index].classList.add("top");
            //还原
            setTimeout(() => {
                aFirstSpan[index].innerHTML = d[index];
                aP[index].classList.remove("tran");
                aP[index].classList.remove("top");
            }, 600);
        });
        lastTime = d;
    };
}
//定时器，1次/1s
setInterval(showTime(), 1000);