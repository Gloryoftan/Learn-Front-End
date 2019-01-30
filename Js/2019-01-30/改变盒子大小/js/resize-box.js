let oWrap = document.getElementById("wrap");
let aDrag = [...document.querySelectorAll("#wrap .resize div")];

aDrag.forEach((ele, index) => {
    //鼠标按下时间
    ele.onmousedown = function (e) {
        //获取鼠标的按下位置
        let pX = e.clientX;
        let pY = e.clientY;

        //获取按下时的宽度
        let pWidth = parseFloat(getComputedStyle(oWrap).width);
        let pHeight = parseFloat(getComputedStyle(oWrap).height);
        let pTop = oWrap.offsetTop;
        let pLeft = oWrap.offsetLeft;

        //获取Top和Left的最大值
        let maxLeft = pLeft + oWrap.offsetWidth - 10;
        let maxTop = pTop + oWrap.offsetHeight - 10;

        console.log(pX, pY, pWidth, pHeight);
        console.log(pTop, pLeft, maxLeft, maxTop);

        document.onmousemove = function (e) {
            let [width, height, top, left] = [pWidth, pHeight, pTop, pLeft];

            let dX = e.clientX - pX;
            let dY = e.clientY - pY;

            switch (index) {
                case 0:
                    height = pHeight - dY;
                    top = pTop + dY;
                    break;
                case 1:
                    width = pWidth + dX;
                    break;
                case 2:
                    height = pHeight + dY;
                    break;
                case 3:
                    width = pWidth - dX;
                    left = pLeft + dX;
                    break;
                case 4:
                    width = pWidth - dX;
                    height = pHeight - dY;
                    left = pLeft + dX;
                    top = pTop + dY;
                    break;
                case 5:
                    height = pHeight - dY;
                    width = pWidth + dX;
                    top = pTop + dY;
                    break;
                case 6:
                    width = pWidth - dX;
                    height = pHeight + dY;
                    left = pLeft + dX;
                    break;
                case 7:
                    width = pWidth + dX;
                    height = pHeight + dY;
                    break;
            }
            width = Math.max(width, 10);
            height = Math.max(height, 10);
            top = Math.min(top, maxTop);
            left = Math.min(left, maxLeft);
            oWrap.style.width = width + 'px';
            oWrap.style.height = height + 'px';
            oWrap.style.left = left + 'px';
            oWrap.style.top = top + 'px';

        };
    };
});

//鼠标抬起的时候，消除document的move时间
document.onmouseup = function () {
    this.onmousemove = null;
};

/*             //east
            if (index === 1) {
                //获取当前的移动后的坐标
                let cX = e.clientX;

                //鼠标位置的变化量
                let dX = cX - pX;

                //鼠标位置的变化量要等于盒子宽度的变化量
                let width = pWidth + dX;
                width = Math.max(width, 10);
                oWrap.style.width = width + 'px';
            }

            //south
            if (index === 2) {
                let cY = e.clientY;
                let dY = cY - pY;
                let height = pHeight + dY;
                height = Math.max(height, 10);
                oWrap.style.height = height + 'px';
            }

            //south-east
            if (index === 7) {
                let cX = e.clientX;
                let cY = e.clientY;
                let dX = cX - pX;
                let dY = cY - pY;
                let width = pWidth + dX;
                let height = pHeight + dY;
                width = Math.max(width, 10);
                height = Math.max(height, 10);
                oWrap.style.width = width + 'px';
                oWrap.style.height = height + 'px';
            }

            //west
            if (index === 3) {
                let cX = e.clientX;
                let dX = cX - pX;
                let width = pWidth - dX;
                let left = pLeft + dX;
                width = Math.max(width, 10);
                left = Math.min(left, maxLeft);
                oWrap.style.width = width + 'px';
                oWrap.style.left = left + 'px';
            }

            //north
            if (index === 0) {
                let cY = e.clientY;
                let dY = cY - pY;
                let height = pHeight - dY;
                let top = pTop + dY;
                height = Math.max(height, 10);
                top = Math.min(top, maxTop);
                oWrap.style.height = height + 'px';
                oWrap.style.top = top + 'px';
            }

            //north-west
            if (index === 4) {
                let cX = e.clientX;
                let cY = e.clientY;
                let dX = cX - pX;
                let dY = cY - pY;
                let width = pWidth - dX;
                let height = pHeight - dY;
                let left = pLeft + dX;
                let top = pTop + dY;
                width = Math.max(width, 10);
                height = Math.max(height, 10);
                left = Math.min(left, maxLeft);
                top = Math.min(top, maxTop);
                oWrap.style.width = width + 'px';
                oWrap.style.height = height + 'px';
                oWrap.style.left = left + 'px';
                oWrap.style.top = top + 'px';
            }

            //north-east
            if (index === 5) {
                let cY = e.clientY;
                let cX = e.clientX;
                let dY = cY - pY;
                let dX = cX - pX;
                let height = pHeight - dY;
                let width = pWidth + dX;
                let top = pTop + dY;
                height = Math.max(height, 10);
                width = Math.max(width, 10);
                top = Math.min(top, maxTop);
                oWrap.style.height = height + 'px';
                oWrap.style.width = width + 'px';
                oWrap.style.top = top + 'px';
            }

            //south-west
            if (index === 6) {
                let cX = e.clientX;
                let cY = e.clientY;
                let dX = cX - pX;
                let dY = cY - pY;
                let width = pWidth - dX;
                let height = pHeight + dY;
                let left = pLeft + dX;
                width = Math.max(width, 10);
                height = Math.max(height, 10);
                left = Math.min(left, maxLeft);
                oWrap.style.width = width + 'px';
                oWrap.style.height = height + 'px';
                oWrap.style.left = left + 'px';
            } */