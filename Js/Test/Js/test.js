// function a () {
//     return{
//         5 : [4,7,9]
//     };
// }
// console. log( a()[5][2]);

// function a(){
//     let b = function () {
//         alert(5);
//     };
//     return b;
// }
// a();
// console.log(b);

// function a(){
//     var x = y= 9;
// }
// a();

// console.log(x);
// console.log(y);

// var x = 5;
// a();
// function a(){
//     alert(x);
//     var x =10;
// }
// alert(x);

// alert(a);
// var a = 10;
// alert(a);
// function a(){alert(20)};
// alert(a);
// var a = 30;
// alert(a);
// function a(){alert(40)};
// alert(a);

// var a = 10;
// alert(a);
// a();
// function a(){
//     alert(20);
// }

// a();
// var a = function(){alert(1);};
// a();
// function a(){alert(2);}
// a();
// var a = function(){alert(3);};
// a();

// var a = 10;
// function fn(){
//     alert(a);
//     var a = 1;
//     alert(a);
// }
// fn();
// alert(a);

// var a = 10;
// a();
// function a(){
//     alert(20);
// }
// a = 30;
// alert(a);

// fn();
// alert(a);
// var a = 10;
// alert(a);
// function fn(){
//     a = 1;
// }

// var a = function(){
//     var x = 10;
//     x ++;
//     alert(x);
//     return x;
// };

// a()();


// for(let i=0;i<5;i++){
//     aBtn[i].onclick = function(){
//         alert(i);
//     };
// }

// fn()();
// var a = 0;
// function fn(){
//     alert(a);
//     var a = 3;
//     function c(){
//         alert(a);
//     }
//     return c;
// }

// var a = 5;
// function fn(){
//     var a = 10;
//     alert(a);
//     function b(){
//         a ++;
//         alert(a);
//     }
//     return b;
// }
// var c = fn();
// c();
// fn()();
// c();
// function a (x,y){
//     console.log(x);
//     console.log(y);
//     console.log(this);
// }
// a(8,9);
// a.bind(10)(8,9);

// let [a,b,c,d,e] = [1,2,3,4,5];


// let {x:x,y:y} = {y:9,x:10};

// let {x,y} = {x:9,y:10};

// let a = 9;
// let b = 10;
// let c = {
//     a,
//     b
// };
// console.log(c);

// function fn(data){
//     let {a,b,c=100} = data;
//     console.log(a,b,c);
// }
// fn({a:9,b:10});

// function f(){
//     console.log("xx");
// }
// let [x=f()]=[];
// let [a, b = a] = [1]
// console.log(a, b);

// let [a = b, b] = [undefined, 1]
// console.log(a, b);

// let a ="a";
// console.log(a.charCodeAt(0));

// let a = String.fromCharCode(99);
// console.log(a);

// let a = "我爱你";
// let b ="";

// for (let i=0,len=a.length;i<len;i++){
//     let code = a.charCodeAt(i) + 520;

//     b += String.fromCharCode(code);
// }
// console.log(b);


// let a = ["abc","def"];

// console.log(a.push("g"));

// console.log(a);

// let b = [9,function(x){console.log(x)}];
// b.pop()(b[0]);

// let a = ["A","B","C"];
// a.splice(1,1,"D");
// console.log(a);

// let a =[9,5,3,1,2]
// a.sort();
// console.log(a);

// let a = [9, 5, 3, 1, 2];
// a.sort(function (a, b) {
//     return b - a;
// });
// console.log(a);

// let a = [9, 5, 3, 1, 2];
// a.sort(function (a, b) {
//     return a - b;
// });
// console.log(a);

// let a = [
//     {name:"刘一",age:18},
//     {name:"陈二",age:28},
//     {name:"张三",age:17},
//     {name:"李四",age:24},
//     {name:"王五",age:24},
//     {name:"赵六",age:23},
// ];

// a.sort(function(x,y){
//     return x.age - y.age;
// });
// console.log(a);

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = a.concat(b);
// console.log(c);

// let a = ["A", "B", "C"];
// // let a = [1,2,3];
// let b = a.join(" & ");
// console.log(b);

// let a = [1, 2, 3];
// a.forEach(function () {
//     console.log(a);
// });

/* 
 * param:
 * return:
 */

