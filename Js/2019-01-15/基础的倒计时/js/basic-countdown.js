let oSpan = document.querySelector("#wrap .count span");
let sVal = 8;

setInterval(() => {
    oSpan.innerHTML = --sVal;
    if(sVal ===1){
        window.location.href="https://github.com/Gloryoftan";
    }
}, 1000);