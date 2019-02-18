//订阅-发布模式
class Emitter {
    constructor() {
        this.arr = {};
    }
    //订阅
    on(name, callback) {
        if (this.arr[name]) {
            this.arr[name].push(callback);
        } else {
            this.arr[name] = [callback];
        }
    }
    //发布
    emit(name) {
        if (this.arr[name]) {
            this.arr[name].array.forEach((fn) => {
                fn.call(this);
            });
        }
    }
}

//实例1
let emit1 = new Emitter();

//订阅
emit1.on("eve", function () {
    console.log("回调函数1");
});
emit1.on("eve", function () {
    console.log("回调函数2");
});

emit1.on("eve2", function () {
    console.log("回调函数");
});

//eve直播了
setTimeout(() => {
    emit1.emit("eve");
}, 5000);