// let a = [1, 2, 3];
// a.forEach(function (x, y, z) {
//     console.log(x, y, z);
// });

// for (let i = 0; i < a.length; i++) {
//     (function (x, y, z) {
//         console.log(x, y, z);
//     })(a[i], i, a);
// }

// let a = [10, 20, 5, 25, 90];
// let b = a.filter(function (x) {
//     return x == 10;
// });
// console.log(a);
// console.log(b);

// let name = "Tony";
// let age = 18;

// let str = `${name} is a ${age} year old boy`;
// console.log(str);

// let a = [1, 2, 3];

// function x(param){
//     console.log(param);
// }x(...a);

// let a = [1, 2, 3];
// let b = [4,5,6];
// // let c = a.concat(b);
// let c = [...a,...b];
// console.log(c);

// let aDiv = document.querySelectorAll("#wrap div");
// console.log([...aDiv]);
// [...aDiv].forEach(function(n,i){});

// console.log(Math.PI);

// console.log(Math.abs(-1));

// let a = 9;
// console.log(Math.pow(2,10));

// console.log(Math.pow(256,.5));

// console.log(Math.floor(2.7));
// console.log(Math.floor(-2.7));

// console.log(Math.ceil(2.4));
// console.log(Math.ceil(-2.4));

// console.log(Math.round(4.49));
// console.log(Math.round(4.5));

// console.log(Math.PI*2);

// console.log(Math.asin(0.5));
// console.log(Math.PI / 6);

// const rdm = function (n=0,m=n+1) {
//     return Math.floor((m-n)*Math.random()+n);
// }
// console.log(rdm(5,10));

// console.log(parseInt("1001",2));

// let x =10.45;
// let a = (x+"").split(".")[0]-0;
// console.log(a);

// let a = {
//     id: "1",
//     name: "samari",
//     age: "24",
//     sex: "male"
// };

// for (let key in a) {
//     console.log(key, ":", a[key]);

// }

// let a = {
//     id: "1",
//     name: "samari",
//     age: "24",
//     sex: "male"
// };
// //新增
// a.nationality = "Chinese";
// //改变
// a.age = "20";
// //删除
// delete a.sex;
// //是否存在
// let b = "age" in a;

// console.log(a);
// console.log(b);

// let a = {
//     id: "1",
//     name: "samari",
//     age: "24",
//     sex: "male"
// };
// let b = JSON.stringify(a);
// console.log(b);

// let c = JSON.parse(b);
// console.log(c);

// function fn({x,y}={x:10,y:20}){
//     console.log(x,y);
// }



// var fn = function (a, b) {
//     return a + b;
// }

// let fn = (a, b) => a + b;

// let num = 0;
// let fn = function () {
//     console.log(++num);
// };
// setInterval(fn, 1);

// function fn(a, b) {
//     console.log(a + b);
// }
// setInterval(fn, 1000, 2, 3);

// requestAnimationFrame(function(){
//     console.log(4);
// });


// //初级伪装
// if (!window.requestAnimationFrame) {
//     window.requestAnimationFrame = function (fn) {
//         let timer = setTimeout(fn, 16);
//         return timer;
//     };

//     window.cancelAnimationFrame = function (id) {
//         clearTimeout(id);
//     };
// }

// //伪装的高级写法
// window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
//     return setTimeout(fn, 1000 / 60);
// };
// window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

// let a = new Date();
// console.log(a);

// console.log(a.getFullYear());
// console.log(a.getMonth() + 1);
// console.log(a.getDate());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());

// console.log("##################################");

// console.log(a.toUTCString());

// let b = new Date().getTime();

// console.log(new Date(b - 3600000));

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

// window.Move = (function () {
//     //判断requestAnimationFrame的兼容
//     window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
//         return setTimeout(fn, 1000 / 60);
//     };
//     window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

//     return function (ele, attr, target, step = 2) {
//         //IE兼容，IE8只兼容currentStyle
//         let cssObj = ele.currentStyle || getComputedStyle(ele);
//         //初始值
//         let sVal = parseFloat(cssObj[attr]);
//         // 初始值与目标大小的问题
//         let bool = sVal > target;
//         if (sVal > target) {
//             step = -Math.abs(step);
//         } else if (sVal < target) {
//             step = Math.abs(step);
//         } else {
//             return;
//         }

