//如果不是全局就得引入fs成员
const fs = require("fs");
const JavaScriptObfuscator = require('javascript-obfuscator');
const path = require("path");

let reservedNamesArray = [];

//读取方法名
fs.readFile("reserve.txt", {
    flag: 'r+',
    encoding: 'utf8'
}, function (error, data) {

    if (error) {
        console.error(error);
        return;
    }
    reservedNamesArray = data.split("\n");
});


//fs  核心模块中提供了一个  fs.readFile方法,来读取指定目录下的文件
//fs.resdFile 三个参数

// 1,读取文件的路径
// 2,读取文件的编码格式
// 3,当文件读取完成,调用这个callback回调函数来读取文件的结果
//第一个参数文error对象   第二个参数 才是读取成功的结果
// fs.readFile('./http/111.txt','utf-8',function(error,data){
// console.log(error);  //如果err为null就说明读取成功了,没有出错
// console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
// });

var pathName = "./file";
fs.readdir(pathName, function (err, files) {
    var dirs = [];
    (function iterator(i) {
        if (i == files.length) {
            console.log(dirs);
            return;
        }

        fs.stat(path.join(pathName, files[i]), function (err, data) {
            if (data.isFile()) {
                dirs.push(files[i]);
            }

            //逐个扰乱
            fs.readFile("./file/" + dirs[i], "utf-8", function (error, data) {
                // console.log(error);  //如果err为null就说明读取成功了,没有出错
                // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出

                //  用error来判断文件是否读取成功
                if (error) return console.log("读取文件失败,内容是" + error.message);
                // console.log("读取文件成功,内容是" + data);
                console.log("读取文件成功");
                var obfuscationResult = JavaScriptObfuscator.obfuscate(
                    `${data}`, {
                        compact: false,
                        controlFlowFlattening: true,
                        reservedNames: [
                            '^variable',
                            '^variable2',
                            'reservedNames2'
                        ],
                        renameGlobals: false,

                    }
                );
                let res = obfuscationResult.getObfuscatedCode();
                // console.log("扰乱成功,扰乱结果是" + obfuscationResult.getObfuscatedCode());
                console.log("扰乱成功");

                fs.writeFile("./result/" + dirs[i], res, function (error) {
                    // console.log('文件写入成功')
                    // console.log(error)
                    if (error) {
                        console.log('写入失败')
                    } else {
                        console.log('写入成功')
                    }
                })

            });

            iterator(i + 1);
        });
    })(0);

});