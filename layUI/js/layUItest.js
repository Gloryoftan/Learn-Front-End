//全局配置
layui.config({
    base: '../lib/js/modules/', //你存放新模块的目录，注意，不是layui的模块目录
    version: false, //一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
    debug: false, //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
});

//加载模块
layui.use(['layer', 'form', 'element', 'index'], function () {
    var form = layui.form; //获取form模块
    var element = layui.element; //获取element模块
    var layer = layui.element; //获取layer模块
    var index = layui.index; //获取index模块

    console.log(index);
    console.log(form);


});