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