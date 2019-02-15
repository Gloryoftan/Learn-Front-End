[toc]
# Js学习笔记
## 2018-12-20 git & github & 常用链接

[廖雪峰Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[阮一峰ECMAScript 6 入门](http://es6.ruanyifeng.com)

[MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

[Babel:ES6转ES5](https://babeljs.io)

需要培养自己的github，把自己的项目放上去。

## 2018-12-20 Js注意事项
- Js也有行内、内部、外部
- 严格区分大小写
- 转义字符 \
- 功能字符都是半角符号
- 严格控制缩进

几个弹窗测试
- aler(); //可以当作断点
- confirm(""); //boolean let a = confirm(); 丑
- prompt(); // let b = prompt(); 丑
- console.log();

一般操作都是对象. = xxx。要从对象出发，避免出现参数的重新赋值情况。

## 2018-12-21 定义变量

```js
let varible = document.getElementById("ID");
```

现在我们使用ES6版本

[Babel:ES6转ES5](https://babeljs.io)

ES5
- var
- function

ES6
- let
- const //不允许初始不赋值
- function

变量名的规定:
- 不能使用关键词/保留词
- 不能使用Js里面已经有意义的变量名
- 数字、字母、 _  、$   不能以数字开头
- 见名知意 如oBtn
- 驼峰命名法(去掉减号，后面一个字母大写)

## 2018-12-21 数据类型

基础数据类型:
- number
- string //ES6 let x = ``;
- boolean 
- undefined
- null 
- symbol 
- [ ]
- { }

引用数据类型
- object
- 函数是object类型

内置对象
- document
- console

检测数据类型
- typeof

- typeof在检测 null 类型的时候会返回 "object"
- typeof在检测 function 类型的时候会返回 "function"


```js
let a = document.getElementById("ID");
let b = document.getElementsByClassName("Class");
let c = document.getElementsByName("Tag");
let d = document.getElementsByName("Input");
let e = document.querySelector("")
```
Ps:变量不能let定义两次


## 2018-12-21 操作样式 & 标签
操作元素的标签属性

合法的标签:
- 合法的标签属性，直接 . 操作
- class比较特殊，要用className
- style非常特殊，存储所有行内样式的对象
- 操作多个样式可以用cssText
- 若css太多，可以利用className的修改来实现。例如active。若已有class，需要加空格。

自定义的标签属性:
- getAttribute()
- setAttribute()
- removeAttribute()

获取标签的内容
- innerHTML
- innerText 会忽略标签
- value

## 2018-12-24 运算符
Js 数据类型:number, string,boolean,undefined,null,symbol

object

算数运算符 ( + - * / % )

记住，Js在计算小数的时候会出现精准偏差，如果需要小数运算，需要变为整数运算在处以相应的倍数。 

隐式类型转换
加号:
两边任意一边有字符串，那么都会进行隐式转换，拼接

[JSFUCK](http://www.jsfuck.com)

减号/惩罚/除法
会做数字运算。

非法运算会出现NaN (Not a Number) 是一个数字类型

双等判断
- 只比较值
- 一般特殊情况需要模糊比较时才使用

三等判断
- 比较数据类型和值

不等

!=

不全等

!==

基础数据类型存在栈内存，引用数据类型存在堆内存。

object类型比较的时候，比较的是地址。

比较运算符 (> < >= <=)

字符串的比较，比较ASCII码

逻辑运算符 ( && || ! )

与 &&

遇到假，就停，然后这个假取值，否则取后面的值。

背转成布尔值的时候是false: 

0 undefined null false "" NaN

或 ||

遇到真，就停，然后取这个真值，否则取后面的值。

非 ！
取数据对应相反的布尔值。


## 2018-12-24 运算符优先级
, 是一个运算符

![运算符优先级.png](http://note.youdao.com/yws/res/3268/WEBRESOURCEe978b0ae47e43baaca6f7cbab8a38826)

Tips:
浏览器会有“惰性运算”。从优先级最低的看起。

## 2018-12-24 模版字符串
引号描述的字符串，内部不能强行换行。

ES6 模版字符串

```js
v.innerHtml = `<div>
                <p>${x}</p>
                </div>`
```

## 2018-12-25 位运算
计算机存储数据都是以二进制的形式。32位。

~按位非，结果位相反数减1。

按位与、或、异或

左移<< x * 2^2

右移>> x / 2^2

判断奇偶:
基数&1一定是1

偶数&1一定是0

## 2018-12-25 if 判断
if 只判断布尔值

如果if、真语句、假语句都是一条语句，可以改写。

三目运算:
```js
if (a<b) {
    console.log(true);
}else{
    console.log(false);
}

a<b ? console.log(true) : console.log(false);
```

三目运算经典顺序题目:
```js
let val = true;

let d = "val is" + val?"8":"9";

console.log(d);
```
输出结果为8

三目运算的取值意义:

```js
alert(1>0?1:0);
```
if判断的应用:

```js
let oBox = document.getElementById("box");
let oBtn = document.getElementById("test");
let oDisplay = true;

oBtn.onclick = function () {
    if (oDisplay) {
        oBox.style.display = "none";
        oDisplay = false;
    } else {
        oBox.style.display = "block";
        oDisplay = true;
    }
}
```
将上面的代码改进:
```js
let oBox = document.getElementById("box");
let oBtn = document.getElementById("test");
let oDisplay = true;

oBtn.onclick = function () {
    oBox.style.display = oDisplay ? "none" : "block";
    oDisplay = !oDisplay;
}
```

## 2018-12-26 逻辑运算
switch 用于if在多种全等判断下的改写
```js
let oNumber = 0;

switch (oNumber) {
    case 0:
        alert(oNumber + "");
        break;

    case 1:
        alert(oNumber + "");
        break;

    case 2:
        alert(oNumber + "");
        break;

    default:
        alert(oNumber + "");
        break;
}
```

用逻辑运算符代替if 判断

原if判断:
```js
let e = true;

function logicOp() {
    //...
}

if (e) {
    logicOp();
}
```
可以改写为:
```js
e && logicOp();
```

## 2018-12-26 for循环
利用for循环计算
```math
2^1+2^2+2^3+...+2^9+2^10
```
```js
let sum = 0;
let  i = 1;

for (let a = 0; a < 10; a++) {
    i *= 2;
    sum += i;
    console.log(sum);  
}
```

Tips: index的最大值为长度减1

for 循环可能会出现死循环
```js
for (i=1;true;i++){}
```
但可以添加break

>优化for循环:可以不要在循环内进行dom操作，而是对变量进行操作。

## 2018-12-27 break continue while
- continue: 跳过当前剩余代码
- break: 整个for循环直接结束
- while: 是for循环的一种改写方法

```js
break
```
- 最近的关键词for/switch
- 只跳出一次
- 但可以通过添加名字来指定跳出对象

```js
while
```
- 不需要定义变量
- 迭代没有放在条件里面(可能是赋值)

```js
do-while
```
- 先执行一次循环体♻️

```js
for
```
- ES6，for条件里的let，不会产生全局变量

## 2018-12-28 函数
对象型object数据类型，即使两个函数长得一样，他们也不等。

```js
function a() {
    alert("9");
}
a();
```
上面这种方式定义的函数不能直接加括号执行。

```js
let a = function {
    alert("9");
}();
```

下面这种匿名函数不能直接出现。
```js
function {
    alert("9");
}
```
加括号可以变为函数表达式，可以直接执行，并==不是闭包==。只是一个函数的自执行。
```js
(function {
    alert("1");
})();

(function {
    alert("2");
}());

+function {
    alert("3");
}();

-function {
    alert("4");
}();

~function {
    alert("5");
}();

!function {
    alert("6");
}();
```

## 2018-12-28 参数
- 行参

定义函数时的()里。只针对函数内部有作用。

```js
function a (x,y,z){
    alert( x+y+z );
}
```

- 实参

函数调用时，是实参。

实参不一定是一个确切的数值，也可以传入某个变量。此时会直接访问这个变量的值。
```js
function a (x,y,z){
    alert( x+y+z );
}

a(7,8,9)
```
一般的取值:
```js
function a() {
    console.log(arguments[1].x[2]);
}

a([],{x:[4,5,7]});
```
上面代码为了取 7

函数的递: 实参可以传递所有的对象。

```js
function a(){
    a();
}
a();
```

- 不定参
arguments

不定参是所有实参的集合。

## 2018-12-28 this

为了判断一个低版本没有定义的变量，可以添加window.让其变成属性的判断。


```js
console.log(window.requestAnimationFrame)
```

在最大的作用域里，this === window

```Js
function a() {
    alert("9");
}
a();
```

函数自执行，this === window




```Js
let a = function () {
    name: "ABC",
    x: function(){
        console.log(this);
    }
}
a.x();
```
对象方法自执行，this指向.之前的对象

this === object

## 2018-12-28 return
每个函数都有返回值，return

函数默认返回undefined

return后面的代码不执行

let关键词定义的变量，起作用的范围是包含这个变量最近的{ }

## 2018-12-29 return数据返回值类型

```js
function a () {
    return{
        5 : [4,7,9]
    };
}
console. log( a()[5][2])
```
上面代码取9 。问题在于，数字必须用中括号才能访问，  a().5是小数。

函数加括号，返回表达式。

## 2018-12-29 获取元素的动态、静态

例子，针对一堆ClassName为ABC的元素:

```html
<div class = "ABC"></div>
<div class = "ABC"></div>
<div class = "ABC"></div>
```

getElementsByClassName是一个动态方法。

结果是第一步执行完，bag里只剩下两个div。
```Js
let aBag = document.getElementsByClassName("ABC");

aBag.className = "ABCD";
aBag.title = "A";
```

想要针对一个对象进行多步操作的时候，可以用一个变量把对象给提取出来。

```Js
let aBag = document.getElementsByClassName("ABC");
let oItem = aBag[1];

oItem.className = "ABCD";
oItem.title = "A";
```

获取==动态类数组==的方法:
- getElementsByClassName();
- getElementsByTagName();
- getElementsByName();

获取==静态类数组==的方法:
- querySelectAll();
 

## 2018-12-29 作用域
ES5:

var function

var和function定义的变量，作用域是往上离变量最近的函数。

script标签是最大的作用域，称之为全局作用域。

如果var或function在全局作用域里定义了变量的话，相当于给window添加了一个属性。例如：

```js
var b = 10;
console.log(window.b);
```

任意作用域里面，如果不加var直接产生了没有定义过的变量，这个变量就是全局变量。

```Js
function a(){
    b = 10;
}
a();
```
另：这种方法是==禁止==使用的。变量名一定要声明。

++面试题:++

```Js
function a(){
    var x = y= 9;
}
a();

console.log(x);//1
console.log(y);//2

```
1. 报错 x是一个局部比变量
2. 9  y是一个全局变量


## 2019-12-29 作用域链
作用域链
在某个作用域内操作变量时
1. ==自身有没有这个变量?==没有=> 2
2. 父级作用域，没有=> 3
3. 父级的父级，没有=> 4
4. 全局作用域，没有=> 5 & 6
5. 赋值。严格模式，报错。非严格模式，相当于给window增加了属性。
6. 取值。直接报错。

- 作用域不可逆。
- 兄弟之间没有关系。

## 2019-12-29 解析顺序
ES5:
```Js
alert(a);
var a = 9;
```
上面这个例子结果不报错，说明var定义变量的解析顺序。

一、定义步骤
1. 找出当前定义域里面所有的var和function定义的变量名（没有值）。
2. var的变量，初始值undefined。
3. function的函数，已经完整解析，可以直接调用。


二、执行步骤
从上到下执行。

Ps: 定义过程中，多个var声明重名，只留最后一个。

多个funtion重名，只留最后一个。

var和function重名，只留function。



练习
Q1:
```Js
var x = 5;
a();
function a(){
    alert(x);
    var x =10;
}
alert(x);
```
> 1. 弹出undefined
> 2. 弹出5

Q2:
```Js
alert(a);
var a = 10;
alert(a);
function a(){alert(20)};
alert(a);
var a = 30;
alert(a);
function a(){alert(40)};
alert(a);
```
> 1. function a(){alert(40)}
> 2. 10
> 3. 10
> 4. 30
> 5. 30

Q3:
```Js
var a = 10;
alert(a);
a();
function a(){
    alert(20);
}
```
> 1. 10
> 2. 报错

Q4:

```Js
a();
var a = function(){alert(1);};
a();
function a(){alert(2);}
a();
var a = function(){alert(3);};
a();
```
> 1. 2
> 2. 1
> 3. 1
> 4. 3

Q5:
```Js
var a = 10;
function fn(){
    alert(a);
    var a = 1;
    alert(a);
}
fn();
alert(a);
```
> 1. undefined
> 2. 1
> 3. 10

Q6:

```Js
var a = 10;
a();
function a(){
    alert(20);
}
a = 30;
alert(a);
```
> 1. 报错

## 2018-12-29 闭包
闭包的概念
> 一个使用了外部函数的参数或者变量的函数

开发的时候需要尽量避免全局变量。

当我们使用一个局部变量让他不回收的时候使用闭包。


闭包产生需要作用域的嵌套。

如下是一个闭包 ES6
```Js
for(let i=0;i<5;i++){
    aBtn[i].onclick = function(){
        alert(++i);
    };
}
```
> 1. 1
> 2. 2
> 3. 3
> 4. 4
> 5. 5

如下不是一个闭包 ES5
```Js
for(var i=0;i<5;i++){
    aBtn[i].onclick = function(){
        alert(++i);
    };
}
```
> 1. 5
> 2. 5
> 3. 5
> 4. 5
> 5. 5

为了产生闭包，就要有作用域的嵌套。同时内部函数需要引用外部函数的参数或者变量。

如下虽然有作用域的嵌套，但没有使用参数或者变量。
```Js
for(var i=0;i<5;i++){
    function a(){
        aBtn[i].onclick = function(){
        alert(++i);
        };
    }
    a();
}
```
> 1. 5
> 2. 5
> 3. 5
> 4. 5
> 5. 5

利用参数，使子函数使用了外部的变量。
```Js
for(var i=0;i<5;i++){
    function a(j){
        aBtn[j].onclick = function(){
        alert(++j);
        };
    }
    a(i);
}
```
> 1. 1
> 2. 2
> 3. 3
> 4. 4
> 5. 5

优化结构，不需要每次都定义函数。
```Js
function a(j){
    aBtn[j].onclick = function(){
        alert(++j);
    };
}
for(var i=0;i<5;i++){
    a(i);
}
```
> 1. 1
> 2. 2
> 3. 3
> 4. 4
> 5. 5

误区1

函数的自执行不属于闭包。闭包一定内部函数使用了外部函数的参数或变量。

```Js
(function(){
    var x = 9;
    alert(x);
})();
```

结合上题，人们通常加程序的自执行和闭包一起使用。
```Js
(for(var i=0;i<5;i++){
    function (j){
        aBtn[j].onclick = function(){
        alert(++j);
        };
    })(i);
}
```

练习1

```Js
fn()();
var a = 0;
function fn(){
    alert(a);
    var a = 3;
    function c(){
        alert(a);
    }
    return c;
}
```
> 1. undefined
> 2. 3

练习2

```Js
var a = 5;
function fn(){
    var a = 10;
    alert(a);
    function b(){
        a ++;
        alert(a);
    }
    return b;
}
var c = fn();
c();
fn()();
c();
```
> 1. 10
> 2. 11
> 3. 10
> 4. 11
> 5. 12

## 2018-12-29 ES6作用域
ES6 let const function class

let没有优先顺序，如下的代码是报错。

```Js
alert(a);
let a = 10;
```
只能先let再使用，let不会被提前解析。

暂时性死区

只要在当前作用域定义过let变量，就不允许提前使用。例子如下
```Js
let a = 20;
function b(){
    alert(a);
    let a = 30;
}
```

let的作用域是大括号 {   }。

const定义了不可被重新赋值的常量。

## 2019-01-03 Js练习
在尖括号例子中，三目的应用

原判断代码

```Js
for (let i=1;i<=num;i++){
    if (i<=mid){
        oWrap1.innerHTML += `<div style="margin-left:${(i-1)*50}px">${i}</div>`;
    }else{
        oWrap1.innerHTML += `<div style="margin-left:${(num-i)*50}px">${i}</div>`;
    } 
}

```
三目后

## 2019-01-04 call
函数可以借助call执行，call里的第一个实参代表了函数内部的this指向。

apply只能写两个数据，第二个以数组的形式传入

```Js
function a (x,y){
    console.log(x);
    console.log(y);
    console.log(this);
}
a(8,9);
a.call(document,8,9);
```

```Js
function a (x,y){
    console.log(x);
    console.log(y);
    console.log(this);
}
a(8,9);
a.apply(document,[8,9]);
```
结果都为
> 1. 8
> 2. 9
> 3. Window
> 4. 8
> 5. 9
> 6. #document

## 2019-01-04 bind
bind相当于返回了一个绑定了实参的和原函数一样的新函数。
```Js
function a (x,y){
    console.log(x);
    console.log(y);
    console.log(this);
}
a(8,9);
a.bind(10)(8,9);
```
> 1. 8
> 2. 9
> 3. Window
> 4. 8
> 5. 9
> 6. Number{10}

## 2019-01-07 H5新的API
- class.list 一个类数组
- add
- remove

用于js中很常见的display功能

```
aList[i].classList.add("show");
```

```
checked disabled
```
在Js里面以boolean值来体现的

## 2019-01-08 解构赋值
ES6定义变量的解构赋值

```Js
let [a,b,c,d,e] = [1,2,3,4,5];
console.log(a);
```
> 1 

```js
let {a:x,b:y} = {a:9,b:10};
console.log(x);
```
> 9

```js
let {x:x,y:y} = {a:9,b:10};
console.log(x);
```
> undefined

```js
let {x:x,y:y} = {y:9,x:10};
console.log(x);
```
> 10

```js
let {x,y} = {x:9,y:10};
console.log(x);
```
> 9

```js
let a = 9;
let b = 10;
let c = {
    a: a,
    b: b
};
console.log(c);
```
与

```js
let a = 9;
let b = 10;
let c = {
    a,
    b
};
console.log(c);
```
> {a: 9, b: 10}

严格来说，只要等号右边的数据有Iterator遍历器接口，都可以用来数组形式的解构。

常见的有接口的数据，Array String NodeList arguments 和新增的数据结构Map set

```js
function fn(data){
    let {a,b,c=100} = data;
    console.log(a,b,c);
}
fn({a:9,b:10});
```
> 9 10 100

```js
function f(){
    console.log("xx");
}
let [x=f()]=[];
```
> xx

```js
let [a, b = a] = [1]
console.log(a, b);
```
> 1 1

```
let [a = b, b] = [undefined, 1]
console.log(a, b);
```
> Uncaught ReferenceError: b is not defined

Tips:参数的也可以解构赋值，规则和上面一样。不同的是，参数可以设置整体的默认值，当没有参数传入时才启用。如
```js
function fn({x,y}={x:10,y:20}){
    console.log(x,y);
}


```

## 2019-01-08 string相关Api

- charAt(i)

取第i个字符

- charCodeAt();

查看ASCII码

- String.fromCharCode();

利用ASCII码取字符


关于ASCII码有趣的应用
```js
let a = "我爱你";
let b ="";

for (let i=0,len=a.length;i<len;i++){
    let code = a.charCodeAt(i) + 520;
    
    b += String.fromCharCode(code);
}
console.log(b);

```
> 搙琹全

- substring(start,end) 

截取一段字符，取值范围[start,end),若只填一个值，则取从start开始到最后的字符。没有顺序要求。

- str.slice(start,end) 

允许负值，倒数。但要符合顺序，如slice(-5，-2)

- str.toLocaleUpperCase();
- str.toLocaleLowerCase();

大小写的切换

- str.indexOf();

查找第一个出现的index,可以从定位的地方开始找，如str.indexOf("abc",10);

- str.split();

返回数组，按条件分割。  

## 2019-01-08 数组相关Api
- push

功能：直接改变原数组，从后面增加参数数据

返回值：返回改变后的数组长度

```js
let a = ["abc","def"];
console.log(a.push("g"));
console.log(a);
```
> 3
> ["abc", "def", "g"]

- pop

功能：直接改变原数组，从后面删除，不接受传参数

返回值：返回被删除的数据

```js
let b = [9,function(x){console.log(x)}];
b.pop()(b[0]);
```
> 9

- unshift

功能：直接改变原数组，从前面增加参数数据

返回值：返回改变后的数组长度

- shift

功能：直接改变原数组，从前面删除，不接受传参数

返回值：返回被删除的数据

- indexOf()

- slice()

- splice()

功能：直接改变原数组，从参数处开始，[)

返回值：返回被切除的数据

```js
let a = ["A","B","C"];
a.splice(1,1,"D");
console.log(a);

```
> ["A", "D", "C"]

splice 从第1个开始，开始切除1个，添加“D”

splice 是一个万能的数组操作

## 2019-01-09 排序
- sort();

功能:升序

返回值:就是改变后的值

```js
let a =[9,5,3,1,2]
a.sort();
console.log(a);
```
> [1, 2, 3, 5, 9]

- reverse()

功能:反序

返回值:就是改变后的值


```js
let a =[9,5,3,1,2];
a.reverse();
console.log(a);
```
> [2, 1, 3, 5, 9]

sort可以用函数判断，来进行排序，如升序或降序操作。


```js
let a = [9, 5, 3, 1, 2];
a.sort(function (a, b) {
    return a - b;
});
console.log(a);

```
> [1, 2, 3, 5, 9]


```js
let a = [9, 5, 3, 1, 2];
a.sort(function (a, b) {
    return b - a;
});
console.log(a);
```
> [9, 5, 3, 2, 1]


```js
let a = [
    {name:"刘一",age:18},
    {name:"陈二",age:28},
    {name:"张三",age:17},
    {name:"李四",age:24},
    {name:"王五",age:24},
    {name:"赵六",age:23},
];

a.sort(function(x,y){
    return x.age - y.age;
});
console.log(a);
```
> 0: {name: "张三", age: 17}
> 1: {name: "刘一", age: 18}
> 2: {name: "赵六", age: 23}
> 3: {name: "李四", age: 24}
> 4: {name: "王五", age: 24}
> 5: {name: "陈二", age: 28}

## 2019-01-09 Array()数组方法
- concat();

数组的拼接

```js
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);
```
> [1, 2, 3, 4, 5, 6]

- isArray();

返回布尔值，通常用在对类数组的判断

- join();

通常用来拼接存放字符串的数组，和split相反。

```js
let a = ["A", "B", "C"];
let b = a.join(" & ");
console.log(b);
```

## 2019-01-09 数组的遍历
- forEach()

参数：function()

功能：遍历

返回值：undefined

```js
let a = [1, 2, 3];
a.forEach(function (x, y, z) {
    console.log(x, y, z);
});
```
> 1 0 [1, 2, 3]
> 2 1 [1, 2, 3]
> 3 2 [1, 2, 3]

- 第一个形参：每一位的数据
- 第二个形参：每一位的序号
- 第三个形参：原数组

forEach的本质是for循环的一个遍历

```js
for (let i = 0; i < a.length; i++) {
    (function (x, y, z) {
        console.log(x, y, z);
    })(a[i], i, a);
}
```

- map();

和forEach功能一样，但有返回值。

返回值：是一个新数组，里面装的是每一次返回值。如果函数没有return，默认undefined

- filter();

返回值：是一个新数组，里面装的是每一次满足条件的返回值

```js
let a = [10, 20, 5, 25, 90];
let b = a.filter(function (x) {
    return x == 10;
});
console.log(a);
console.log(b);
```
> [10, 20, 5, 25, 90]
> 10

==Tips:以后在封装函数的时候，写注视要告诉别人两个值：param 和 return==


```js
/* 
* param:
* return:
*/
```

## 2019-01-09 ES6字符串拓展
- **模版字符串**

```js
let name = "Tony";
let age = 18;

let str = `${name} is a ${age} year old boy`;
console.log(str);

```
>Tony is a 18 year old boy

${}可以直接执行各种Js代码

- includes();
- startsWith();
- endWiths();

包含关系的检测

- repeat();

内容重复

- padStart();
- padEnd();

补全

## 2019-01-09 ES6数组操作扩展
- Array.from()
- Array.of()
- includes() 
- fill()
- find() findIndex()
- copyWithin()

## 2019-01-09 ... 扩展运算符

 
```js
let a = [1, 2, 3];
console.log(...a);
```
> 1 2 3

```js
let a = [1, 2, 3];
let b = [4,5,6];
// let c = a.concat(b);
let c = [...a,...b];
console.log(c);
```
> [1, 2, 3, 4, 5, 6]


```js
let [a, ...b] = [1, 2, 3, 4];
console.log(a);
console.log(b);
```
> 1
> [2, 3, 4]


```js
let aDiv = document.querySelectorAll("#wrap div");
console.log(aDiv);
```
>NodeList(3) [div, div, div]

此时aDiv是没有forEach方法的。

ES5解决方案：

```js
let aDiv = document.querySelectorAll("#wrap div");
let x = [].slice.call(aDiv);
console.log(x);
```
> [div, div, div]

原理是利用call的自执行，改变slice的this（类数组无法调用slice）

ES6解决方案：

```js
let aDiv = document.querySelectorAll("#wrap div");
console.log([...aDiv]);
[...aDiv].forEach(function(n,i){
    n.onclic = function(){
      alert( i );  
    };
});
```
> [div, div, div]

==rest 必须放在最后==

## 2019-01-09 数值操作
浏览器计算误差来源：

第一部分，存储正负，符号位

第二部分，存储小数点的位置


```js
console.log(Math.PI);
```
>3.141592653589793

圆周率

```js
console.log(Math.abs(-1));
```
>1

1. 传入的值是number，返回绝对值
2. 传入的不是number，现转化为number，若不能转换，返回NaN


```js
console.log(Math.pow(2,10));
```
> 1024


```js
console.log(Math.pow(256,.5));
```
> 16

```js
console.log(Math.floor(2.7));
console.log(Math.floor(-2.7));
```
> 2.7
> -3

向下取整


```js
console.log(Math.ceil(2.4));
console.log(Math.ceil(-2.4));
```
> 3
> -2


```js
console.log(Math.round(4.49));
console.log(Math.round(4.5));
```
> 4
> 5

```js
let x =10.45;
let a = (x+"").split(".")[0]-0;
console.log(a);

```
> 10

不用API取整，后面-0是为了从string变number

## 2019-01-09 querySelectorAll()的坑

[JavaScript基础教程之querySelectorAll( )方法遇到的问题](https://blog.csdn.net/tel13259437538/article/details/79049191)

Tip：Js改变背景图片的时候，如果会闪一下，可以提前加载背景图，或者用精灵图。

## 2019-01-10 三角函数
圆一周的角度是360deg,利用弧度制来传角度。

- Math.PI*2 = 360deg 

sin 正弦    对/斜

cos 余弦    邻/斜

tan 正切    对/邻

```js
console.log(Math.sin(Math.PI / 6));
console.log(Math.cos(Math.PI / 3));
console.log(Math.tan(Math.PI / 4));
```
> 0.49999999999999994
> 0.5000000000000001
> 0.9999999999999999

```js
console.log(Math.asin(0.5));
console.log(Math.PI / 6);
```
> 0.5235987755982989
> 0.5235987755982988

## 2019-01-10 随机数
- Math.random()

返回一个大于0小于1的数。

```js
const rdm = function (n=0,m=n+1) {
    return Math.floor((m-n)*Math.random()+n);
}
console.log(rdm(5,10));
```
> 5-9中任意一个整数

- parseInt()

将字符串转为整数

如果字符串的第一个字符不能转化为数字（后面跟着数字的正负号除外），返回NaN

- parseInt(a,b)

进制转换

## 2019-01-11 对象的遍历
```js
let a = {
    id: "1",
    name: "samari",
    age: "24",
    sex: "male"
};

for (let key in a) {
    console.log(key, ":", a[key]);

}
```
>  id : 1<br>
>  name : samari<br>
>  age : 24<br>
>  sex : male<br>

## 2019-01-11 对属性的象增、删、改、查
```js
let a = {
    id: "1",
    name: "samari",
    age: "24",
    sex: "male"
};
//新增
a.nationality = "Chinese";
//改变
a.age = "20";
//删除
delete a.sex;
//是否存在
let b = "age" in a;

console.log(a);
console.log(b);
```
> id: "1"<br>
> name: "samari"<br>
> age: "24"<br>
> a.nationality = "Chinese"<br>
> 
> true

## 2019-01-11 序列化 和 反序列化
Json是一个格式非常标准的长得像对象的字符串

- 反序列化
```js
let a = {
    id: "1",
    name: "samari",
    age: "24",
    sex: "male"
};
let b = JSON.stringify(a);
console.log(b);
```
> {"id":"1","name":"samari","age":"24","sex":"male"}

- 序列化

```js
let c = JSON.parse(b);
console.log(c);
```
> {id: "1", name: "samari", age: "24", sex: "male"}

## 2019-01-11 ES6函数箭头函数

```js
var fn = function (a, b) {
    return a + b;
}

let fn = (a, b) => a + b;
```

## 2019-01-11 定时器

- setTimeout（）；

param1:函数
param2:数字（毫秒单位）

一次性的。

- setInterval（）；

持续施法。

- 定时器的传参

```js
function fn(a, b) {
    console.log(a + b);
}
setInterval(fn, 1000, 2, 3);
```

- clearTimeout（）；

清除定时器

定时器的返回值根据在浏览器内出现的顺序从1开始返回。

Tips：定时器就算设置0ms执行，也会在最后执行。


## 2019-01-11 不兼容时如何伪装
- requestAnimationFrame()

作用和setTimeout一样，css3的底层。

如果需要用到这个，不如直接使用css3。 

如果不兼容，可以==伪装==。


```js
//初级伪装
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
        let timer = setTimeout(fn, 16);
        return timer;
    };

    window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}

//伪装的高级写法
window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
    return setTimeout(fn, 1000 / 60);
};
window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
```

## 2019-01-15 日期对象

```js
let a = new Date();
console.log(a);

console.log(a.getFullYear());
console.log(a.getMonth() + 1);
console.log(a.getDate());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());

console.log("##################################");

console.log(a.toUTCString());

let b = new Date().getTime();

console.log(new Date(b - 3600000));
```

## 2019-01-16 运动框架（封装）

```Js
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
            requestAnimationFrame(f);
        }
        requestAnimationFrame(f);
    };

})();
```
## 2019-01-17 DOM文档对象模型
操作HTML的规则，是Js与HTML之前的桥梁

DOM树

节点类型  | nodeType    | nodeName | nodeValue
---|---|---|---
元素节点|	1|	标签名（大写）|	null
属性节点|	2|  属性名        |	属性值
文本节点|	3|	#text          |文本内容
CDTAT节点|	4|	#cdata-section|	CDATA区域的内容
实体引用名称节点|	5|	引用名称|	null
实体名称节点|	6|	实体名称|	null
处理指令节点|	7|	target|	entire content cluding the target
注释节点|	8|	#comment|	注释内容
文档节点|	9|	#document|	null
文档类型节点|	10|	doctype的名称|	null
文档片段节点|	11|	#document-fragment|	null
DTD声明节点|	12|	符号名称|	null

## 2019-01-18 DOM API
- children();

因为childNodes解析空格，并且我们平时操作的都是元素节点，所以利用.children();

==Tips: Inner会修改文本，尽量不要使用。==


```js
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
```

## 2019-01-18 节点操作
```js
//克隆
let ele1 = document.getElementById("wrap1");
let ele2 = document.getElementById("wrap2");
//true表示会把里面的文本内容也克隆（警惕ID的重复）
let clone = ele1.cloneNode(true);

ele2.appendChild(clone);
```
## 2019-01-21 宽高API

```js
//获取页面显示区的宽高，IE8及一下不兼容
console.log(window.innerWidth);
console.log(window.innerHeight);

//IE兼容
//width + padding
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

//width + padding + border
console.log(document.documentElement.offsetWidth);
console.log(document.documentElement.offsetHeight);

//有超出部分时
console.log(document.documentElement.scrollWidth);
console.log(document.documentElement.scrollHeight);
```

其他一些API
```js
//获取元素到文档的距离
function getOffset(ele) {
    let dis = {top: 0, left: 0};
    while (ele === document.body){
        dis.top += ele.offsetTop;
        dis.left += ele.offsetLeft;
        ele = ele.offsetParent;
    }
}
```
Tips:以上的都是==不可以==被赋值的。


获取页面的滚动高

```js
//获取页面的滚动高
console.log(document.documentElement.scrollTop || document.body.scrollTop);
```
元素方法

```js
//返回值是一个对象，包含top,left,right,bottom
a.getBoundingClientRect();

//把元素直接移动到可视区 true顶部对齐 false底部对齐
a.scrollIntoView();
```

## 2019-01-21 event事件对象
事件函数执行时，第一个形参，就是事件对象。

存储着和该次事件相关的一些信息。

- clientX/clientY 

事件触发时，鼠标距离可视区的位置

- pageX/pageY

鼠标距离文档的位置

## 2019-01-21 BOM
- window对象属性

- history
1. go
2. forward
3. back

- navigator
userAgent：伪装成别的浏览器

## 2019-01-21 事件冒泡

子元素的事件触发，会带着父元素的事件一同触发，并且和布局没有任何关系。

```html
 <div id="box1">
            <div id="box2">
                <div id="box3">
                    
                </div>
            </div>
        </div>
```
```js
box1.onclick = function() {
    console.log(1);
}

box2.onclick = function() {
    console.log(2);
}

box3.onclick = function() {
    console.log(3);
}
```
>3 2 1

如何拦截冒泡

事件的触发都有各自的event

```js
box3.onclick = function(e) {
    e.stopPropagation();
    console.log(3);
}
```
```js
//兼容IE
event = event || window.event;
//组织冒泡
if(event.stopPropagation){
    event.stopPropagation();
}else{
    event.cancelBubble = true;
}
```

## 2019-01-21 事件监听

```js
//DOM 0级事件，弊端是会被覆盖
box.onclick = function () {
    console.log("1");
};

box.onclick = function () {
    console.log("2");
};
```

- ele.addEventListener(事件类型，回调方法，捕获|冒泡)
```js
//DOM 2级事件监听
box3.addEventListener("click",function(event){
console.log("31");
});
//尽量用DOM 2级做监听
```

主流浏览器才有的事件捕获机制：
- 事件冒泡：儿子到父亲
- 事件捕获：父亲到儿子

捕获相当于拦截

事件的清除

```js
//监听事件的清除
let callback = function () {
    console.log("1");
};
box.addEventListener("click", callback);

document.ondblclick = function () {
    box.removeEventListener("click".callback);
};
```
tips:监听事件传什么参数，取消也要传

## 2019-01-22 事件的默认行为
鼠标右键事件的取消：
```js
// DOM 0级在时间里直接return false
document.oncontextmenu = function(){
    return false;
};
// DOM 0级要少用
```
```js
// DOM 2级
// 主流浏览器
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
// IE
document.attachEvent("contextmenu", function (event) {
    event = enent || window.event;
    event.returnValue = false;
});
```
利用preventDefault()来阻止事件的默认行为。

## 2019-01-22 滚轮事件
谷歌及IE

mousewheel 

event.wheelDelta
-120 下滚
120 上滚

火狐滚动事件

DOMMouseScroll只能通过二级事件监听

event.detail
3下滚
-3上滚

## 2019-01-23 事件的兼容封装

```js
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
```

## 2019-01-22 表单事件

```js
/* 
onfocus 获得焦点
onblur  失去焦点
按Tab能选中的，就可以获得焦点。
特例:a,document,window
*/
//非常有意思的焦点事件应用
window.onfocus = function () {
    document.title = "Samari's Blog";
};
window.onblur = function () {
    document.title = "Jesus! Too many BUGs!!";
};
```

```js
//用来停止定时器（定时器在焦点不在当前页面的时候会变慢）
let num = 0;
let timer = null;
function m(){
    document.title = ++num;
    timer = setTimeout(m,50);
}
timer = setTimeout(m,50);

window.onblur = function(){
    clearTimeout(timer);
};
window.onfocus = function(){
    clearTimeout(timer);
    m();
};
```
- focus()
- blur()

## 2019-01-23 键盘事件

```js
/* 
按下：keydown keypress
down在press前触发
down事件响应所有按键
press只响应能键入值相关的键

抬起：keyup
*/

document.onkeydown = function(){};

document.onkeypress = function () {};

document.onkeyup = function(){};

//阻止键盘事件
if(e.keyCode === xxx){
 return false;   
}
```

## 2019-01-24 正则表达式
传统方法提取字符串里的数字

```js
let a = "123abc456def789";

function fn(str) {
    let len = str.length;
    let s = "";
    let arr = [];
    for (let i = 0; i < len; i++) {
        let n = str.charAt(i);
        if (!isNaN(n)) {
            s += n;
        } else {
            s && arr.push(s);
            s = "";
        }
    }
    s && arr.push(s);
    return arr;
}

fn(a);
console.log(fn(a));
```
> ["123", "456", "789"]

使用正则表达式

```js
let a = "123abc456def789";

function fn(str) {
    return str.match(/\d+/g);
}
console.log(fn(a));
```
> ["123", "456", "789"]

正则表达式的写法

第一种

这种方法是没有办法用变量来定义正则表达式的

```js
let a = /abc/;
```

第二种

```js
let  a = new RegExp("abc");
```

学习正则表达式的准备工作,test api

.test() 

正则.test（字符串）

匹配成功返回true,否则返回false

## 2019-01-24 转义符号

```js
/* 
转义符号
\ /
*/

//转义符号讲有特殊意义的符号变成没有特殊意义
let a = /\//;

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

```

## 2019-01-24 修饰符

```js
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

let a = /abc/igm;

```

## 2019-01-24 量词 & 子项 

```js
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
let a = /\d{11}/g;
let b = /\d{2,4}/;
```

```js
/* 
子项（）
如果只想拿到里面的一部分，可以利用子项去取值
*/
let a =/(ab)+/;
let b = /Samari:(\d{11})/; //取第一个子项就是手机号，而不会出现名字
```



## 2019-01-25 字符集 & 起始/结束 & . & $1 & 捕获组
```js
/* 
字符集[] 规则 => unicode ASCII码
很多特殊字符在字符集里面没有特殊意义
*/
let a = /Dear(Samari|Henry|Liz)/;

let b = /[1-7]/;
let c = /1|2|3|4|5|6|7/;

let d = /[1-7]{5}/;
let e = /(1|2|3|4|5|6|7){5}/;

let f = /[^abc]/g; // "^" 表示除了，只能写在开头
```

```js
/* 
^ $
^起始位置
$结束位置
*/

let a = /^abc/;

let b = /a^bc/; //这是一个逻辑错误的正则表达式

let c = /(a|^)bc/;

```

```js
/* 
. 匹配任意字符 除了换行等之外
[.]没有特殊意义
*/

let a = /./g;

```

```js
//存储了最近的1-9次正则表达式的子项
RegExp.$1;

//捕获组 \1把之前的第一个子项重复一次
let a =/(\d(\d))\1\2/;
```

## 2019-01-25 常用正则

```js
let reg = {
    //qq:最少5位，最大10位,只能是数字，第一位不是0
    qq: /^[1-9]\d{4,9}$/,
    //用户名：6～18，数字、字母、下划线。必须要字母开头
    user:/^[a-zA-Z]\w{5,17}$/i,
    //密码：6～18，数字字母下划线，所有符号
    pwd: /^[\w\-\]<>,.?/+*=)([{}:;"'&^%$#@!`~|\\/]{6,18}$/,
    //手机号
    tel:/^1[3-9]\d{9}$/,
    //邮箱
    mail: /^[a-z1-9]\w{0,17}@[0-9a-z]{2,}(\.[a-z]{2,4}){1,2}$/i,
    //身份证
    IDCard: /^[1-9]\d{5}(18|19|20)\d{2}((0[13578]|1[02])(0[1-9]|[12][0-9])|3[01])|((0[469]|11)(0[1-9]|[12][0-9])|30)|(02)(0[1-9]|[12][0-9])\d{3}[0-9x]$/,
};

```

## 2019-01-25 断言

```js
/* 
断言
?= 匹配包括括号内的内容但是结果不包含
？| 匹配不包括括号内的内容但是结果不包含
括号里的东西不属于子项
*/
let a = /Window(?=XP)/;
let b = "Windos";
```
## 2019-01-28 cookie

```js
/* 
如果不给cookie设置过期时间，那么浏览器关闭之后，cookie就清除了

在存储本地cookie的时候，一定会设置一个过期时间
    expires=日期对象.toUTCString()

麻烦点:  1.获取
        2.设置时间
        3.删除
*/
let date = new Date(2019, 11, 31, 23, 59, 59);
//存储cookie
document.cookie = "user = Samari;expires=" + date.toUTCString;
//获取cookie
document.cookie;

//7天之后过期
let date = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
```

## 2019-01-29 Ajax
异步的Javascript 和 xml

同步=>一心一意

异步=>三心二意


功能：

无刷新页面的情况下，实现与后台的数据交互，同时在页面进行更新。

跨域：

不允许跨域请求资源
（安全问题）

和后端语言进行数据交互，需要在电脑上安装，集成环境（本地服务器）

一台电脑，最好只安装一台本地服务器（否则会出现端口冲突问题）

Windows推荐：
    
    xampp
    
1. xampp安装到D盘根目录
2. 进入xampp文件夹，xampp-control.exe启动服务器
3.先把htdocs目录里的文件都删除掉，只留一个图标就可，然后就可以吧你的html项目复制到此目录下。
4. 通过127.0.0.1（本地服务器域名）访问


```js
//创建Ajax对象
const ajax = new XMLHttpRequest();
//监听状态的改变
/* 
*   0-4
        0 初始状态 ajax对象已经被创建
        1 open()方法 已调用
        2 send()方法 已调用
        3 所有的相应 已经收到
        4 http 相应已经完全接受
*/
ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.readyState === 200) {
        //前端 就能接收到数据了，想干嘛就干嘛
        console.log(ajax.response);
        //把对应的数据 转换对应的数据类型
        console.log(JSON.parse(ajax.response));
    }
};
//本地测试
ajax.open('get', '/data.php', true); //通过什么样的方式，向什么样的后端服务器，发送什么样的请求,true异步

//真实服务器（虚拟主机）环境 数据先行 数据驱动视图
//ajax.open('post','http://www.alibaba.com/48/data.php',true);

ajax.send(); //执行请求命令
```

## 2019-01-29 jsonp跨域

```js
//jsonp 一种跨域问题的解决方案

//H5 17期实战
function getData(data) {
    console.log(data);
}

//核心本质 就是后端服务器 返回一个函数调用
//getData("js")
createJsonp();

function createJsonp() {
    const s = document.createElement("script");
    s.src = 'http://www.tanzhouweb.com/48/jsonp.php?callback=getData';
    document.body.appendChild(s);
}
```

[相关笔记在GitHub中可以找到代码注释](https://github.com/Gloryoftan/Learn-Front-End/tree/master/Js/2019-01-29/初探Ajax)


## 2019-01-29 Node
1. 运行Node 需要先安装 去英文官网下载安装
2. 测试是否安装成功
3. $node -v
4. $npm -v

## 2019-01-30 面向对象 & new
    
```js
/* 
OOP的三大特点
封装 继承 多态
*/
```
- 封装性
```js
/* 
New

new Date();
new Image();
new XMLHttpRequest();
new RegExp();

new 关键词 后面紧跟一个函数
区别： 
    1. 函数的this指向问题：函数内部生成一个全新的对象，函数的this指向这个对象
    2. 函数默认返回上述对象

Tips：这些函数首字母需要大写（作为区分）
构造函数/类（js没有类）
*/
```
## 2019-01-31 原型 & 原型链

```js
/* 
原型
它是构造函数的一个属性，是一个object数据类型

构造函数.prototype

所有构造函数都有一个相等的__proto__
*/
```
原型链

```js
/* 
原型链

当访问对象属性的时候，先在自身的属性里找，原型找不到去原型的原型里找，直到object.prototype为止
*/

/* 
私有属性写在构造函数里面
公共属性写在原型里
*/

//先有原型，再有实例
function Teacher(n, a, i) {
    this.name = n;
    this.age = a;
    this.id = i;
}
// Teacher.prototype.showID = function () {
//     alert(this.id);
// };
Teacher.prototype = {
    constructor: Teacher,
    showID: function () {
        alert(this.id);
    },
    showName: function () {
        alert(this.name);
    },
    showAge: function () {
        alert(this.age);
    }
};
var samari = new Teacher("samari", 24, 1234);
samari.showID();
```
## 2019-01-31 继承

```js
/* 
继承

*/
function A(n, a) {
    this.name = n;
    this.age = a;
}
A.prototype.getName = function () {
    return this.name;
};

//B原型需要新增属性
function B(n, a, i) {
    //继承原来的私有属性
    A.call(this, n, a);
    //新增私有属性
    this.id = i;
}
//继承原型
//错误写法：
// B.prototype = A.prototype;
// B.prototype.xx = 10;
//上述写法因为prototype的地址一样，儿子的修改会影响父亲

//防止 new A();的传参问题
function Fn() {
    Fn.prototype = A.prototype;
}
B.prototype = new Fn();
//新增原型
B.prototype.constructor = B;
B.prototype.xx = 10;
```

## 2019-01-31 对象的拷贝

```js
function clone(obj){
    var o ={};
    for(var key in obj){
        o[key] = obj[key];
    }
    return o;
}

var a ={
    x:10,
    b:20,
    k:{
        a:1
    }
};

var b = clone(a);
b.k.b = 2;
```
这样拷贝的问题在于，b.k.b的调用，k.b的引用是一样的。

递归：

递是一层层往下，归是一层层往上。

```js
//递归
var b = clone(a);
b.k.b = 2;

function fn(num){
    if(num ===1){
        return 1;
    }
    return num*fn(num-1);
}
```

深拷贝

```js
function deepClone(obj) {
    var o = {};
    for (var key in obj) {

        if (obj[key] === "object") {
            o[key] = deepClone(obj[key]);
        } else {
            o[key] = obj[key];
        }
    }
    return o;
}
```
利用JSON转，但有局限性：对象里包含函数

```js
var b = JSON.parse(JSON.stringify(a));
```























































