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

console.log(Math.round(4.49));
console.log(Math.round(4.5));
