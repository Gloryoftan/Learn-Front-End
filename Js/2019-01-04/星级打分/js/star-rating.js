let aLi = document.querySelectorAll("#wrap .list li");
let oUl = document.getElementsByClassName("list");
let oText = document.querySelector("#wrap .txt");
let len = aLi.length;
let index = -1;

let arrText = [
    "Please Rating This!",
    "🌟",
    "🌟🌟",
    "🌟🌟🌟",
    "🌟🌟🌟🌟",
    "🌟🌟🌟🌟🌟"
];

console.log(oUl);

for (let i = 0; i < len; i++) {
    aLi[i].onmouseenter = function () {
        //小的点亮
        for (let j = 0; j <= i; j++) {
            aLi[j].className = "light";
        }

        //大的熄灭
        for (let j = i + 1; j < len; j++) {
            aLi[j].className = "";
        }

        oText.innerHTML = arrText[i + 1];
    };

    aLi[i].onclick = function () {
        index = i;
    };
}

oUl[0].onmouseleave = function () {
    for (let j = 0; j < len; j++) {
        aLi[j].className = j <= index ? "light" : "";
        oText.innerHTML = arrText[index+1];
    }
    console.log(oUl);

};
console.log(oUl);