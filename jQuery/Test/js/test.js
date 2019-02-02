/* 
兼容IE678:
1.x.x

不兼容IE678:
2.x.x
3.x.x
*/

// (function($){
//     console.log($);
// })(jQuery);

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
// //1
// let $p = $("#wrap p");

// $p.html("jQueryTest");
// $p.css("color", "red");
// //2
// $("#wrap p")
//     .html("jQueryTest")
//     .css("color", "red");

// //核心内容
// //eq拿单个
// $p.eq(1).css("color", "red");
// //index
// $p.index(); //加参数，是元素。不加参数，默认在父级里的index
// //each
// $p.each(function(i){
//     console.log(this);//this指向js对象（箭头函数没有this）
//     $(this).css("color", "red");
// });

// //jQ里的Ajax
// $.ajax({
//     type: "GET",
//     url: "DATA.txt",
//     // crossOrigin: null,
//     data: {},
//     dataType: "JSON",
//     success: function (msg) {
//         console.log(msg);
//     },
//     error: function () {

//     }
// });
// //Ajax的简写方式
// $.get("DATA.txt", function (msg) {
//     console.log(msg);
// });

// $.post("DATA.txt", {}, function (msg) {

// });

// //设置属性 返回jQ对象
// $("#wrap").attr("attr", "value");

// $("#wrap").attr({
//     "attr1": "value1",
//     "attr2": "value2"
// });

// //获取属性
// $("#wrap").attr("id");

// //移除属性
// $("wrap").removeAttr("id");

// //prop操作合法属性,操作js里表示真假值的时候可以使用
// $("input").prop("checked");



// /* classList
// add
// remove
// toggle
// contains
// */
// let $wrap = $("#wrap");

// $wrap.addClass("attr1 attr2");

// $wrap.removeClass("attr2");
// $wrap.toggleClass("attr3 attr4");

// $wrap.hasClass("attr1"); //返回bool

// /* 
// .html
// ,text
// .value
// */

// $("#wrap").html(); //获取
// $("#wrap").html("ABC");

// // jQ里的 +=
// $("#wrap").html($("#wrap").html() + 1);

// /* css */
// $("#wrap").css({
//     color: "red",
//     fontWeight: "bolder",
//     fontSize: "16px"
// });

// //获取css
// $("#wrap").offset(); //自身到浏览器的距离，自身
// $("#wrap").position(); //元素距离父级的距离，从margin的边缘开始算。

// $("#wrap").offset({
//     top: 50,
//     left: 50
// });

// $("#wrap").offset().left;

// //scroll属性
// $("html").scrollTop() || $("body").scrollTop();

// $(document).click(function () {
//     $("html").scrollTop(450);
// }); //放在点击事件里的原因是因为防止页面加载未完成就先执行

// //获取值的区别
// $("#wrap").width(); //值
// $("#wrap").css("width"); //带px的字符串

// $("#wrap").innerWidth();
// $("#wrap").outerWidth(includeMargin);

// /* 文档处理 */
// /* 
// appendChild
// */

// $("wrap").append("ABC");
// $("wrap").append("<b>ABC</b>");

// let a = document.createElement("b");
// $("wrap").append(a);

// $("wrap").append($("wrap1"));

// //创建对象
// let $b = $("<b class='className' id ='id'>ABC</b>");

// //一些节点操作
// let $dom = $(
//     `<b>ABC</b>
//     <div id="box">ABC</div>
//     <a></a>`
// );
// $dom.eq(0).css("color", "red");
// $dom.eq(2).html("This is a Div label");
// $("wrap").append($dom);

//appendTo 添加了兄弟
//appenAfter 添加了子元素

//empth = innerHtml =  "";

//remove = 自杀;

//filter();
//has();




