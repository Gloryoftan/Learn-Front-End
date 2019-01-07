let b = 5;
let a = 0 || 5 && (b = 6);
console.log(a);
console.log(b);


if (a < b) {
    console.log(true);
} else {
    console.log(false);
}

a < b ? console.log(true) : console.log(false);

let val = true;

let d = "val is" + val ? "8" : "9";

console.log(d);

// alert(1>0?1:0);

// let oBox = document.getElementById("box");
// let oBtn = document.getElementById("test");
// let oDisplay = true;

// oBtn.onclick = function () {
//     if (oDisplay) {
//         oBox.style.display = "none";
//         oDisplay = false;
//     } else {
//         oBox.style.display = "block";
//         oDisplay = true;
//     }
// }

let oBox = document.getElementById("box");
let oBtn = document.getElementById("test");
let oDisplay = true;

oBtn.onclick = function () {
    oBox.style.display = oDisplay ? "none" : "block";
    oDisplay = !oDisplay;
}


let oNumber = 0;

switch (oNumber) {
    case 0:
        alert(oNumber + "");
        break;

    case 1:
        alert(oNumber + "");
        break;

    case 2:
        alert(oNumber + "");
        break;

    default:
        alert(oNumber + "");
        break;
}

let e = true;

function logic() {
    //...
}

if (e) {
    logic();
}

e && logic();

let sum = 0;
let  i = 1;

for (let a = 0; a < 10; a++) {
    i *= 2;
    sum += i;
    console.log(sum);  
}