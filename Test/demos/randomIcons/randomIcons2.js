/* para:
 *bgColor 背景色
 *shadowColor 阴影颜色
 *iconColor 图标颜色

 *bgSize 背景大小
 *iconSize icon大小

 *shadowAngle 阴影角度
 *shadowDepth 阴影深度
 *bgRadius 背景圆角

 *bgTransparency 背景透明度
 *shadowTransparency 阴影透明度
 *iconTransparency 图标透明度

 *posX
 *posY

 *selectedIcon 图标

 *randomIcons 是否随机图标
 *randomBgColor 是否随机背景颜色
 *randomGradientBgColor 是否随机渐变背景色

 *iconsSet 随机图标库
 */
function Icons(option) {
    this._init(option);
}

Icons.prototype = {
    _init: function (option) {
        this.iconsArr = option.iconsSet || [];
        this.bgSize = option.bgSize || 140;
        this.iconSize = option.iconSize || 80;
        this.shadowAngle = option.shadowAngle || 45;
        this.shadowDepth = option.shadowDepth || 6;
        this.bgRadius = option.bgRadius || 20;
        this.bgTransparency = option.bgTransparency || 1;
        this.shadowTransparency = option.shadowTransparency || 1;
        this.iconTransparency = option.iconTransparency || 1;
        this.bgColor = option.randomBgColor ? this._hex2Rgb(this.randomHexColor()) : this._hex2Rgb(option.bgColor);
        this.bgColor = option.randomGradientBgColor ? this._randomGradientBgColor() : this.bgColor;
        this.shadowColor = this._hex2Rgb(option.shadowColor);
        this.iconColor = this._hex2Rgb(option.iconColor);
        // this.posX = option.posX === 0 ? : option.posX || 0;
        // this.posY = option.posY === 0 ? : option.posX || 0;
        this.selectedIcon = option.randomIcons ? '<i class="' + this.randomIcons() + '"></i>' : '<i class="' + option.selectedIcon + '"></i>';

        //阴影
        var x = 1.5 * Math.cos(option.shadowAngle * Math.PI / 180);
        var y = 1.5 * Math.sin(option.shadowAngle * Math.PI / 180);
        var num_x = x / 2;
        var num_y = y / 2;
        var shadowSet = "";
        for (var i = 1; i <= (option.shadowDepth * 2); i++) {
            shadowSet += ' ' + x + 'px ' + y + 'px ' + 0 + ' ' + option.shadowColor + ',';
            x += num_x;
            y += num_y;
        }
        this.shadowSet = shadowSet.substr(0, shadowSet.length - 1);
    },
    //渲染
    append: function () {
        $("#Icons").append('<div class="Icons_bg"><span class="Icons_icon">' +
            this.selectedIcon + '</span></div>');
        //bg setting
        $("#Icons .Icons_bg").css({
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'overflow': 'hidden',
            'width': this.bgSize,
            'height': this.bgSize,
            'background': this.bgColor,
            'border-radius': this.bgRadius + "%",
        });
        //icon setting
        $('#Icons .Icons_icon').css({
            'color': this.iconColor,
            'font-size': this.iconSize + "px",
            'text-shadow': this.shadowSet,
        });
    },
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
            console.log(`Input ${hex} is wrong!`);
            return 'rgb(0,0,0)'; //默认颜色
        }
    },
    //随机生成十六进制颜色
    randomHexColor: function () {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    },
    //随机选择font-awesome图标
    randomIcons: function () {
        var arr = this.iconsArr;
        return arr[Math.floor((Math.random() * arr.length))];
        // return arr[9];
    },
    //随机生成背景渐变色
    _randomGradientBgColor: function () {
        var _h = this.randomValue(0, 360);
        var _h1 = _h + this.randomValue(20, 60);
        var _s = this.randomValue(40, 60);
        var _l = this.randomValue(50, 80);
        var _ang = this.randomValue(0, 180);
        var _gradient = 'linear-gradient(' + _ang + 'deg, hsl(' + _h + ', ' + _s + '%, ' + _l + '%), hsl(' + _h1 + ', ' + _s + '%, ' + _l + '%))';
        return _gradient;
    },
    //范围随机数
    randomValue: function (start, end) {
        if (typeof start == "undefined") {
            start = 0;
        }
        if (typeof end == "undefined") {
            end = start + 100;
        }
        return start + Math.round(Math.random() * (end - start));
    }
};

var icons = new Icons({
    selectedIcon: "fas fa-camera",
    randomIcons: 1,
    bgSize: 140,
    iconSize: 80,
    shadowAngle: 45,
    shadowDepth: 6,
    bgRadius: 20,
    bgColor: "#3498db",
    randomBgColor: 1,
    randomGradientBgColor: 1,
    shadowColor: "#2980b9",
    iconColor: "#ffffff",
    bgTransparency: 1,
    shadowTransparency: 1,
    iconTransparency: 1,
    iconsSet: ["fas fa-charging-station", "fas fa-bolt", "fas fa-plug", "fas fa-car-battery", "fas fa-industry", "fas fa-broadcast-tower", "fas fa-gopuram", "fab fa-superpowers", "fas fa-torii-gate", "fas fa-monument", "fas fa-house-damage"],
});
icons.append();