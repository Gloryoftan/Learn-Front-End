/* demo-mark-12 */
(function () {
    let oDemo = document.querySelector('#content .demo12 .title');
    let aLi = document.querySelectorAll('#content .demo12 ul li');
    let konva = document.getElementById('konva12');

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    /* stage概念 */
    aLi[0].onclick = function () {
        //第1步：创建 stage
        var stage = new Konva.Stage({
            container: 'konva12', // id of container <div>
            width: 800,
            height: 500
        });

        //第2步：创建 layer
        var layer = new Konva.Layer();

        //第3步：创建 shape
        var circle = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        //第4步：添加 shape 至 layer
        layer.add(circle);

        //第5步：添加 layer 至 stage
        stage.add(layer);

        //第6步：draw
        layer.draw();
    }
})();

/* demo-mark-13 */
(function () {
    let oDemo = document.querySelector('#content .demo13 .title');
    let aLi = document.querySelectorAll('#content .demo13 ul li');
    let konva = document.getElementById('konva13');
    var width = 800;
    var height = 500;

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    /* Rect */
    aLi[0].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var rect1 = new Konva.Rect({
            x: 20,
            y: 20,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4
        });
        // add the shape to the layer
        layer.add(rect1);

        var rect2 = new Konva.Rect({
            x: 150,
            y: 40,
            width: 100,
            height: 50,
            fill: 'red',
            shadowBlur: 10,
            cornerRadius: 10
        });
        layer.add(rect2);

        var rect3 = new Konva.Rect({
            x: 50,
            y: 120,
            width: 100,
            height: 100,
            fill: 'blue',
            cornerRadius: [0, 10, 20, 30]
        });
        layer.add(rect3);

        stage.add(layer);
    }

    /* Circle */
    aLi[1].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var circle = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(circle);

        stage.add(layer);
    }

    /* Ellipse */
    aLi[2].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var oval = new Konva.Ellipse({
            x: stage.width() / 2,
            y: stage.height() / 2,
            radiusX: 100,
            radiusY: 50,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(oval);

        stage.add(layer);
    }

    /* Wedge */
    aLi[3].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var wedge = new Konva.Wedge({
            x: stage.width() / 2,
            y: stage.height() / 2,
            radius: 70,
            angle: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            rotation: -120
        });

        layer.add(wedge);

        stage.add(layer);
    }

    /* Simple Line */
    aLi[4].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var redLine = new Konva.Line({
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'red',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round'
        });

        // dashed line
        var greenLine = new Konva.Line({
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'green',
            strokeWidth: 2,
            lineJoin: 'round',
            dash: [33, 10]
        });

        // complex dashed and dotted line
        var blueLine = new Konva.Line({
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'blue',
            strokeWidth: 10,
            lineCap: 'round',
            lineJoin: 'round',
            dash: [29, 20, 0.001, 20]
        });

        redLine.move({
            x: 0,
            y: 5
        });
        greenLine.move({
            x: 0,
            y: 55
        });
        blueLine.move({
            x: 0,
            y: 105
        });

        layer.add(redLine);
        layer.add(greenLine);
        layer.add(blueLine);

        stage.add(layer);
    }

    /* Polygon */
    aLi[5].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var poly = new Konva.Line({
            points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 5,
            closed: true
        });

        layer.add(poly);

        stage.add(layer);
    }

    /* Image */
    aLi[6].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();
        stage.add(layer);

        // main API:
        var imageObj = new Image();
        imageObj.onload = function () {
            var img1 = new Konva.Image({
                x: 50,
                y: 50,
                image: imageObj,
                width: 106,
                height: 118
            });

            // add the shape to the layer
            layer.add(img1);
            layer.batchDraw();
        };
        imageObj.src = 'img/img.jpeg';
    }

    /* Text */
    aLi[7].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: 800,
            height: 500
        });

        var layer = new Konva.Layer();

        var simpleText = new Konva.Text({
            x: stage.width() / 2,
            y: 15,
            text: 'Simple Text',
            fontSize: 30,
            fontFamily: 'Calibri',
            fill: 'green'
        });
        simpleText.offsetX(simpleText.width() / 2);

        var complexText = new Konva.Text({
            x: 20,
            y: 60,
            text: "COMPLEX TEXT\n\nkonva.js",
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#555',
            width: 300,
            padding: 20,
            align: 'center'
        });

        var rect = new Konva.Rect({
            x: 20,
            y: 60,
            stroke: '#555',
            strokeWidth: 5,
            fill: '#ddd',
            width: 300,
            height: complexText.height(),
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: [10, 10],
            shadowOpacity: 0.2,
            cornerRadius: 10
        });

        layer.add(simpleText);
        layer.add(rect);
        layer.add(complexText);

        stage.add(layer);
    }

    /* TextPath */
    aLi[8].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var textpath = new Konva.TextPath({
            x: 0,
            y: 50,
            fill: '#333',
            fontSize: 16,
            fontFamily: 'Arial',
            text: "Konva.js TextPath Konva.js TextPath Konva.js TextPath Konva.js TextPath",
            data: 'M10,10 C0,0 10,150 100,100 S300,150 4.0.130'
        });

        layer.add(textpath);

        stage.add(layer);
    }

    /* Star */
    aLi[9].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var star = new Konva.Star({
            x: stage.width() / 2,
            y: stage.height() / 2,
            numPoints: 6,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(star);

        stage.add(layer);
    }

    /* Ring */
    aLi[10].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var ring = new Konva.Ring({
            x: stage.width() / 2,
            y: stage.height() / 2,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(ring);

        stage.add(layer);
    }

    /* Arc */
    aLi[11].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var arc = new Konva.Arc({
            x: stage.width() / 2,
            y: stage.height() / 2,
            innerRadius: 40,
            outerRadius: 70,
            angle: 60,
            fill: 'yellow',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(arc);

        stage.add(layer);
    }

    /* Label */
    aLi[12].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        // tooltip
        var tooltip = new Konva.Label({
            x: 170,
            y: 75,
            opacity: 0.75
        });

        tooltip.add(
            new Konva.Tag({
                fill: 'black',
                pointerDirection: 'down',
                pointerWidth: 10,
                pointerHeight: 10,
                lineJoin: 'round',
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: 10,
                shadowOpacity: 0.5
            })
        );

        tooltip.add(
            new Konva.Text({
                text: 'Tooltip pointing down',
                fontFamily: 'Calibri',
                fontSize: 18,
                padding: 5,
                fill: 'white'
            })
        );

        // label with left pointer
        var labelLeft = new Konva.Label({
            x: 20,
            y: 130,
            opacity: 0.75
        });

        labelLeft.add(
            new Konva.Tag({
                fill: 'green',
                pointerDirection: 'left',
                pointerWidth: 20,
                pointerHeight: 28,
                lineJoin: 'round'
            })
        );

        labelLeft.add(
            new Konva.Text({
                text: 'Label pointing left',
                fontFamily: 'Calibri',
                fontSize: 18,
                padding: 5,
                fill: 'white'
            })
        );

        // simple label
        var simpleLabel = new Konva.Label({
            x: 180,
            y: 150,
            opacity: 0.75
        });

        simpleLabel.add(
            new Konva.Tag({
                fill: 'yellow'
            })
        );

        simpleLabel.add(
            new Konva.Text({
                text: 'Simple label',
                fontFamily: 'Calibri',
                fontSize: 18,
                padding: 5,
                fill: 'black'
            })
        );

        layer
            .add(tooltip)
            .add(labelLeft)
            .add(simpleLabel);

        stage.add(layer);
    }

    /* Path */
    aLi[13].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var path = new Konva.Path({
            x: 50,
            y: 40,
            data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
            fill: 'green',
            scale: {
                x: 2,
                y: 2
            }
        });

        layer.add(path);

        stage.add(layer);
    }

    /* Regular Polygon */
    aLi[14].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: window.innerWidth,
            height: window.innerHeight
        });

        var layer = new Konva.Layer();

        var hexagon = new Konva.RegularPolygon({
            x: 100,
            y: 150,
            sides: 6,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(hexagon);

        stage.add(layer);
    }

    /* Arrow */
    aLi[15].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var arrow = new Konva.Arrow({
            x: stage.width() / 4,
            y: stage.height() / 4,
            points: [0, 0, width / 2, height / 2],
            pointerLength: 20,
            pointerWidth: 20,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(arrow);

        stage.add(layer);
    }

    /* Custom Shape */
    aLi[16].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva13',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var triangle = new Konva.Shape({
            sceneFunc: function (context, shape) {
                context.beginPath();
                context.moveTo(20, 50);
                context.lineTo(220, 80);
                context.quadraticCurveTo(150, 100, 260, 170);
                context.closePath();

                // (!) Konva 特殊方法, 非常重要
                context.fillStrokeShape(shape);
            },
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(triangle);

        stage.add(layer);
    }
})();

