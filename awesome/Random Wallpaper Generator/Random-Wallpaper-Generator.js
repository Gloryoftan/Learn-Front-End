var rectangle = element => {
    document.querySelector(element).style.left = Math.floor(Math.random() * (40 - 20) + 20) + '%';
    document.querySelector(element).style.top = Math.floor(Math.random() * (40 - 20) + 20) + '%';
    document.querySelector(element).style.width = Math.floor(Math.random() * (100 - 20) + 20) + '%';
    document.querySelector(element).style.height = Math.floor(Math.random() * (100 - 20) + 20) + '%';
    document.querySelector(element).style.backgroundColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
    document.querySelector(element).style.transform = "rotate(" + Math.floor(Math.random() * 360) + 'deg' + ')' + ' ' + 'translateX(' + Math.floor(Math.random() * (100 - 0) + 0) + '%' + ')' + ' ' + 'translateY(' + Math.floor(Math.random() * (100 - 0) + 0) + '%' + ')';
};

rectangle('.rectangle.one');
rectangle('.rectangle.two');
rectangle('.rectangle.three');
rectangle('.rectangle.four');
rectangle('.rectangle.five');
rectangle('.rectangle.six');
rectangle('.rectangle.seven');
rectangle('.rectangle.eight');
rectangle('.rectangle.nine');
rectangle('.rectangle.ten');
rectangle('.rectangle.eleven');
rectangle('.rectangle.twelve');
rectangle('.rectangle.thirteen');
rectangle('.rectangle.fourteen');
rectangle('.rectangle.fifteen');
rectangle('.rectangle.sixteen');
rectangle('.rectangle.seventeen');
rectangle('.rectangle.eighteen');
rectangle('.rectangle.ninteen');
rectangle('.rectangle.twenty');
rectangle('.rectangle.twentyone');
rectangle('.rectangle.twentytwo');
rectangle('.rectangle.twentythree');
rectangle('.rectangle.twentyfour');
rectangle('.rectangle.twentyfive');
rectangle('.rectangle.twentysix');
rectangle('.rectangle.twentyseven');
rectangle('.rectangle.twentyeight');
rectangle('.rectangle.twentynine');
rectangle('.rectangle.thirty');
document.querySelector('.screen').style.backgroundColor = "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
});

var button = document.querySelector('.newWallpaper');
document.onkeyup = e => {
    if (e.keyCode == 32) {
        rectangle('.rectangle.one');
        rectangle('.rectangle.two');
        rectangle('.rectangle.three');
        rectangle('.rectangle.four');
        rectangle('.rectangle.five');
        rectangle('.rectangle.six');
        rectangle('.rectangle.seven');
        rectangle('.rectangle.eight');
        rectangle('.rectangle.nine');
        rectangle('.rectangle.ten');
        rectangle('.rectangle.eleven');
        rectangle('.rectangle.twelve');
        rectangle('.rectangle.thirteen');
        rectangle('.rectangle.fourteen');
        rectangle('.rectangle.fifteen');
        rectangle('.rectangle.sixteen');
        rectangle('.rectangle.seventeen');
        rectangle('.rectangle.eighteen');
        rectangle('.rectangle.ninteen');
        rectangle('.rectangle.twenty');
        rectangle('.rectangle.twentyone');
        rectangle('.rectangle.twentytwo');
        rectangle('.rectangle.twentythree');
        rectangle('.rectangle.twentyfour');
        rectangle('.rectangle.twentyfive');
        rectangle('.rectangle.twentysix');
        rectangle('.rectangle.twentyseven');
        rectangle('.rectangle.twentyeight');
        rectangle('.rectangle.twentynine');
        rectangle('.rectangle.thirty');
        document.querySelector('.screen').style.backgroundColor = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });
        document.querySelector('.text').style.opacity = 0;
    }
};