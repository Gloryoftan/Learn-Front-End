let aLefttab = document.querySelectorAll("#tab-layout .lefttab li");
let aRighttab = document.querySelectorAll("#tab-layout .content .righttab");
let aRighttabtab = document.querySelectorAll("#tab-layout .content .righttab .tab");
let aRighttabimg = document.querySelectorAll("#tab-layout .content .righttab .img");

let index = 0;
let len = aLefttab.length;

for (let i = 0; i < len; i++) {
    //左侧tab添加点击事件
    aLefttab[i].onclick = function () {
        if (index === i) return;
        aLefttab[index].className = "";
        aRighttab[index].className = "righttab";
        index = i;
        aLefttab[index].className = "on";
        aRighttab[index].className = "righttab on";
    };

    //右侧按钮添加点击事件
    let aImg = aRighttabimg[i].querySelectorAll("li");
    let aTab = aRighttabtab[i].querySelectorAll("li");
    let imglen = aImg.length;
    let index1 = 0;

    for (let j = 0; j < imglen; j++) {
        aTab[j].onclick = function () {
            if (index1 === j) return;
            aTab[index1].className = "";
            aImg[index1].className = "";
            index1 = j;
            aTab[index1].className = "on";
            aImg[index1].className = "on";
        };
    }
}