/* demo-mark-14 */
(function () {
    let oDemo = document.querySelector('#content .demo14 .title');
    let aLi = document.querySelectorAll('#content .demo14 ul li');
    let konva = document.getElementById('konva14');
    var width = 800;
    var height = 500;

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    /* fill */
    aLi[0].onclick = function () {
        function loadImages(sources, callback) {
            var images = {};
            var loadedImages = 0;
            var numImages = 0;
            // get num of sources
            for (var src in sources) {
                numImages++;
            }
            for (var src in sources) {
                images[src] = new Image();
                images[src].onload = function () {
                    if (++loadedImages >= numImages) {
                        callback(images);
                    }
                };
                images[src].src = sources[src];
            }
        }

        function draw(images) {
            var width = window.innerWidth;
            var height = window.innerHeight;

            var stage = new Konva.Stage({
                container: 'konva14',
                width: width,
                height: height
            });
            var layer = new Konva.Layer();

            var colorPentagon = new Konva.RegularPolygon({
                x: 80,
                y: stage.height() / 2,
                sides: 5,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true
            });

            var patternPentagon = new Konva.RegularPolygon({
                x: 220,
                y: stage.height() / 2,
                sides: 5,
                radius: 70,
                fillPatternImage: images.img2,
                fillPatternOffset: {
                    x: -220,
                    y: 70
                },
                stroke: 'black',
                strokeWidth: 4,
                draggable: true
            });

            var linearGradPentagon = new Konva.RegularPolygon({
                x: 360,
                y: stage.height() / 2,
                sides: 5,
                radius: 70,
                fillLinearGradientStartPoint: {
                    x: -50,
                    y: -50
                },
                fillLinearGradientEndPoint: {
                    x: 50,
                    y: 50
                },
                fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
                stroke: 'black',
                strokeWidth: 4,
                draggable: true
            });

            var radialGradPentagon = new Konva.RegularPolygon({
                x: 500,
                y: stage.height() / 2,
                sides: 5,
                radius: 70,
                fillRadialGradientStartPoint: {
                    x: 0,
                    y: 0
                },
                fillRadialGradientStartRadius: 0,
                fillRadialGradientEndPoint: {
                    x: 0,
                    y: 0
                },
                fillRadialGradientEndRadius: 70,
                fillRadialGradientColorStops: [0, 'red', 0.5, 'yellow', 1, 'blue'],
                stroke: 'black',
                strokeWidth: 4,
                draggable: true
            });

            /*
             * bind listeners
             */
            colorPentagon.on('mouseover touchstart', function () {
                this.fill('blue');
                layer.draw();
            });

            colorPentagon.on('mouseout touchend', function () {
                this.fill('red');
                layer.draw();
            });

            patternPentagon.on('mouseover touchstart', function () {
                this.fillPatternImage(images.img1);
                this.fillPatternOffset({
                    x: -100,
                    y: 70
                });
                layer.draw();
            });

            patternPentagon.on('mouseout touchend', function () {
                this.fillPatternImage(images.img2);
                this.fillPatternOffset({
                    x: -220,
                    y: 70
                });
                layer.draw();
            });

            linearGradPentagon.on('mouseover touchstart', function () {
                this.fillLinearGradientStartPoint({
                    x: -50
                });
                this.fillLinearGradientEndPoint({
                    x: 50
                });
                this.fillLinearGradientColorStops([0, 'green', 1, 'yellow']);
                layer.draw();
            });

            linearGradPentagon.on('mouseout touchend', function () {
                // set multiple properties at once with setAttrs
                this.setAttrs({
                    fillLinearGradientStartPoint: {
                        x: -50,
                        y: -50
                    },
                    fillLinearGradientEndPoint: {
                        x: 50,
                        y: 50
                    },
                    fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
                });
                layer.draw();
            });

            radialGradPentagon.on('mouseover touchstart', function () {
                this.fillRadialGradientColorStops([
                    0,
                    'red',
                    0.5,
                    'yellow',
                    1,
                    'green'
                ]);
                layer.draw();
            });

            radialGradPentagon.on('mouseout touchend', function () {
                // set multiple properties at once with setAttrs
                this.setAttrs({
                    fillRadialGradientStartPoint: 0,
                    fillRadialGradientStartRadius: 0,
                    fillRadialGradientEndPoint: 0,
                    fillRadialGradientEndRadius: 70,
                    fillRadialGradientColorStops: [0, 'red', 0.5, 'yellow', 1, 'blue']
                });
                layer.draw();
            });

            layer.add(colorPentagon);
            layer.add(patternPentagon);
            layer.add(linearGradPentagon);
            layer.add(radialGradPentagon);
            stage.add(layer);
        }
        var sources = {
            img2: 'img/icecream.png',
            img1: 'img/canvas2.jpg'
        };

        loadImages(sources, function (images) {
            draw(images);
        });
    }

    /* Stroke */
    aLi[1].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var pentagon = new Konva.RegularPolygon({
            x: stage.width() / 2,
            y: stage.height() / 2,
            sides: 5,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        pentagon.on('mouseover', function () {
            this.stroke('blue');
            this.strokeWidth(20);
            layer.draw();
        });

        pentagon.on('mouseout', function () {
            this.stroke('black');
            this.strokeWidth(4);
            layer.draw();
        });

        layer.add(pentagon);

        stage.add(layer);
    }

    /* Opacity */
    aLi[2].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var pentagon = new Konva.RegularPolygon({
            x: stage.width() / 2,
            y: stage.height() / 2,
            sides: 5,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            opacity: 0.5
        });

        pentagon.on('mouseover', function () {
            this.opacity(1);
            layer.draw();
        });

        pentagon.on('mouseout', function () {
            this.opacity(0.5);
            layer.draw();
        });

        layer.add(pentagon);

        stage.add(layer);
    }

    /* Shadow */
    aLi[3].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var text = new Konva.Text({
            text: 'Text Shadow!',
            fontFamily: 'Calibri',
            fontSize: 40,
            x: 20,
            y: 20,
            stroke: 'red',
            strokeWidth: 2,
            shadowColor: 'black',
            shadowBlur: 0,
            shadowOffset: {
                x: 10,
                y: 10
            },
            shadowOpacity: 0.5
        });

        var line = new Konva.Line({
            stroke: 'green',
            strokeWidth: 10,
            lineJoin: 'round',
            lineCap: 'round',
            points: [50, 140, 250, 160],
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: {
                x: 10,
                y: 10
            },
            shadowOpacity: 0.5
        });

        var rect = new Konva.Rect({
            x: 100,
            y: 120,
            width: 100,
            height: 50,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: {
                x: 10,
                y: 10
            },
            shadowOpacity: 0.5
        });

        layer.add(text);
        layer.add(line);
        layer.add(rect);

        stage.add(layer);
    }

    /* Line Join */
    aLi[4].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var triangle = new Konva.RegularPolygon({
            x: stage.width() / 2,
            y: stage.height() / 2,
            sides: 3,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 20,
            lineJoin: 'bevel'
        });

        triangle.on('mouseover', function () {
            this.lineJoin('round');
            layer.draw();
        });

        triangle.on('mouseout', function () {
            this.lineJoin('bevel');
            layer.draw();
        });

        layer.add(triangle);

        stage.add(layer);
    }

    /* Hide and Show */
    aLi[5].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var pentagon = new Konva.RegularPolygon({
            x: stage.width() / 2,
            y: stage.height() / 2,
            sides: 5,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            visible: true
        });

        layer.add(pentagon);

        stage.add(layer);

        pentagon.on('mouseover', function () {
            pentagon.hide();
            layer.draw();
        })
    }

    /* Mouse Cursor Style */
    aLi[6].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var shape1 = new Konva.RegularPolygon({
            x: 80,
            y: stage.height() / 2,
            sides: 5,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        var shape2 = new Konva.RegularPolygon({
            x: 220,
            y: stage.height() / 2,
            sides: 5,
            radius: 70,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        var shape3 = new Konva.RegularPolygon({
            x: 360,
            y: stage.height() / 2,
            sides: 5,
            radius: 70,
            fillLinearGradientStartPoint: {
                x: -50,
                y: -50
            },
            fillLinearGradientEndPoint: {
                x: 50,
                y: 50
            },
            fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        });

        shape1.on('mouseenter', function () {
            stage.container().style.cursor = 'pointer';
        });

        shape1.on('mouseleave', function () {
            stage.container().style.cursor = 'default';
        });

        shape2.on('mouseenter', function () {
            stage.container().style.cursor = 'move';
        });

        shape2.on('mouseleave', function () {
            stage.container().style.cursor = 'default';
        });

        shape3.on('mouseenter', function () {
            stage.container().style.cursor = 'crosshair';
        });

        shape3.on('mouseleave', function () {
            stage.container().style.cursor = 'default';
        });

        layer.add(shape1);
        layer.add(shape2);
        layer.add(shape3);
        stage.add(layer);
    }

    /* Blend Mode */
    aLi[7].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva14',
            width: width,
            height: height
        });
        var layer = new Konva.Layer();

        var text = new Konva.Text({
            text: 'Text Shadow!',
            fontFamily: 'Calibri',
            fontSize: 40,
            x: 20,
            y: 20,
            fill: 'green',
            // stroke: 'red',
            strokeWidth: 2,
            shadowColor: 'white',
            // shadowBlur: 0,
            shadowOffset: {
                x: 10,
                y: 10
            }
            // shadowOpacity: 0.5
        });
        layer.add(text);

        var rect = new Konva.Rect({
            x: 50,
            y: 50,
            // stroke: 'red',
            width: 100,
            height: 100,
            fill: 'red',
            draggable: true,
            globalCompositeOperation: 'xor'
        });

        layer.add(rect);
        stage.add(layer);
    }
})();

