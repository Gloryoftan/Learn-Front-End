let oWrap = document.getElementById("wrap");

addEvent(oWrap, "mousewheel1", function (event) {
    event = event || window.event;

    var dir;
    if (event.detail) {
        dir = event.detail / 3;
    } else {
        dir = event.wheelDelta / -120;
    }
    this.scrollTop += dir * 50;
});

//事件的监听
function addEvent(ele, eType, callback, capture) {
    //主流浏览器
    if (ele.addEventListener) {

        //判断是否为火狐
        if (eType === "mousewheel" && document.createElement("div").onmousewheel === undefined) {
            eType = "DOMMouseScroll";
        }

        ele.addEventListener(eType, callback, capture);
        return callback;
    } else {
        //处理IE的this指向问题
        var codeCall = function () {
            callback.call(ele);
        };
        ele.attachEvent("on" + eType, ele);
        return codeCall;
    }
}

//事件的移除
function removeEvent(ele, eType, callback, capture) {
    ele.addEventListener ? ele.removeEventListener(eType, callback, capture) : ele.detachEvent("on" + eType, callback);
}

//一次性事件
function oneEvent(ele, eType, callback, capture) {
    var fn = addEvent(box, "click", function (e) {
        callback.call(ele, e);
        removeEvent(this, "click", fn);
    });
}