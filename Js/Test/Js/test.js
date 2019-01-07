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
function a (x,y){
    console.log(x);
    console.log(y);
    console.log(this);
}
a(8,9);
a.bind(10)(8,9);