/* demo-mark-15 */
(function () {
    let oDemo = document.querySelector('#content .demo15 .title');
    let aLi = document.querySelectorAll('#content .demo15 ul li');
    let konva = document.getElementById('konva15');
    var width = 800;
    var height = 500;

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    /* Binding Events */
    aLi[0].onclick = function () {
        function writeMessage(message) {
            text.text(message);
            layer.draw();
        }

        var stage = new Konva.Stage({
            container: 'konva15',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var triangle = new Konva.RegularPolygon({
            x: 80,
            y: 120,
            sides: 3,
            radius: 80,
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 4
        });

        var text = new Konva.Text({
            x: 10,
            y: 10,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '',
            fill: 'black'
        });

        triangle.on('mouseout', function () {
            writeMessage('Mouseout triangle');
        });

        triangle.on('mousemove', function () {
            var mousePos = stage.getPointerPosition();
            var x = mousePos.x - 190;
            var y = mousePos.y - 40;
            writeMessage('x: ' + x + ', y: ' + y);
        });

        var circle = new Konva.Circle({
            x: 230,
            y: 100,
            radius: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        circle.on('mouseover', function () {
            writeMessage('Mouseover circle');
        });
        circle.on('mouseout', function () {
            writeMessage('Mouseout circle');
        });
        circle.on('mousedown', function () {
            writeMessage('Mousedown circle');
        });
        circle.on('mouseup', function () {
            writeMessage('Mouseup circle');
        });

        layer.add(triangle);
        layer.add(circle);
        layer.add(text);

        stage.add(layer);
    }

    /* Desktop and Mobile */
    aLi[1].onclick = function () {
        function writeMessage(message) {
            text.text(message);
            layer.draw();
        }

        var stage = new Konva.Stage({
            container: 'konva15',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var text = new Konva.Text({
            x: 10,
            y: 10,
            fontFamily: 'Calibri',
            fontSize: 20,
            text: '',
            fill: 'black'
        });

        var circle = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2 + 10,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        circle.on('mousedown touchstart', function () {
            writeMessage('Mousedown or touchstart');
        });

        circle.on('mouseup touchend', function () {
            writeMessage('Mouseup or touchend');
        });

        layer.add(circle);
        layer.add(text);

        stage.add(layer);
    }

    /* Remove Event */
    aLi[2].onclick = function () {
        function writeMessage(message) {
            text.text(message);
            layer.draw();
        }

        var stage = new Konva.Stage({
            container: 'konva15',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var circle = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2 + 10,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        var rect = new Konva.Rect({
            x: 1,
            y: 1,
            width: 50,
            height: 25,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1
        })

        circle.on('click', function () {
            alert('You clicked on the circle');
        });

        rect.on('click', function () {
            circle.off('click');
            alert('Remove the circle event');
        })

        layer.add(rect)
        layer.add(circle);
        stage.add(layer);
    }

    /* Remove by Name */
    aLi[3].onclick = function () {
        function writeMessage(message) {
            text.text(message);
            layer.draw();
        }

        var stage = new Konva.Stage({
            container: 'konva15',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var circle = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2 + 10,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        circle.on('click.event1', function () {
            alert('First Listener');
        });
        circle.on('click.event2', function () {
            alert('Second Listener');
        });

        var rect1 = new Konva.Rect({
            x: 1,
            y: 30,
            width: 50,
            height: 25,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1
        })

        var rect2 = new Konva.Rect({
            x: 1,
            y: 1,
            width: 50,
            height: 25,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 1
        })

        rect2.on('click', function () {
            circle.off('click.event1');
            alert('First Listener removed');
        });

        rect1.on('click', function () {
            circle.off('click.event2');
            alert('Second Listener removed');
        });

        layer.add(rect1);
        layer.add(rect2);
        layer.add(circle);
        stage.add(layer);
    }

    /* Event Delegation */
    aLi[4].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva15',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var star = new Konva.Star({
            x: stage.width() / 2,
            y: stage.height() / 2,
            numPoints: 5,
            innerRadius: 40,
            outerRadius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            scale: {
                x: 2,
                y: 2
            },
            name: 'my big star'
        });

        var star1 = new Konva.Star({
            x: stage.width() / 5,
            y: stage.height() / 5,
            numPoints: 5,
            innerRadius: 20,
            outerRadius: 50,
            fill: 'yellow',
            stroke: 'blue',
            strokeWidth: 4,
            scale: {
                x: 1,
                y: 1
            },
            name: 'my small star'
        });

        layer.on('click', function (evt) {
            // get the shape that was clicked on
            var shape = evt.target;
            alert('you clicked on "' + shape.name() + '"');
        });

        layer.add(star);
        layer.add(star1);

        stage.add(layer);
    }

    /* Keyboard Events */
    aLi[5].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva15',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();
        stage.add(layer);

        var circle = new Konva.Circle({
            x: stage.width() / 2,
            y: stage.height() / 2 + 10,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        });

        layer.add(circle);
        layer.draw();

        var container = stage.container();

        container.tabIndex = 1;

        container.focus();

        const DELTA = 4;

        container.addEventListener('keydown', function (e) {
            if (e.keyCode === 37) {
                circle.x(circle.x() - DELTA);
            } else if (e.keyCode === 38) {
                circle.y(circle.y() - DELTA);
            } else if (e.keyCode === 39) {
                circle.x(circle.x() + DELTA);
            } else if (e.keyCode === 40) {
                circle.y(circle.y() + DELTA);
            } else {
                return;
            }
            e.preventDefault();
            layer.batchDraw();
        });
    }
})();

/* demo-mark-16 */
(function () {
    let oDemo = document.querySelector('#content .demo16 .title');
    let aLi = document.querySelectorAll('#content .demo16 ul li');
    let konva = document.getElementById('konva16');
    var width = 800;
    var height = 500;

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    Konva.Image.fromURL('img/lion.png', function (lion) {
        var stage = new Konva.Stage({
            container: 'konva16',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        lion.position({
            x: 50,
            y: 50
        });
        lion.cache();
        lion.filters([Konva.Filters.Blur, Konva.Filters.Brighten, Konva.Filters.Contrast, Konva.Filters.Enhance, Konva.Filters.HSL, Konva.Filters.Noise, Konva.Filters.Pixelate]);
        layer.add(lion);
        stage.add(layer);

        var sliders = ['blurRadius', 'brightness', 'contrast', 'enhance', 'hue', 'saturation', 'luminance', 'noise', 'pixelSize'];
        sliders.forEach(function (attr) {
            var slider = document.getElementById(attr);

            function update() {
                lion[attr](parseFloat(slider.value));
                layer.batchDraw();
            }
            slider.oninput = update;
            update();
        });
    });
})();

/* demo-mark-17 */
(function () {
    let oDemo = document.querySelector('#content .demo17 .title');
    let aLi = document.querySelectorAll('#content .demo17 ul li');
    let konva = document.getElementById('konva17');
    var width = 800;
    var height = 500;

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    /* Common Easings */
    aLi[0].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva17',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var greenBox = new Konva.Rect({
            x: 70,
            y: stage.height() / 2,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 4,
            offset: {
                x: 50,
                y: 25
            }
        });

        var blueBox = new Konva.Rect({
            x: 190,
            y: stage.height() / 2,
            width: 100,
            height: 50,
            fill: 'blue',
            stroke: 'black',
            strokeWidth: 4,
            offset: {
                x: 50,
                y: 25
            }
        });

        var redBox = new Konva.Rect({
            x: 310,
            y: stage.height() / 2,
            width: 100,
            height: 50,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            offset: {
                x: 50,
                y: 25
            }
        });

        layer.add(greenBox);
        layer.add(blueBox);
        layer.add(redBox);
        stage.add(layer);

        // tween 必须在shape 添加到layer之后才能定义
        greenBox.tween = new Konva.Tween({
            node: greenBox,
            scaleX: 2,
            scaleY: 1.5,
            easing: Konva.Easings.EaseIn,
            duration: 1
        });

        blueBox.tween = new Konva.Tween({
            node: blueBox,
            scaleX: 2,
            scaleY: 1.5,
            easing: Konva.Easings.EaseInOut,
            duration: 1
        });

        redBox.tween = new Konva.Tween({
            node: redBox,
            scaleX: 2,
            scaleY: 1.5,
            easing: Konva.Easings.EaseOut,
            duration: 1
        });

        // use event delegation
        layer.on('mouseover touchstart', function (evt) {
            evt.target.tween.play();
        });

        layer.on('mouseout touchend', function (evt) {
            evt.target.tween.reverse();
        });
    }

    /* Linear Easing */
    aLi[1].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva17',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var rect = new Konva.Rect({
            x: 50,
            y: 20,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 2,
            opacity: 0.2
        });

        layer.add(rect);
        stage.add(layer);

        var tween = new Konva.Tween({
            node: rect,
            duration: 1,
            x: 140,
            y: 90,
            fill: 'red',
            rotation: Math.PI * 2,
            opacity: 1,
            strokeWidth: 6,
            scaleX: 1.5
        });

        // start tween after 2 seconds
        setTimeout(function () {
            tween.play();
        }, 2000);
    }

    /* All Easings */
    aLi[2].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva17',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var easings = [{
                name: 'Linear',
                color: 'blue'
            },
            {
                name: 'EaseIn',
                color: 'green'
            },
            {
                name: 'EaseOut',
                color: 'green'
            },
            {
                name: 'EaseInOut',
                color: 'green'
            },
            {
                name: 'BackEaseIn',
                color: 'blue'
            },
            {
                name: 'BackEaseOut',
                color: 'blue'
            },
            {
                name: 'BackEaseInOut',
                color: 'blue'
            },
            {
                name: 'ElasticEaseIn',
                color: 'green'
            },
            {
                name: 'ElasticEaseOut',
                color: 'green'
            },
            {
                name: 'ElasticEaseInOut',
                color: 'green'
            },
            {
                name: 'BounceEaseIn',
                color: 'blue'
            },
            {
                name: 'BounceEaseOut',
                color: 'blue'
            },
            {
                name: 'BounceEaseInOut',
                color: 'blue'
            },
            {
                name: 'StrongEaseIn',
                color: 'green'
            },
            {
                name: 'StrongEaseOut',
                color: 'green'
            },
            {
                name: 'StrongEaseInOut',
                color: 'green'
            }
        ];

        var tweens = [];

        for (var n = 0; n < easings.length; n++) {
            var num = n + 1;
            var ease = easings[n];
            var text = new Konva.Text({
                x: 10,
                y: 60 + (n * 400) / easings.length,
                padding: 4,
                text: num + ') ' + ease.name,
                fontSize: 18,
                fontFamily: 'Calibri',
                fill: ease.color
            });

            layer.add(text);

            // the tween has to be created after the node has been added to the layer
            var tween = new Konva.Tween({
                node: text,
                x: 280,
                easing: Konva.Easings[ease.name],
                duration: 2
            });

            // add tween to tweens array
            tweens.push(tween);
        }

        stage.add(layer);

        // play
        document.getElementById('play').addEventListener(
            'click',
            function () {
                for (var n = 0; n < tweens.length; n++) {
                    tweens[n].play();
                }
            },
            false
        );

        // pause
        document.getElementById('pause').addEventListener(
            'click',
            function () {
                for (var n = 0; n < tweens.length; n++) {
                    tweens[n].pause();
                }
            },
            false
        );

        // reverse
        document.getElementById('reverse').addEventListener(
            'click',
            function () {
                for (var n = 0; n < tweens.length; n++) {
                    tweens[n].reverse();
                }
            },
            false
        );
    }

    /* Finish Event */
    aLi[3].onclick = function () {
        function writeMessage(message) {
            text.text(message);
            layer.draw();
        }

        var stage = new Konva.Stage({
            container: 'konva17',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var text = new Konva.Text({
            x: 10,
            y: 10,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '',
            fill: 'black'
        });

        var wheel = new Konva.Star({
            x: stage.width() / 2,
            y: stage.height() / 2,
            numPoints: 8,
            outerRadius: 70,
            innerRadius: 50,
            fill: 'purple',
            stroke: 'black',
            strokeWidth: 5,
            lineJoin: 'bevel'
        });

        layer.add(wheel);
        layer.add(text);
        stage.add(layer);

        var tween = new Konva.Tween({
            node: wheel,
            duration: 4,
            rotation: 360,
            easing: Konva.Easings.BackEaseOut,
            onFinish: function () {
                writeMessage('tween finished!');
            }
        });

        setTimeout(function () {
            tween.play();
        }, 1000);
    }

    /* Tween Filter */
    aLi[4].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva17',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var lion = new Konva.Image({
            x: 80,
            y: 30,
            draggable: true
        });
        layer.add(lion);
        stage.add(layer);

        var image = new Image();
        image.onload = function () {
            lion.image(image);
            lion.cache();
            lion.filters([Konva.Filters.Blur]);
            lion.blurRadius(10);
            layer.draw();

            var tween = new Konva.Tween({
                node: lion,
                duration: 0.6,
                blurRadius: 0,
                easing: Konva.Easings.EaseInOut
            });

            lion.on('mouseover', function () {
                tween.play();
            });

            lion.on('mouseout', function () {
                tween.reverse();
            });
        };
        image.src = 'img/lion.png';
    }

    /* All Controls */
    aLi[5].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva17',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var rect = new Konva.Rect({
            x: 50,
            y: 130,
            width: 100,
            height: 50,
            fill: 'green',
            stroke: 'black',
            strokeWidth: 2,
            opacity: 0.2
        });

        layer.add(rect);
        stage.add(layer);

        var tween = new Konva.Tween({
            node: rect,
            duration: 6,
            x: 220,
            y: 75,
            rotation: Math.PI * 10,
            opacity: 1,
            strokeWidth: 6,
            scaleX: 1.3,
            scaleY: 1.3,
            easing: Konva.Easings.Linear,
            fillR: 0,
            fillG: 0,
            fillB: 255
        });

        // pause tween
        document.getElementById('pause1').addEventListener(
            'click',
            function () {
                tween.pause();
            },
            false
        );

        // reverse tween
        document.getElementById('reverse1').addEventListener(
            'click',
            function () {
                tween.reverse();
            },
            false
        );

        // play tween forward
        document.getElementById('play1').addEventListener(
            'click',
            function () {
                tween.play();
            },
            false
        );

        // reset tween
        document.getElementById('reset1').addEventListener(
            'click',
            function () {
                tween.reset();
            },
            false
        );

        // force tween to finish
        document.getElementById('finish1').addEventListener(
            'click',
            function () {
                tween.finish();
            },
            false
        );

        // seek to 3 seconds
        document.getElementById('seek1').addEventListener(
            'click',
            function () {
                tween.seek(3);
            },
            false
        );
    }
})();

/* demo-mark-18 */
(function () {
    let oDemo = document.querySelector('#content .demo18 .title');
    let aLi = document.querySelectorAll('#content .demo18 ul li');
    let konva = document.getElementById('konva18');
    var width = 800;
    var height = 500;

    oDemo.onclick = function () {
        konva.style.background = "hsl(0,0%,80%)";
    }

    aLi[0].onclick = function () {
        var stage = new Konva.Stage({
            container: 'konva18',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();

        var text = new Konva.Text({
            x: 20,
            y: 20,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '<script>\n    var anim = new Konva.Animation(function(frame) {\n        var time = frame.time,\n        timeDiff = frame.timeDiff,\n        frameRate = frame.frameRate;\n    }, layer);\n    anim.start();\n</script>',
            fill: 'black'
        });

        layer.add(text);
        stage.add(layer);
    }
})();