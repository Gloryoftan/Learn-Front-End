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
 */
function Icons(option) {
    this._init(option);
}

Icons.prototype = {
    _init: function (option) {
        this.bgSize = option.bgSize;
        this.iconSize = option.iconSize;

        this.shadowAngle = option.shadowAngle;
        this.shadowDepth = option.shadowDepth;
        this.bgRadius = option.bgRadius;

        this.bgTransparency = option.bgTransparency;
        this.shadowTransparency = option.shadowTransparency;
        this.iconTransparency = option.iconTransparency;

        this.bgColor = this._hex2Rgb(option.bgColor);
        this.shadowColor = this._hex2Rgb(option.shadowColor);
        this.iconColor = this._hex2Rgb(option.iconColor);

        // this.posX = option.posX === 0 ? : option.posX || 0;
        // this.posY = option.posY === 0 ? : option.posX || 0;

        this.selectedIcon = '<i class="' + option.selectedIcon + '"></i>';

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

    append: function () {
        $("#Icons").append('<div class="Icons_bg"><span class="Icons_icon">' +
            this.selectedIcon + '</span></div>');
        //bg setting
        $("#Icons").children('.Icons_bg').css('display', "flex");
        $("#Icons").children('.Icons_bg').css('justify-content', "center");
        $("#Icons").children('.Icons_bg').css('align-items', "center");
        $("#Icons").children('.Icons_bg').css('overflow', "hidden");
        $("#Icons").children('.Icons_bg').css('width', this.bgSize);
        $("#Icons").children('.Icons_bg').css('height', this.bgSize);
        $("#Icons").children('.Icons_bg').css('background-color', this.bgColor);
        $("#Icons").children('.Icons_bg').css('border-radius', this.bgRadius + "%");
        //icon setting
        $("#Icons").children('.Icons_bg').find('.Icons_icon').css('color', this.iconColor);
        $("#Icons").children('.Icons_bg').find('.Icons_icon').css('font-size', this.iconSize + "px");
        $("#Icons").children('.Icons_bg').find('.Icons_icon').css('text-shadow', this.shadowSet);
    },

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
};

var icons = new Icons({
    selectedIcon: "fas fa-camera",
    bgSize: 140,
    iconSize: 80,
    shadowAngle: 45,
    shadowDepth: 6,
    bgRadius: 20,
    bgColor: "#3498db",
    shadowColor: "#2980b9",
    iconColor: "#ffffff",
    bgTransparency: 1,
    shadowTransparency: 1,
    iconTransparency: 1,
});

icons.append();