let aSpan = [...document.querySelectorAll("#wrap .content .left .items .city span")];
let oSelected = document.querySelector("#wrap .content .left .items .selected");
let oRightItems = document.querySelector("#wrap .right .items");

let ifCreated = []; //判断是否已经选中

/* 
ifCreated = [
    {
        oSpanLeft:oSpanLeft,
        oSpanRight:oSpanRight,
        bool : true
    },
    {
        oSpanLeft:oSpanLeft,
        oSpanRight:oSpanRight,
        bool : true
    },
]
*/

//添加点击事件
aSpan.forEach((ele, index) => {
    ele.onclick = function () {
        if (ifCreated[index]) return;
        //生成左侧标签<span>London丨<i>X</i></span>
        let oSpanLeft = document.createElement("span");
        let txt = document.createTextNode(this.innerHTML + "丨");
        let oI = document.createElement("i");
        oI.innerHTML = "X";
        oSpanLeft.appendChild(txt);
        oSpanLeft.appendChild(oI);

        //生成右侧标签<span>Rome</span>
        let oSpanRight = document.createElement("span");
        oSpanRight.innerHTML = this.innerHTML;

        //给x加点击事件
        oI.onclick = function () {
            oSelected.removeChild(oSpanLeft);
            oRightItems.removeChild(oSpanRight);
            ifCreated[index] = false;
        };

        //渲染
        oSelected.appendChild(oSpanLeft);
        oRightItems.appendChild(oSpanRight);

        ifCreated[index] = true;
    };
});