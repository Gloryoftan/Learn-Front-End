(function (data) {
    // console.log(data[1]);
    let oUl = document.querySelector("#wrap .list");
    let aLi = document.getElementsByTagName("li");
    let aI = document.getElementsByTagName("i");

    let aBtnI = document.querySelectorAll("#wrap .btn .iconfont");
    let oBtnAll = document.getElementsByClassName("allBtn");
    let oBtnRev = document.getElementsByClassName("revBtn");

    let len = data.length;

    console.log(aI);

    //通过数据生成HTML
    (function () {
        console.log(oUl);

        let html = "";
        let color = ["#323341", "#434664", "#721532"];
        let colorLen = color.length;
        for (let i = 0; i < len; i++) {
            html += `<li style="background-color:${color[i%colorLen]}"><i class="iconfont icon-checkbox-no"></i><span>${data[i].TXT}</span></li>`;
        }
        oUl.innerHTML = html;
        console.log(aLi);
    })();

    //给Li添加点击事件
    let num = 0;
    (function () {
        // console.log(aLi);
        [...aLi].forEach(function (x, y) {
            [...aLi][y].onclick = function () {
                // console.log(y);
                if (aI[y].className == "iconfont icon-checkbox-no") {
                    aI[y].className = "iconfont icon-checkbox-yes";
                    num++;
                } else {
                    aI[y].className = "iconfont icon-checkbox-no";
                    num--;
                }
                if (num == len) {
                    aBtnI[0].className = "iconfont icon-checkbox-yes";
                } else {
                    aBtnI[0].className = "iconfont icon-checkbox-no";
                }
            };
        });
    })();

    //全选 反选
    (function () {
        //全选的点击
        console.log(oBtnAll);

        oBtnAll[0].onclick = function () {
            if (aBtnI[0].className == "iconfont icon-checkbox-no") {
                aBtnI[0].className = "iconfont icon-checkbox-yes";
                [...aI].forEach(function (x, y) {
                    [...aI][y].className = "iconfont icon-checkbox-yes";
                    num = len;
                });
            } else {
                aBtnI[0].className = "iconfont icon-checkbox-no";
                [...aI].forEach(function (x, y) {
                    [...aI][y].className = "iconfont icon-checkbox-no";
                    num = 0;
                });
            }
        };

        //反选的点击
        oBtnRev[0].onclick = function () {
            if (aBtnI[1].className == "iconfont icon-checkbox-no") {
                aBtnI[1].className = "iconfont icon-checkbox-yes";
                [...aI].forEach(function (x, y) {
                    if ([...aI][y].className == "iconfont icon-checkbox-no") {
                        [...aI][y].className = "iconfont icon-checkbox-yes";
                    } else {
                        [...aI][y].className = "iconfont icon-checkbox-no";
                    }
                });
                if (num = len) {
                    aBtnI[0].className = "iconfont icon-checkbox-no";
                }
                num = len - num;
            } else {
                aBtnI[1].className = "iconfont icon-checkbox-no";
                // if (num = len) {
                //     aBtnI[0].className = "iconfont icon-checkbox-no";
                // }
            }

        };
    })();


})(
    //假设数据
    [{
            TXT: "item1",
            Id: "item1"
        }, {
            TXT: "item2",
            Id: "item2"
        },
        {
            TXT: "item3",
            Id: "item3"
        },
        {
            TXT: "item4",
            Id: "item4"
        },
        {
            TXT: "item5",
            Id: "item5"
        },
        {
            TXT: "item6",
            Id: "item5"
        },
    ]
);





/* Tip：Js改变背景图片的时候，如果会闪一下，可以提前加载背景图，或者用精灵图。 */