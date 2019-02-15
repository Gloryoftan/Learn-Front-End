(function () {
    //重要变量
    let oScroll = document.querySelector("#wrap .scroll");
    let oWrap = document.getElementById("wrap");
    let oBar = document.querySelector("#wrap .scroll .bar");
    let oContent = document.querySelector("#wrap .content");

    let wrapHeight = oScroll.offsetHeight;
    //wrapHeight/contentHeight
    let overSize = wrapHeight / oContent.offsetHeight;

    //根据内容大小求出bar的高度
    (function () {
        let height = wrapHeight * wrapHeight / oContent.offsetHeight;
        oBar.style.height = height + 'px';
    })();

    if (overSize >= 1) {
        oScroll.style.display = "none";
        return;
    }

    //各种事件的添加
    (function () {
        //公共变量
        let downY, downTop;
        let barMax = wrapHeight - oBar.offsetHeight;
        let barMin = 0;
        let contentMax = oContent.offsetHeight - wrapHeight;

        //按下事件监听
        oBar.addEventListener("mousedown", barDown);

        //抬起事件监听
        document.addEventListener("mouseup", docUP);

        //bar的按下function
        function barDown(event) {
            //按下时Y坐标
            downY = event.clientY;
            downTop = oBar.offsetTop;
            document.addEventListener("mousemove", docMove);
        }

        //document 的 move 事件
        function docMove(event) {
            //鼠标位置变化量
            let y_ = event.clientY - downY;
            let bTop = downTop + y_;

            //极限值判断
            bTop = Math.min(bTop, barMax);
            bTop = Math.max(bTop, barMin);

            //求对应的content的位置
            let contentTop = bTop * contentMax / barMax;

            //位置改变
            oBar.style.top = bTop + 'px';
            oContent.style.top = -contentTop + 'px';
        }

        //document 的 up 事件
        function docUP() {
            document.removeEventListener("mousemove", docMove);
        }
    })();
})();