// const events = require("events");
// console.log(events);
const EventEmitter = require("events").EventEmitter;

let a = new EventEmitter();

let fn1 = function (a, b, c) {
    console.log("第一个eve事件触发了！");
    console.log(a, b, c);
};

let fn2 = function () {
    console.log("第二个eve事件触发了！");
};

//绑定事件（addEventListener）
a.on("eve", fn1);

a.on("eve", fn2);

//解绑事件
a.off("eve", fn2);

//触发事件
a.emit("eve", 3, 6, 9);

//newListener
a.on("newListener", () => {
    console.log("监听到了事件的订阅");
});

a.on("eve", () => {
    console.log("订阅新事件");
});

//removeListener
a.on("removeListener", () => {
    console.log("监听到了事件的移除");
});