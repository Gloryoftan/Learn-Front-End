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