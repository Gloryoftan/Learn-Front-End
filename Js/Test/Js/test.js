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

let ele = document.getElementById("wrap");
//创建文本节点
let text = document.createTextNode("Hanks");
//创建元素节点
let oDiv = document.createElement("div");

//添加
ele.appendChild(text);

//在某个自元素的前面加
let e = document.getElementById("e");
ele.insertBefore(oDiv, e);

//放在子元素第一位（即使是undefined都可以添加）
ele.insertBefore(oDiv,ele.children[0]);

//删除
ele.removeChild(e);