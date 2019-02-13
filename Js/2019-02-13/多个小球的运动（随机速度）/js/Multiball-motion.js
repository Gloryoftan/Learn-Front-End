let oWrap = document.getElementById("wrap");

//节点片段
let oF = document.createDocumentFragment();

//生成十个小球
for (let i = 0; i < 10; i++) {
    let oP = document.createElement("p");
    oF.appendChild(oP);
}
oWrap.appendChild(oF);

let aP = [...oWrap.children];

//随机初始速度
let speedArr = [];
aP.forEach((ele, index) => {
    speedArr[index] = {
        x: Math.floor(Math.random() * 7 + 3),
        y: Math.floor(Math.random() * 7 + 3)
    };
});

//获取以及刷新最大值
let maxLeft, maxTop;
window.onresize = function resize() {
    maxLeft = window.innerWidth - 30;
    maxTop = window.innerHeight - 30;
    return resize;
}();

//运动
! function move() {
    aP.forEach((ele, index) => {
        /*         //获取当前元素变化量
                let speedX, speedY;
                if(!speedArr[index]){
                    speedArr[index]={
                        x:Math.floor(Math.random()*7+3),
                        y:Math.floor(Math.random()*7+3)
                    };
                }
                speedX = speedArr[index].x;
                speedY = speedArr[index].y; */

        //变化left
        let left = ele.offsetLeft + speedArr[index].x;
        let top = ele.offsetTop + speedArr[index].y;
        //最大最小值判断
        if (left >= maxLeft) {
            left = maxLeft;
            speedArr[index].x = -speedArr[index].x;
        }
        if (left <= 0) {
            left = 0;
            speedArr[index].x = -speedArr[index].x;
        }
        if (top >= maxTop) {
            top = maxTop;
            speedArr[index].y = -speedArr[index].y;
        }
        if (top <= 0) {
            top = 0;
            speedArr[index].y = -speedArr[index].y;
        }

        //位置赋值
        ele.style.left = left +'px';
        ele.style.top = top +'px';
    });
    requestAnimationFrame(move);
}();