(function () {
    var canvas = document.getElementById("bg");
    var ctx = canvas.getContext("2d");
    var width = window.innerWidth;
    var height = window.innerHeight;
    var r = 0,
        u = Math.PI * 2,
        v = Math.cos;

    // Set the canvas dimensions. This will be useful
    // when we clear it for re-render.
    canvas.width = width;
    canvas.height = height;

    ctx.scale(1, 1);
    ctx.globalAlpha = 0.5;

    function render() {
        ctx.clearRect(0, 0, width, height);

        // var randomWidth = 100;
        var randomHeight = 100;

        for (var i = 0; i < canvas.width; i += randomHeight) {
            for (var j = 0; j < canvas.height; j += randomHeight * 2) {
                // console.log(i, j);
                ctx.beginPath();
                var choice = Math.random();
                // Square or Circle depending on the RNG
                if (choice >= 0.5) {
                    ctx.rect(i, j, randomHeight, randomHeight);
                } else {
                    ctx.arc(i, j, randomHeight, 0, 360);
                }

                r -= u / -50;
                ctx.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16);
                ctx.fill();
                // randomWidth = Math.floor(Math.random() * 200);
                randomHeight = Math.floor(Math.random() * 100);
            }
        }
    }

    document.onclick = render;
    render();

})();