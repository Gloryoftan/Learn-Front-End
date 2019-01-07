let oBtn = document.getElementById("btn"),
    oWrap = document.getElementById("wrap");

oBtn.onclick = function () {
    let HTML = "";
    for (let i = 0; i < 10; i++) {
        HTML += "<div></div>";
    }
    oWrap.innerHTML += HTML;
}

// Angle-brackets
let oBtn1 = document.getElementById("btn1");
let oWrap1 = document.getElementById("wrap1");

oBtn1.onclick = function () {
    //计算wrap的宽高
    let num = 11;
    let mid = 0;
    if (num % 2 == 0) {
        mid = num / 2;
    } else {
        mid = (num + 1) / 2;
    }

    oWrap1.style.width = mid * 50 + "px";
    oWrap1.style.height = num * 50 + "px";


    for (let i = 1; i <= num; i++) {
        // if (i<=mid){
        //     oWrap1.innerHTML += `<div style="margin-left:${(i-1)*50}px">${i}</div>`;
        // }else{
        //     oWrap1.innerHTML += `<div style="margin-left:${(num-i)*50}px">${i}</div>`;
        // } 
        let x = i <= mid ? i - 1 : num - i;
        oWrap1.innerHTML += `<div style="margin-left:${x*50}px;">${i}</div>`;
    }
}