//         function fn() {
//             sVal += step;
//             //判断终点
//             if (bool ? sVal >= target : sVal >= target) {
//                 ele.style[attr] = sVal + "px";
//                 return;
//             }
//             ele.style[attr] = sVal + "px";
//             requestAnimationFrame(f);
//         }
//         requestAnimationFrame(f);
//     };

// })();

// let ele = document.getElementById("wrap");
// //创建文本节点
// let text = document.createTextNode("Hanks");
// //创建元素节点
// let oDiv = document.createElement("div");

// //添加
// ele.appendChild(text);

// //在某个自元素的前面加
// let e = document.getElementById("e");
// ele.insertBefore(oDiv, e);

// //放在子元素第一位（即使是undefined都可以添加）
// ele.insertBefore(oDiv,ele.children[0]);

// //删除
// ele.removeChild(e);

// let ele = document.getElementById("wrap");

// //ele.firstChild
// //ele.firstElementChild
// ele.lastChild
// ele.nextSibling
// ele.previousSibling

// console.log( (!(~+[])+{})[--[~+""][+[]]*[~+[]] + ~~!+[]]+({}+[])[[~!+[]]*~+[]]);

// let ele1 = document.getElementById("wrap1");
// let ele2 = document.getElementById("wrap2");
// //true表示会把里面的文本内容也克隆（警惕ID的重复）
// let clone = ele1.cloneNode(true);

// ele2.appendChild(clone);

// function ajax(){

// }

// btn.onclick = {
//     ajax();
// }

// let a = document.getElementById("btn1");

// btn.onclick = function () {
//     alert("1");
// };

// //获取页面显示区的宽高，IE8及一下不兼容
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// //IE兼容
// //width + padding
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

// //width + padding + border
// console.log(document.documentElement.offsetWidth);
// console.log(document.documentElement.offsetHeight);

// //有超出部分时
// console.log(document.documentElement.scrollWidth);
// console.log(document.documentElement.scrollHeight);

// //获取定位的 left & top 值
// console.log(a.offsetLeft);
// console.log(a.offsetTop);

// //获取元素到文档的距离
// function getOffset(ele) {
//     let dis = {top: 0, left: 0};
//     while (ele === document.body){
//         dis.top += ele.offsetTop;
//         dis.left += ele.offsetLeft;
//         ele = ele.offsetParent;
//     }
// }

// //获取页面的滚动高
// console.log(document.documentElement.scrollTop || document.body.scrollTop);

// let a =document.getElementById("btn1");

// //返回值是一个对象，包含top,left,right,bottom
// a.getBoundingClientRect();

// //把元素直接移动到可视区 true顶部对齐 false底部对齐
// a.scrollIntoView();

// box1.onclick = function () {
//     console.log(1);
// }

// box2.onclick = function () {
//     console.log(2);
// }

// box3.onclick = function (event) {
//     event.stopPropagation();
//     console.log(3);
// }
// //兼容IE
// event = event || window.event;
// //组织冒泡
// if (event.stopPropagation) {
//     event.stopPropagation();
// } else {
//     event.cancelBubble = true;
// }
// //Dom 0级事件，弊端是会被覆盖
// box.onclick = function () {
//     console.log("1");
// };

// box.onclick = function () {
//     console.log("2");
// };

// //Dom 2级事件监听
// box3.addEventListener("click", function (event) {
//     console.log("31");
// });

// //监听事件的清除
// let callback = function () {
//     console.log("1");
// };
// box.addEventListener("click", callback);

// document.ondblclick = function () {
//     box.removeEventListener("click".callback);
// };

// // DOM 0级在时间里直接return false
// document.oncontextmenu = function () {
//     return false;
// };

// // DOM 2级
// // 主流浏览器
// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
// });
// // IE
// document.attachEvent("contextmenu", function (event) {
//     event = enent || window.event;
//     event.returnValue = false;
// });

// //事件的监听
// function addEvent(ele, eType, callback, capture) {
//     //主流浏览器
//     if (ele.addEventListener) {

//         //判断是否为火狐
//         if (eType === "mousewheel" && document.createElement("div").onmousewheel === undefined) {
//             eType = "DOMMouseScroll";
//         }

