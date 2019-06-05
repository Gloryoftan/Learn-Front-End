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

 *randomShade 是否随机底纹 默认否
 *shadeTransparency 底纹透明度 默认0.5

 *rectangleNum 长方形数量 默认2
 *rectangleStartPositionX0 长方形起始点位置X0 默认为0 
 *rectangleStartPositionX 长方形起始点位置X  默认为1 即0-1 (容器左边为0,右边为1)
 *rectangleStartPositionY0 长方形起始点位置Y0 默认为0 
 *rectangleStartPositionY 长方形起始点位置Y 默认为1/2 即0-1/2 (容器顶部为0,底部为1)
 *rectRotate 长方形旋转角度 默认45
 *rectRatio 长方形宽高比 默认为2 （宽高比为1时只出现正方形）
 *rectOnly 只出现长方形 默认为否
 *rectScaleMin 长方形大小 最小值 默认40
 *rectScaleMax 长方形大小 最大值 默认50

 *circleNum 圆形数量 默认1
 *circleCenterX0 圆形圆心位置X0 默认为0
 *circleCenterX 圆形圆心位置X 默认为1 即0-1 (容器左边为0,右边为1)
 *circleCenterY0 圆形圆心位置Y0 默认为0
 *circleCenterY 圆形圆心位置Y 默认为1 即0-1 (容器顶部为0,底部为1)
 *circleRMin 圆形半径最小值 默认25
 *circleRMax 圆形半径最大值 默认45
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

        //canvas 底纹
        this.randomShade = option.randomShade || 0;
        this.shadeTransparency = option.shadeTransparency === 0 ? 0 : option.shadeTransparency || 0.5;
        this.rectangleNum = option.rectangleNum === 0 ? 0 : option.rectangleNum || 2;
        this.rectangleStartPositionX0 = option.rectangleStartPositionX0 || 0;
        this.rectangleStartPositionX = option.rectangleStartPositionX === 0 ? 0 : option.rectangleStartPositionX || 1;
        this.rectangleStartPositionY0 = option.rectangleStartPositionY0 || 0;
        this.rectangleStartPositionY = option.rectangleStartPositionY === 0 ? 0 : option.rectangleStartPositionY || 1 / 2;
        this.rectRotate = option.circleNum === 0 ? 0 : option.rectRotate || 45;
        this.rectRatio = option.rectRatio || 2;
        this.rectOnly = option.rectOnly || 0;
        this.rectScaleMin = option.rectScaleMin === 0 ? 0 : option.rectScaleMin || 40;

        this.circleNum = option.circleNum === 0 ? 0 : option.circleNum || 1;
        this.rectScaleMax = option.rectScaleMax === 0 ? 0 : option.rectScaleMax || 50;
        this.circleCenterX0 = option.circleCenterX0 || 0;
        this.circleCenterX = option.circleCenterX === 0 ? 0 : option.circleCenterX || 1;
        this.circleCenterY0 = option.circleCenterY0 || 0;
        this.circleCenterY = option.circleCenterY === 0 ? 0 : option.circleCenterY || 1;
        this.circleRMin = option.circleRMin === 0 ? 0 : option.circleRMin || 25;
        this.circleRMax = option.circleRMax === 0 ? 0 : option.circleRMax || 25;

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
            this.selectedIcon + '</span><canvas id="Shade">浏览器不支持Canvas，求求你换一个浏览器吧！</canvas></div>');
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
        //shade index
        $('#Icons span').css({
            'position': 'absolute',
            'z-inde': 9
        });
        if (this.randomShade != 0) {
            this._randomShade();
        }
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
        var _h = this._randomValue(0, 360);
        var _h1 = _h + this._randomValue(20, 60);
        var _s = this._randomValue(40, 60);
        var _l = this._randomValue(50, 80);
        var _ang = this._randomValue(0, 180);
        var _gradient = 'linear-gradient(' + _ang + 'deg, hsl(' + _h + ', ' + _s + '%, ' + _l + '%), hsl(' + _h1 + ', ' + _s + '%, ' + _l + '%))';
        return _gradient;
    },
    //范围随机数
    _randomValue: function (start, end) {
        if (typeof start == "undefined") {
            start = 0;
        }
        if (typeof end == "undefined") {
            end = start + 100;
        }
        return start + Math.round(Math.random() * (end - start));
    },
    //随机底纹
    _randomShade: function () {
        var canvas = document.getElementById('Shade');
        var ctx = canvas.getContext('2d');
        canvas.width = this.bgSize;
        canvas.height = this.bgSize;
        canvas.style.borderRadius = this.bgRadius + '%';
        canvas.style.background = "transparent";
        ctx.globalAlpha = this.shadeTransparency;

        ctx.clearRect(0, 0, this.bgSize, this.bgSize);
        //rectangle
        for (let i = 0; i < this.rectangleNum; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(this._randomValue(this.bgSize * this.rectangleStartPositionX0, this.bgSize * this.rectangleStartPositionX), this._randomValue(this.bgSize * this.rectangleStartPositionY0, this.bgSize * this.rectangleStartPositionY));
            ctx.rotate(this.rectRotate * Math.PI / 180);
            if (this.rectOnly !== 0) {
                ctx.scale(1, this.rectRatio);
            } else {
                ctx.scale(this._randomValue(1, this.rectRatio), this._randomValue(1, this.rectRatio));
            }
            let s = this._randomValue(this.rectScaleMin, this.rectScaleMax);
            ctx.scale(s, s);
            ctx.rect(0, 0, 1, 1);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.restore();
        }

        for (let i = 0; i < this.circleNum; i++) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this._randomValue(this.bgSize * this.circleCenterX0, this.bgSize * this.circleCenterX), this._randomValue(this.bgSize * this.circleCenterY0, this.bgSize * this.circleCenterY), this._randomValue(this.circleRMin, this.circleRMax), 0, 2 * Math.PI);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.restore();
        }
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

    randomShade: 1,
    shadeTransparency: 0.5,
    //长方形
    rectangleNum: 2,
    rectangleStartPositionX0: 0,
    rectangleStartPositionX: 1,
    rectangleStartPositionY0: 0,
    rectangleStartPositionY: 1 / 2,
    rectRotate: 45,
    rectRatio: 3,
    rectOnly: 0,
    rectScaleMin: 40,
    rectScaleMax: 50,
    //圆形
    circleNum: 1,
    circleCenterX0: 0,
    circleCenterX: 1,
    circleCenterY0: 0,
    circleCenterY: 1,
    circleRMin: 25,
    circleRMax: 45,

});
icons.append();