let funArray = {
    //十六进制颜色转rgb（带透明度）
    _hex2Rgb: function (hex) {
        var rgb = []; // 定义rgb数组
        if (/^\#[0-9A-F]{3}$/i.test(hex)) { //判断传入是否为#三位十六进制数
            let sixHex = '#';
            hex.replace(/[0-9A-F]/ig, function (kw) {
                sixHex += kw + kw; //把三位16进制数转化为六位
            });
            hex = sixHex; //保存回hex
        }
        if (/^#[0-9A-F]{6}$/i.test(hex)) { //判断传入是否为#六位十六进制数
            hex.replace(/[0-9A-F]{2}/ig, function (kw) {
                rgb.push(eval('0x' + kw)); //十六进制转化为十进制并存如数组
            });
            return `rgb(${rgb.join(',')},${this.bgTransparency})`; //输出RGB格式颜色
        } else {
            // console.log(`Input ${hex} is wrong!`);
            return 'rgb(0,0,0)'; //默认颜色
        }
    },
    //随机生成十六进制颜色
    _randomHexColor: function () {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    },
};