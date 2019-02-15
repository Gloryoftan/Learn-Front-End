[toc]
## 2019-02-01 jQuery

[CDN学习笔记一（CDN是什么？）](https://www.cnblogs.com/tinywan/p/6067126.html)

[BootCDN](https://www.bootcdn.cn)

[jQuery API 3.3.1](http://jquery.cuishifeng.cn)

兼容性

```js
/* 
兼容IE678:
1.x.x

不兼容IE678:
2.x.x
3.x.x
*/

```

其他框架占用$符时的解决方案
```js
(function($){
    console.log($);
})(jQuery);
```
传入的参数类型和相互转化

```js
/* 
参数：
    函数 -- 当dom节点加载完成之后，再执行这个函数的代码
    选择器字符串 -- 返回对应的jQ对象
    节点对象/节点集合 -- 返回对应的jQ对象


jQ对象 js对象/DOM对象
分别只能使用自身的API
jQ -> JS [0] / .get(0)
JS -> jQ $(JS对象)
*/
```
因为jQuery相当于一个构造函数，每一次$都相当于new了一个实例，而两次$出的实例是不想等的。为了提高效率，代码可以有如下两种方式：

```js
//1
let $p = $("#wrap p");

$p.html("jQueryTest");
$p.css("color", "red");
//2
$("#wrap p")
    .html("jQueryTest")
    .css("color", "red");
```

## 2019-02-01 jQuery 核心内容

```js
//核心内容
//eq拿单个
$p.eq(1).css("color", "red");
//index
$p.index(); //加参数，是元素。不加参数，默认在父级里的index
//each
$p.each(function(i){
    console.log(this);//this指向js对象（箭头函数没有this）
    $(this).css("color", "red");
});
```

## 2019-02-02 jQuery 其他
```js
//jQ里的Ajax
$.ajax({
    type: "GET",
    url: "DATA.txt",
    // crossOrigin: null,
    data: {},
    dataType: "JSON",
    success: function (msg) {
        console.log(msg);
    },
    error: function () {

    }
});

//Ajax的简写方式
$.get("DATA.txt", function (msg) {
    console.log(msg);
});

$.post("DATA.txt", {}, function (msg) {

});

//设置属性 返回jQ对象
$("#wrap").attr("attr", "value");

$("#wrap").attr({
    "attr1": "value1",
    "attr2": "value2"
});

//获取属性
$("#wrap").attr("id");

//移除属性
$("wrap").removeAttr("id");

//prop操作合法属性,操作js里表示真假值的时候可以使用
$("input").prop("checked");
```

```js
/* classList
add
remove
toggle
contains
*/
let $wrap = $("#wrap");

$wrap.addClass("attr1 attr2");

$wrap.removeClass("attr2");
$wrap.toggleClass("attr3 attr4");

$wrap.hasClass("attr1"); //返回bool

/* 
.html
,text
.value
*/

$("#wrap").html(); //获取
$("#wrap").html("ABC");

// jQ里的 +=
$("#wrap").html($("#wrap").html() + 1);

/* css */
$("#wrap").css({
    color: "red",
    fontWeight: "bolder",
    fontSize: "16px"
});

//获取css
$("#wrap").offset(); //自身到浏览器的距离，自身
$("#wrap").position(); //元素距离父级的距离，从margin的边缘开始算。

$("#wrap").offset({
    top: 50,
    left: 50
});

$("#wrap").offset().left;

//scroll属性
$("html").scrollTop() || $("body").scrollTop();

$(document).click(function () {
    $("html").scrollTop(450);
}); //放在点击事件里的原因是因为防止页面加载未完成就先执行

//获取值的区别
$("#wrap").width(); //值
$("#wrap").css("width"); //带px的字符串

$("#wrap").innerWidth();
$("#wrap").outerWidth(includeMargin);

/* 文档处理 */
/* 
appendChild
*/

$("wrap").append("ABC");
$("wrap").append("<b>ABC</b>");

let a = document.createElement("b");
$("wrap").append(a);

$("wrap").append($("wrap1"));

//创建对象
let $b = $("<b class='className' id ='id'>ABC</b>");

//一些节点操作
let $dom = $(
    `<b>ABC</b>
    <div id="box">ABC</div>
    <a></a>`
);
$dom.eq(0).css("color", "red");
$dom.eq(2).html("This is a Div label");
$("wrap").append($dom);
```

## 2019-02-13  jQuery 其他

```js
appendTo 添加了兄弟
appenAfter 添加了子元素

empth = innerHtml =  "";

remove = 自杀;

filter();
has();
not();
查找返回是所有子项，结合通配选择符
find();
next();
nextAll();

parent();父辈
parents();父辈们
```

## 2019-02-14 jQuery 事件


```js
$(function () {}); //ready

$("#wrap").on("click.func1", function () {

});

$("#wrap").on("click.func1", function () {

});

$("#wrap").off("click.func1");

//事件委托
$("#wrap").on("click", "p", function () {

});

//enter before
$("#wrap").hover(function () {

});
```

## 2019-02-14 jQuery 动画

```js
//show hide
$("#wrap").hide();
$("#wrap").hide(3000);
$("#wrap").show();
$("#wrap").stop().animate({
    width: 500,
}, 2000);
$("wrap").queue(function(){
    $(this).css("background-color","red");

    $(this).dequeue();
});
$("#wrap").delay(500).animate({
    height: 500,
}, 2000);
```










