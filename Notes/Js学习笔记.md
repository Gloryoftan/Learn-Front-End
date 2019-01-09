[toc]
# Js学习笔记
## 2018-12-20 git & github

[廖雪峰Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

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


```js
let a = [1, 2, 3];
a.forEach(function () {
    console.log(a);
});
```
> Array(3)
> Array(3)
> Array(3)

Tips:

以后在封装函数的时候，写注视要告诉别人两个值：
param 和 return


```js
/* 
* param:
* return:
*/
```





















