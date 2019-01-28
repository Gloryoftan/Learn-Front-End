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
        // if (ifCreated[index]) return;
        if (!ifCreated[index]) ifCreated[index] = {};
        if (ifCreated[index].bool) return;

        let data = ifCreated[index];

        if (!data.oSpanLeft) {
            //生成左侧标签<span>London丨<i>X</i></span>
            data.oSpanLeft = document.createElement("span");
            let txt = document.createTextNode(this.innerHTML + "丨");
            let oI = document.createElement("i");
            oI.innerHTML = "X";
            //给x加点击事件
            oI.onclick = function () {
                oSelected.removeChild(data.oSpanLeft);
                oRightItems.removeChild(data.oSpanRight);
                ifCreated[index].bool = false;
            };
            data.oSpanLeft.appendChild(txt);
            data.oSpanLeft.appendChild(oI);

            //生成右侧标签<span>Rome</span>
            data.oSpanRight = document.createElement("span");
            data.oSpanRight.innerHTML = this.innerHTML;
        }

        //渲染
        oSelected.appendChild(data.oSpanLeft);
        oRightItems.appendChild(data.oSpanRight);

        ifCreated[index].bool = true;
    };
});