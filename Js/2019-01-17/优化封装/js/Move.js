/* 
Param:
    ele - object (必传)   
    attr - string (必须)    css属性
    target - number (必须)  终点
    step - number (选填) 默认2
return:
    undefined
要点:
需要babel转译
*/

window.Move = (function () {
    //判断requestAnimationFrame的兼容
    window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
        return setTimeout(fn, 1000 / 60);
    };
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

    return function (ele, attr, target, step = 2) {
        //IE兼容，IE8只兼容currentStyle
        let cssObj = ele.currentStyle || getComputedStyle(ele);
        //初始值
        let sVal = parseFloat(cssObj[attr]);
        // 初始值与目标大小的问题
        let bool = sVal > target;
        if (sVal > target) {
            step = -Math.abs(step);
        } else if (sVal < target) {
            step = Math.abs(step);
        } else {
            return;
        }

        function fn() {
            sVal += step;
            //判断终点
            if (bool ? sVal >= target : sVal >= target) {
                ele.style[attr] = sVal + "px";
                return;
            }
            ele.style[attr] = sVal + "px";
            requestAnimationFrame(fn);
        }
        requestAnimationFrame(fn);
    };
})();