//         ele.addEventListener(eType, callback, capture);
//         return callback;
//     } else {
//         //处理IE的this指向问题
//         var codeCall = function () {
//             callback.call(ele);
//         };
//         ele.attachEvent("on" + eType, ele);
//         return codeCall;
//     }
// }

// //事件的移除
// function removeEvent(ele, eType, callback, capture) {
//     ele.addEventListener ? ele.removeEventListener(eType, callback, capture) : ele.detachEvent("on" + eType, callback);
// }

// //一次性事件
// function oneEvent(ele, eType, callback, capture) {
//     var fn = addEvent(box, "click", function (e) {
//         callback.call(ele, e);
//         removeEvent(this, "click", fn);
//     });
// }

// /* 
// onfocus 获得焦点
// onblur  失去焦点
// 按Tab能选中的，就可以获得焦点。
// 特例:a,document,window
// */
// //非常有意思的焦点事件应用
// window.onfocus = function () {
//     document.title = "Samari's Blog";
// };
// window.onblur = function () {
//     document.title = "Jesus! Too many BUGs!!";
// };
// //用来停止定时器（定时器在焦点不在当前页面的时候会变慢）
// let num = 0;
// let timer = null;
// function m(){
//     document.title = ++num;
//     timer = setTimeout(m,50);
// }
// timer = setTimeout(m,50);

// window.onblur = function(){
//     clearTimeout(timer);
// };
// window.onfocus = function(){
//     clearTimeout(timer);
//     m();
// };

// /* 
// 按下：keydown keypress
// down在press前触发
// down事件响应所有按键
// press只响应能键入值相关的键

// 抬起：keyup
// */

// document.onkeydown = function(){};

// document.onkeypress = function () {};

// document.onkeyup = function(){};

// //阻止键盘事件
// if(e.keyCode === xxx){
//  return false;   
// }

/* 正则表达式
    对象
    配合一些api来验证字符串
*/

// let a = "123abc456def789";

// function fn(str) {
//     let len = str.length;
//     let s = "";
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         let n = str.charAt(i);
//         if (!isNaN(n)) {
//             s += n;
//         } else {
//             s && arr.push(s);
//             s = "";
//         }
//     }
//     s && arr.push(s);
//     return arr;
// }

// fn(a);
// console.log(fn(a));

// let a = "123abc456def789";

// function fn(str) {
//     return str.match(/\d+/g);
// }
// console.log(fn(a));

// let a = /abc/;

// let  a = new RegExp("abc");

/* 
转义符号
\ /
*/

//转义符号讲有特殊意义的符号变成没有特殊意义
// let a = /\//;

//转义符号配合一些自己使用，有非常独特的意义
/* 
\s 匹配各种空格
\S 除了小s能匹配到的

\d 数字
\D 非数字

\w 匹配字符（数字，字母，下划线）一般用来匹配用户名 
\W 

\b 连词符 起始-结束 让其独立（转义w的内容让其不独立）（汉字一个字也不独立）（通常匹配英文单词）
\B
*/

/* 
修饰符
i   不区分大小写
g   全局匹配 (不会在第一个就停)
m   换行匹配
*/

/* 
.match()
字符串.match(正则)
寻找匹配的内容，拿到并组成一个数组返回，否则返回null
*/

// let a = /abc/igm;


/* 
量词 { }
    {n}     n个
    {n,m}   n~m [n,m]
    {n,}    [n,+∞]
    没有{,n} 只有{0,n}

    默认贪婪，往多的去匹配
    量词后面加 ？ 就成了惰性

几个特殊量词有专属的符号代替
    {1,}    +
    {0,}    *
    {0,1}   ?
*/
// let a = /\d{11}/g;
// let b = /\d{2,4}/;


/* 
子项（）
如果只想拿到里面的一部分，可以利用子项去取值
*/
// let a =/(ab)+/;
// let b = /Samari:(\d{11})/; //取第一个子项就是手机号，而不会出现名字

/* 
字符集[] 规则 => unicode ASCII码
*/
let a = /Dear(Samari|Henry|Liz)/;

let b = /[1-7]/;
let c = /1|2|3|4|5|6|7/;

let d = /[1-7]{5}/;
let e = /(1|2|3|4|5|6|7){5}/;


/* ############################################################################## */


























