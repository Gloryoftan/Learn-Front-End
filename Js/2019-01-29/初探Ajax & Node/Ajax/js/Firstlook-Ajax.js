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