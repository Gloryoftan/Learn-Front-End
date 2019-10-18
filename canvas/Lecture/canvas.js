  /* demo-mark-1 */
  (function () {
      let canvas = document.getElementById('demo1');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      // canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";

      // context.moveTo(100, 100);
      // context.lineTo(100, 400);
      // context.lineTo(500, 400);
      // context.lineTo(100, 100);

      /* stroke */
      //   context.strokeStyle = "hsl(47, 95%, 76%)";
      //   context.stroke();

      /* fill */
      //   context.fillStyle = "hsl(196, 54%, 55%)";
      //   context.fill();

      /* 渐变
       * x0 渐变开始点的 x 坐标
       * y0 渐变开始点的 y 坐标
       * x1 渐变结束点的 x 坐标
       * y1 渐变结束点的 y 坐标
       */
      // let my_gradient = context.createLinearGradient(100, 100, 100, 400);
      // let my_gradient = context.createLinearGradient(100, 100, 400, 100);
      // my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
      // my_gradient.addColorStop(0.5, 'hsl(169, 56%, 73%)');
      // my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
      // context.fillStyle = my_gradient;
      // context.fill();

      /* 辐射渐变 
       * x0 渐变的开始圆的 x 坐标
       * y0 渐变的开始圆的 y 坐标
       * r0 开始圆的半径
       * x1 渐变的结束圆的 x 坐标
       * y1 渐变的结束圆的 y 坐标
       * r1 结束圆的半径
       */
      // var my_gradient = context.createRadialGradient(200, 300, 50, 300, 300, 150);
      // my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
      // // my_gradient.addColorStop(0.33, 'hsl(0, 83%, 73%)');
      // my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
      // context.fillStyle = my_gradient;
      // context.fill();

      /* 图案pattern
       * image 规定要使用的图片、画布或视频元素。
       * repeat 默认。该模式在水平和垂直方向重复。
       * repeat-x 该模式只在水平方向重复。
       * repeat-y 该模式只在垂直方向重复。
       * no-repeat 该模式只显示一次（不重复）。
       */
      //   var imgs = new Image();
      //   imgs.src = "img/icecream.png";
      //   imgs.width = '50';
      //   imgs.height = '50';
      //   imgs.id = 'pic';
      //   imgs.onload = function () {
      //       var pat = context.createPattern(imgs, "repeat");
      //       context.fillStyle = pat;
      //       context.fill();
      //   }

      /* 阴影 
       * number 阴影的模糊级数
       * color 用于阴影的 CSS 颜色值。默认值是 #000000。
       */
      //   canvas.style.background = "hsl(0,0%,90%)";
      //   context.fillStyle = "hsl(0,0%,100%)";
      //   context.shadowBlur = 6;
      //   context.shadowColor = "black";
      //   context.fill();

      /* 阴影偏移 
       * number 正值或负值，定义阴影与形状的水平/垂直距离。
       */
      //   canvas.style.background = "hsl(0,0%,90%)";
      //   context.fillStyle = "hsl(0,0%,100%)";
      //   context.shadowBlur = 10;
      //   context.shadowColor = "black";
      //   context.shadowOffsetX = 30;
      //   context.shadowOffsetY = 10;
      //   context.fill();

      let oDemo = document.querySelector('#content .demo1 .title')
      let aLi = document.querySelectorAll('#content .demo1 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";
          context.shadowBlur = 0;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          context.strokeStyle = "hsl(0,0%,0%)";
          context.stroke();
      }
      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          context.fillStyle = "hsl(0,0%,0%)";
          context.fill();
      }
      aLi[4].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          context.fillStyle = "hsl(196, 54%, 55%)";
          context.fill();
      }
      aLi[5].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          context.strokeStyle = "hsl(47, 95%, 76%)";
          context.stroke();
      }
      aLi[6].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          let my_gradient = context.createLinearGradient(100, 100, 100, 400);
          my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
          my_gradient.addColorStop(0.5, 'hsl(169, 56%, 73%)');
          my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
          context.fillStyle = my_gradient;
          context.fill();
      }
      aLi[7].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          var my_gradient = context.createRadialGradient(200, 300, 25, 200, 300, 150);
          my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
          my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
          context.fillStyle = my_gradient;
          context.fill();
      }
      aLi[8].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          var imgs = new Image();
          imgs.src = "img/icecream.png";
          imgs.width = '50';
          imgs.height = '50';
          imgs.id = 'pic';
          imgs.onload = function () {
              var pat = context.createPattern(imgs, "repeat");
              context.fillStyle = pat;
              context.fill();
          }
      }
      aLi[9].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          canvas.style.background = "hsl(0,0%,90%)";
          context.fillStyle = "hsl(0,0%,100%)";
          context.shadowBlur = 6;
          context.shadowColor = "black";
          context.fill();
      }
      aLi[10].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          canvas.style.background = "hsl(0,0%,90%)";
          context.fillStyle = "hsl(0,0%,100%)";
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.shadowBlur = 6;
          context.shadowColor = "black";
          context.fill();
      }
      aLi[11].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(100, 100);
          context.lineTo(100, 400);
          context.lineTo(500, 400);
          context.lineTo(100, 100);
          canvas.style.background = "hsl(0,0%,90%)";
          context.fillStyle = "hsl(0,0%,100%)";
          context.shadowBlur = 10;
          context.shadowColor = "black";
          context.shadowOffsetX = 30;
          context.shadowOffsetY = 10;
          context.fill();
      }
  })();

  /* demo-mark-2 */
  (function () {
      let canvas = document.getElementById('demo2');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      //   canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";

      //   context.moveTo(200, 300);
      //   context.lineTo(500, 300);

      /* lineWidth */
      //   context.lineWidth = 20;
      //   context.stroke();

      /* lineCap 线帽 
       * butt 默认。向线条的每个末端添加平直的边缘。
       * round 向线条的每个末端添加圆形线帽。
       * square 向线条的每个末端添加正方形线帽。
       */
      //   context.lineWidth = 30;
      //   context.beginPath();
      //   context.moveTo(200, 300);
      //   context.lineTo(500, 300);
      //   context.lineCap = 'butt';
      //   context.stroke();

      //   context.beginPath();
      //   context.moveTo(200, 100);
      //   context.lineTo(500, 100);
      //   context.lineCap = 'round';
      //   context.stroke();

      //   context.beginPath();
      //   context.moveTo(200, 200);
      //   context.lineTo(500, 200);
      //   context.lineCap = 'square';
      //   context.stroke();

      /* lineJoin 
       * bevel 斜角
       * round 圆角
       * miter 默认。创建尖角。
       */
      //   context.moveTo(200, 300);
      //   context.lineTo(500, 300);
      //   context.lineTo(200, 100);
      //   context.lineWidth = 30;
      //   context.lineJoin = 'bevel';
      //   context.stroke();

      // context.lineWidth = 30;
      // context.beginPath();
      // context.moveTo(20, 300);
      // context.lineTo(220, 300);
      // context.lineTo(20, 200);
      // context.lineJoin = 'bevel';
      // context.stroke();

      // context.beginPath();
      // context.moveTo(270, 300);
      // context.lineTo(470, 300);
      // context.lineTo(270, 200);
      // context.lineJoin = 'round';
      // context.stroke();

      // context.beginPath();
      // context.moveTo(520, 300);
      // context.lineTo(720, 300);
      // context.lineTo(520, 200);
      // context.lineJoin = 'miter';
      // context.stroke();

      /* miterLimit 
       * number 正数。规定最大斜接长度。如果斜接长度超过 miterLimit 的值，边角会以 lineJoin 的 "bevel" 类型来显示。
       */
      //   context.moveTo(200, 300);
      //   context.lineTo(500, 300);
      //   context.lineTo(200, 250);
      //   context.lineWidth = 30;
      //   context.miterLimit = 10;
      //   context.stroke();

      let oDemo = document.querySelector('#content .demo2 .title')
      let aLi = document.querySelectorAll('#content .demo2 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(200, 300);
          context.lineTo(500, 300);
          context.lineWidth = 20;
          context.stroke();
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.font = '30px Gill Sans';
          context.lineWidth = 30;
          context.beginPath();
          context.moveTo(200, 300);
          context.lineTo(500, 300);
          context.lineCap = 'butt';
          context.stroke();
          context.fillText('butt', 200, 280);

          context.beginPath();
          context.moveTo(200, 100);
          context.lineTo(500, 100);
          context.lineCap = 'round';
          context.stroke();
          context.fillText('round', 200, 80);

          context.beginPath();
          context.moveTo(200, 200);
          context.lineTo(500, 200);
          context.lineCap = 'square';
          context.fillText('square', 200, 180);
          context.stroke();
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.font = '30px Gill Sans';
          context.lineWidth = 30;
          context.beginPath();
          context.moveTo(20, 300);
          context.lineTo(220, 300);
          context.lineTo(20, 200);
          context.lineJoin = 'bevel';
          context.stroke();
          context.fillText('bevel', 20, 350);

          context.beginPath();
          context.moveTo(270, 300);
          context.lineTo(470, 300);
          context.lineTo(270, 200);
          context.lineJoin = 'round';
          context.stroke();
          context.fillText('round', 270, 350);

          context.beginPath();
          context.moveTo(520, 300);
          context.lineTo(720, 300);
          context.lineTo(520, 200);
          context.lineJoin = 'miter';
          context.stroke();
          context.fillText('miter', 520, 350);
      }

      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.moveTo(200, 300);
          context.lineTo(500, 300);
          context.lineTo(200, 200);
          context.lineWidth = 30;
          context.miterLimit = 2;
          context.stroke();
      }
  })();

  /* demo-mark-3 */
  (function () {
      let canvas = document.getElementById('demo3');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      //   canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(209, 71%, 62%), hsl(195, 66%, 60%))";

      /* rect */
      //   context.lineWidth = 6;
      // context.moveTo(300, 200);
      // context.lineTo(500,200);
      // context.lineTo(500,300);
      // context.lineTo(300,300);
      // context.lineTo(300, 200);
      // context.stroke();

      // context.rect(300, 200, 200, 100);
      // context.lineJoin = 'round';
      // context.stroke();

      /* strokeRect */
      //   context.lineJoin = 'bevel';
      //   context.strokeStyle = 'hsl(47, 95%, 76%)';
      //   context.strokeRect(300,200,200,100);

      /* fillRect */
      // let my_gradient = context.createLinearGradient(100, 100, 100, 400);
      // my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
      // my_gradient.addColorStop(0.5, 'hsl(169, 56%, 73%)');
      // my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
      // context.fillStyle = my_gradient;
      // context.fillRect(300, 200, 200, 100);

      /* clearRect 
       * x 要清除的矩形左上角的 x 坐标
       * y 要清除的矩形左上角的 y 坐标
       * width 要清除的矩形的宽度，以像素计
       * height 要清除的矩形的高度，以像素计
       */
      //   let my_gradient = context.createLinearGradient(100, 100, 100, 400);
      //   my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
      //   my_gradient.addColorStop(0.5, 'hsl(169, 56%, 73%)');
      //   my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
      //   context.fillStyle = my_gradient;
      //   context.fillRect(100, 100, 600, 300);
      //   context.clearRect(150, 150, 50, 50);

      let oDemo = document.querySelector('#content .demo3 .title')
      let aLi = document.querySelectorAll('#content .demo3 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(209, 71%, 62%), hsl(195, 66%, 60%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.strokeStyle = 'black';
          context.rect(300, 200, 200, 100);
          context.lineJoin = 'round';
          context.stroke();
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.lineJoin = 'bevel';
          context.strokeStyle = 'hsl(47, 95%, 76%)';
          context.strokeRect(300, 200, 200, 100);
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let my_gradient = context.createLinearGradient(100, 100, 100, 400);
          my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
          my_gradient.addColorStop(0.5, 'hsl(169, 56%, 73%)');
          my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
          context.fillStyle = my_gradient;
          context.fillRect(300, 200, 200, 100);
      }

      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let my_gradient = context.createLinearGradient(100, 100, 100, 400);
          my_gradient.addColorStop(0, 'hsl(0, 83%, 73%)');
          my_gradient.addColorStop(0.5, 'hsl(169, 56%, 73%)');
          my_gradient.addColorStop(1, 'hsl(87, 100%, 91%)');
          context.fillStyle = my_gradient;
          context.fillRect(100, 100, 600, 300);
          context.clearRect(150, 150, 50, 50);
      }
  })();

  /* demo-mark-4 */
  (function () {
      let canvas = document.getElementById('demo4');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      //   canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";

      /* quadraticCurveTo 
       * cpx 贝塞尔控制点的 x 坐标
       * cpy 贝塞尔控制点的 y 坐标
       * x 结束点的 x 坐标
       * y 结束点的 y 坐标
       */
      // context.lineWidth = 10;
      // context.moveTo(200, 200);
      // context.quadraticCurveTo(200, 400, 600, 200);
      // context.stroke();

      /* 显示控制线 */
      //   context.lineWidth = 10;
      //   context.moveTo(200, 200);
      //   context.quadraticCurveTo(200, 400, 600, 200);
      //   context.stroke();

      //   context.lineWidth = 1;
      //   context.setLineDash([5]);
      //   context.beginPath();
      //   context.moveTo(200, 200);
      //   context.lineTo(200, 400);
      //   context.lineTo(600, 200);
      //   context.closePath();
      //   context.stroke();

      /* bezierCurveTo 
       * cp1x 第一个贝塞尔控制点的 x 坐标
       * cp1y 第一个贝塞尔控制点的 y 坐标
       * cp2x 第二个贝塞尔控制点的 x 坐标
       * cp2y 第二个贝塞尔控制点的 y 坐标
       * x 结束点的 x 坐标
       * y 结束点的 y 坐标
       */
      //   context.lineWidth = 10;
      //   context.moveTo(200, 200);
      //   context.bezierCurveTo(200, 400, 600, 400, 600, 200);
      //   context.stroke();

      /* 显示控制线 */
      //   context.lineWidth = 10;
      //   context.moveTo(200, 200);
      //   context.bezierCurveTo(200, 400, 600, 400, 600, 200);
      //   context.stroke();

      //   context.lineWidth = 1;
      //   context.setLineDash([5]);
      //   context.beginPath();
      //   context.moveTo(200, 200);
      //   context.lineTo(200, 400);
      //   context.lineTo(600, 200);
      //   context.closePath();
      //   context.stroke();

      //   context.beginPath();
      //   context.moveTo(200, 200);
      //   context.lineTo(600, 200);
      //   context.lineTo(600, 400);
      //   context.closePath();
      //   context.stroke();

      /* arc 
       * x 圆的中心的 x 坐标。
       * y 圆的中心的 y 坐标。
       * r 圆的半径。
       * sAngle 起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
       * eAngle 结束角，以弧度计。
       * counterclockwise 可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
       */
      //   context.lineWidth = 6;
      //   context.arc(400, 250, 100, 0, 1 * Math.PI, true);
      //   context.stroke();

      /* arcTo 
       * x1 弧的起点的 x 坐标
       * y1 弧的起点的 y 坐标
       * x2 弧的终点的 x 坐标
       * y2 弧的终点的 y 坐标
       * r 弧的半径
       */
      //   context.lineWidth = 6;
      //   context.moveTo(0, 0);
      // //   context.lineTo(400, 200);
      //   context.arcTo(500, 200, 400, 300, 50);
      //   context.lineTo(500, 400);
      //   context.stroke();

      /* 显示切线 */
      // context.lineWidth = 6;
      // context.moveTo(200, 200);
      // context.lineTo(400, 200);
      // context.arcTo(500, 200, 500, 300, 100);
      // context.stroke();
      // context.beginPath();
      // context.setLineDash([6]);
      // context.moveTo(400, 200);
      // context.lineTo(500, 200);
      // context.lineTo(500, 300);
      // context.stroke();
      // context.beginPath();
      // context.setLineDash([0]);
      // context.moveTo(500, 300);
      // context.lineTo(500, 400);
      // context.stroke();

      let oDemo = document.querySelector('#content .demo4 .title')
      let aLi = document.querySelectorAll('#content .demo4 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.lineWidth = 10;
          context.setLineDash([0]);
          context.moveTo(200, 200);
          context.quadraticCurveTo(200, 400, 600, 200);
          context.stroke();

          context.lineWidth = 1;
          context.setLineDash([5]);
          context.beginPath();
          context.moveTo(200, 200);
          context.lineTo(200, 400);
          context.lineTo(600, 200);
          context.closePath();
          context.stroke();
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.setLineDash([0]);
          context.lineWidth = 10;
          context.moveTo(200, 200);
          context.bezierCurveTo(200, 400, 600, 400, 600, 200);
          context.stroke();

          context.lineWidth = 1;
          context.setLineDash([5]);
          context.beginPath();
          context.moveTo(200, 200);
          context.lineTo(200, 400);
          context.lineTo(600, 200);
          context.closePath();
          context.stroke();

          context.beginPath();
          context.moveTo(200, 200);
          context.lineTo(600, 200);
          context.lineTo(600, 400);
          context.closePath();
          context.stroke();
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.lineWidth = 6;
          context.setLineDash([0]);
          context.arc(400, 250, 100, 0, 2 * Math.PI, false);
          context.stroke();
      }

      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.lineWidth = 6;
          context.setLineDash([0]);
          context.moveTo(200, 200);
          context.lineTo(400, 200);
          context.arcTo(500, 200, 500, 300, 100);
          context.stroke();
          context.beginPath();
          context.setLineDash([6]);
          context.moveTo(400, 200);
          context.lineTo(500, 200);
          context.lineTo(500, 300);
          context.stroke();
          context.beginPath();
          context.setLineDash([0]);
          context.moveTo(500, 300);
          context.lineTo(500, 400);
          context.stroke();
      }
  })();

  /* demo-mark-5 */
  (function () {
      let canvas = document.getElementById('demo5');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      //   canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";

      /* beginPath */
      //   context.lineWidth = 10;
      //   context.strokeStyle = 'hsl(0, 83%, 73%)';
      //   context.moveTo(200, 200);
      //   context.lineTo(400, 200);
      //   context.stroke();

      //   context.beginPath();
      //   context.strokeStyle = 'hsl(47, 95%, 76%)';
      //   context.moveTo(200, 300);
      //   context.lineTo(400, 300);
      //   context.stroke();

      /* closePath */
      //   context.lineWidth = 10;
      //   context.strokeStyle = 'hsl(47, 95%, 76%)';
      //   context.moveTo(200, 200);
      //   context.lineTo(400, 200);
      //   context.lineTo(300, 400);
      // // context.closePath();
      //   context.stroke();

      /* 平行线情况下的closePath */
      //   context.lineWidth = 10;
      //   context.strokeStyle = 'hsl(47, 95%, 76%)';
      //   context.moveTo(200, 200);
      //   context.lineTo(400, 200);
      //   context.moveTo(200, 300);
      //   context.lineTo(400, 300);
      //   context.lineTo(350, 200);
      //   context.closePath();
      //   context.stroke();

      /* clip 裁剪*/
      //   context.rect(50,50,200,120);
      // context.beginPath();
      // context.moveTo(100,100);
      // context.lineTo(200,200);
      // context.lineTo(300,200);
      // context.closePath();
      //   context.stroke();
      //   context.clip();
      //   context.fillStyle="hsl(0, 83%, 73%)";
      //   context.fillRect(0,0,350,200);

      /* isPointInPath */
      //   context.lineWidth = 6;
      //   context.strokeStyle = 'hsl(47, 95%, 76%)';
      //   context.rect(300, 150, 250, 175);
      //   context.stroke();
      //   context.font = '20px Gill Sans';
      //   let _Text = context.isPointInPath(300, 150);
      //   let _Text2 = context.isPointInPath(100, 150);
      //   let _Text3 = context.isPointInPath(400,250);
      //   console.log(context.isPointInPath(299, 150));
      //   context.fillText('(300,150)在路径上吗？' + _Text, 100, 40);
      //   context.fillText('(100,150)在路径上吗？' + _Text2, 100, 80);
      //   context.fillText('(400,250)在路径上吗？' + _Text3, 100, 120);

      let oDemo = document.querySelector('#content .demo5 .title')
      let aLi = document.querySelectorAll('#content .demo5 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.lineWidth = 10;
          context.strokeStyle = 'hsl(0, 83%, 73%)';
          context.moveTo(200, 200);
          context.lineTo(400, 200);
          context.stroke();

          context.strokeStyle = 'hsl(47, 95%, 76%)';
          context.beginPath();
          context.moveTo(200, 300);
          context.lineTo(400, 300);
          context.stroke();
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.lineWidth = 10;
          context.strokeStyle = 'hsl(47, 95%, 76%)';
          context.moveTo(200, 200);
          context.lineTo(400, 200);
          context.lineTo(300, 400);
          context.closePath();
          context.stroke();
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.rect(50, 50, 200, 120);
          context.stroke();
          context.clip();
          context.fillStyle = "hsl(0, 83%, 73%)";
          context.fillRect(0, 0, 350, 200);
      }

      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.save();
          context.lineWidth = 6;
          context.strokeStyle = 'hsl(47, 95%, 76%)';
          context.rect(300, 150, 250, 175);
          context.stroke();
          context.font = '20px Gill Sans';
          let _Text = context.isPointInPath(300, 150);
          let _Text2 = context.isPointInPath(100, 150);
          let _Text3 = context.isPointInPath(400, 250);
          console.log(context.isPointInPath(300, 150));
          context.fillText('(300,150)在路径上吗？' + _Text, 100, 40);
          context.fillText('(100,150)在路径上吗？' + _Text2, 100, 80);
          context.fillText('(400,250)在路径上吗？' + _Text3, 100, 120);
          context.restore();
      }
  })();

  /* demo-mark-6 */
  (function () {
      let canvas = document.getElementById('demo6');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      //   canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(209, 71%, 62%), hsl(195, 66%, 60%))";

      /* strokeText & fillText */
      // context.font = '50px Gill Sans';
      // context.strokeText('strokeText', 300, 200, 200);
      // context.fillText('fillText', 300, 300, 200);

      /* font */
      /* .font-size和font-family不能够省略，且位置不能够互换: */
      //   context.font = '40px';
      //   context.fillText('Canvas', 300, 100);

      //   context.font = 'Gill Sans';
      //   context.fillText('Canvas', 300, 150);

      //   context.font = 'Gill Sans 40px';
      //   context.fillText('Canvas', 300, 200);

      //   context.font = '40px Gill Sans';
      //   context.fillText('Canvas', 300, 250);

      /* font-style */
      // context.font = 'normal 40px Gill Sans';
      // context.fillText('normal', 300, 100);
      // context.font = 'italic 40px Gill Sans'
      // context.fillText('italic', 300, 200);
      // context.font = 'oblique 40px Gill Sans'
      // context.fillText('oblique', 300, 300);

      /* font-variant 字体变体*/
      //   context.font = 'normal normal 40px Gill Sans';
      //   context.fillText('normal', 300, 100);
      //   context.font = 'normal small-caps 40px Gill Sans'
      //   context.fillText('SMall-caps', 300, 200);

      /* font-weight 粗细*/
      // context.font = 'normal small-caps normal 40px Gill Sans';
      // context.fillText('normal', 300, 100);
      // context.font = 'normal small-caps bold 40px Gill Sans'
      // context.fillText('bold', 300, 150);
      // context.font = 'normal small-caps bolder 40px Gill Sans'
      // context.fillText('bolder', 300, 200);
      // context.font = 'normal small-caps lighter 40px Gill Sans'
      // context.fillText('lighter', 300, 250);
      // context.font = 'normal small-caps 100 40px Gill Sans'
      // context.fillText('100', 300, 300);
      // context.font = 'normal small-caps 200 40px Gill Sans'
      // context.fillText('200', 300, 350);
      // context.font = 'normal small-caps 400 40px Gill Sans'
      // context.fillText('400', 300, 400);
      // context.font = 'normal small-caps 1000 40px Gill Sans'
      // context.fillText('1000', 300, 450);

      /* textAlign 
       *  start 默认。文本在指定的位置开始。
       */
      // context.strokeStyle = "hsl(47, 95%, 76%)";
      // context.lineWidth = 6;
      // context.moveTo(400, 110);
      // context.lineTo(400, 400);
      // context.stroke();

      // context.font = '30px Gill Sans';
      // context.textAlign = "center";
      // context.fillText("textAlign=center", 400, 150);

      // context.textAlign = "start";
      // context.fillText("textAlign=start", 400, 200);

      // context.textAlign = "end";
      // context.fillText("textAlign=end", 400, 250);

      // context.textAlign = "right";
      // context.fillText("textAlign=right", 400, 300);

      // context.textAlign = "left";
      // context.fillText("textAlign=left", 400, 350);

      /* textBaseline 
       * alphabetic 默认。文本基线是普通的字母基线。
       * top 文本基线是 em 方框的顶端。
       * hanging 文本基线是悬挂基线。
       * middle 文本基线是 em 方框的正中。
       * bottom 文本基线是 em 方框的底端。
       */
      // context.strokeStyle = "hsl(47, 95%, 76%)";
      // context.lineWidth = 6;
      // context.moveTo(100, 250);
      // context.lineTo(700, 250);
      // context.stroke();

      // context.font = '30px Gill Sans';

      // context.textBaseline = "top";
      // context.fillText("Top", 100, 250);
      // context.textBaseline = "bottom";
      // context.fillText("Bottom", 170, 250);
      // context.textBaseline = "middle";
      // context.fillText("Middle", 300, 250);
      // context.textBaseline = "alphabetic";
      // context.fillText("Alphabetic", 420, 250);
      // context.textBaseline = "hanging";
      // context.fillText("Hanging", 570, 250);

      /* measureText */
      //   context.font = '40px Gill Sans';
      //   var _Text = 'Canvas';
      //   context.fillText("width:" + context.measureText(_Text).width, 10, 50);
      //   context.fillText('Canvas', 300, 250);

      let oDemo = document.querySelector('#content .demo6 .title')
      let aLi = document.querySelectorAll('#content .demo6 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(209, 71%, 62%), hsl(195, 66%, 60%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = '50px Gill Sans';
          context.strokeStyle = "black";
          context.lineWidth = 1;
          context.strokeText('strokeText', 300, 200, 200);
          context.fillText('fillText', 300, 300, 200);
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = '50px Gill Sans';
          context.strokeStyle = "black";
          context.lineWidth = 1;
          context.strokeText('strokeText', 300, 200, 200);
          context.fillText('fillText', 300, 300, 200);
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = '40px Gill Sans';
          context.fillText('Canvas', 300, 250);
      }

      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = '20px Arial';
          context.fillText('Canvas', 300, 250);
      }

      aLi[4].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = 'normal 40px Gill Sans';
          context.fillText('normal', 300, 100);
          context.font = 'italic 40px Gill Sans'
          context.fillText('italic', 300, 200);
          context.font = 'oblique 40px Gill Sans'
          context.fillText('oblique', 300, 300);
      }

      aLi[5].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = 'normal normal 40px Gill Sans';
          context.fillText('normal', 300, 100);
          context.font = 'normal small-caps 40px Gill Sans'
          context.fillText('small-caps', 300, 200);
      }

      aLi[6].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = 'normal small-caps normal 40px Gill Sans';
          context.fillText('normal', 300, 100);
          context.font = 'normal small-caps bold 40px Gill Sans'
          context.fillText('bold', 300, 150);
          context.font = 'normal small-caps bolder 40px Gill Sans'
          context.fillText('bolder', 300, 200);
          context.font = 'normal small-caps lighter 40px Gill Sans'
          context.fillText('lighter', 300, 250);
          context.font = 'normal small-caps 100 40px Gill Sans'
          context.fillText('100', 300, 300);
          context.font = 'normal small-caps 200 40px Gill Sans'
          context.fillText('200', 300, 350);
          context.font = 'normal small-caps 400 40px Gill Sans'
          context.fillText('400', 300, 400);
          context.font = 'normal small-caps 1000 40px Gill Sans'
          context.fillText('1000', 300, 450);
      }

      aLi[7].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.strokeStyle = "hsl(47, 95%, 76%)";
          context.lineWidth = 6;
          context.moveTo(400, 110);
          context.lineTo(400, 400);
          context.stroke();

          context.font = '30px Gill Sans';
          context.textAlign = "center";
          context.fillText("textAlign=center", 400, 150);

          context.textAlign = "start";
          context.fillText("textAlign=start", 400, 200);

          context.textAlign = "end";
          context.fillText("textAlign=end", 400, 250);

          context.textAlign = "right";
          context.fillText("textAlign=right", 400, 300);

          context.textAlign = "left";
          context.fillText("textAlign=left", 400, 350);

      }

      aLi[8].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.strokeStyle = "hsl(47, 95%, 76%)";
          context.lineWidth = 6;
          context.moveTo(100, 250);
          context.lineTo(700, 250);
          context.stroke();

          context.font = '30px Gill Sans';

          context.textBaseline = "top";
          context.fillText("Top", 100, 250);
          context.textBaseline = "bottom";
          context.fillText("Bottom", 170, 250);
          context.textBaseline = "middle";
          context.fillText("Middle", 300, 250);
          context.textBaseline = "alphabetic";
          context.fillText("Alphabetic", 420, 250);
          context.textBaseline = "hanging";
          context.fillText("Hanging", 570, 250);
      }

      aLi[9].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          context.font = '40px Gill Sans';
          var _Text = 'Canvas';
          context.fillText("width:" + context.measureText(_Text).width, 10, 50);
          context.fillText('Canvas', 300, 250);
      }
  })();

  /* demo-mark-7 */
  (function () {
      let canvas = document.getElementById('demo7');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      //   canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";

      /* drawImage 
       * img 规定要使用的图像、画布或视频。
       * sx 可选。开始剪切的 x 坐标位置。
       * sy 可选。开始剪切的 y 坐标位置。
       * swidth 可选。被剪切图像的宽度。
       * sheight 可选。被剪切图像的高度。
       * x 在画布上放置图像的 x 坐标位置。
       * y 在画布上放置图像的 y 坐标位置。
       * width 可选。要使用的图像的宽度。（伸展或缩小图像）
       * height 可选。要使用的图像的高度。（伸展或缩小图像）
       */
      //   let img = new Image();
      //   img.src = 'img/img.jpeg';
      //   img.onload = function () {
      //     //   context.drawImage(img,0,0);
      //     //   context.drawImage(img,0,0,50,50);
      //     //   context.drawImage(img,300,150,200,200);
      //       context.drawImage(img,0,500,200,200,300,150,200,200);

      //       // for(let i = 0; i<10; i++){
      //       //     context.drawImage(img,i*80,i*50,50,50);
      //       // }
      //   }

      /* createImageData 
      对于 ImageData 对象中的每个像素，都存在着四方面的信息
      * R - 红色 (0-255)
      * G - 绿色 (0-255)
      * B - 蓝色 (0-255)
      * A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
      */
      //   var imgData = context.createImageData(200, 100);
      //   for (var i = 0; i < imgData.data.length; i += 4) {
      //       imgData.data[i + 0] = 0;
      //       imgData.data[i + 1] = 255;
      //       imgData.data[i + 2] = 0;
      //       imgData.data[i + 3] = 100;
      //   }
      //   context.putImageData(imgData, 300, 150);

      /* imgData.width & imgData.height*/
      //   context.font = '20px Gill Sans';
      //   context.fillText("imgData.width=" + imgData.width, 100, 150);
      //   context.fillText("imgData.height=" + imgData.height, 100, 200);

      /* imgData.data */
      //   context.fillText("imgData.height=" + imgData, 100, 300);

      //   for (var i = 0; i < imgData.data.length/4; i += 4) {
      //       imgData.data[i + 0] = 0;
      //       imgData.data[i + 1] = 0;
      //       imgData.data[i + 2] = 0;
      //       imgData.data[i + 3] = 255;
      //   }
      //   context.putImageData(imgData, 300, 150);

      /* getImageData */
      //   let img2 = new Image();
      //   img2.src = 'img/canvas2.jpg';
      //   img2.onload = function () {
      //       context.drawImage(img2, 0, 0);
      //       let imgData = context.getImageData(0, 0, 800, 500);

      //     // 反转颜色
      //       for (var i = 0; i < imgData.data.length; i += 4) {
      //           imgData.data[i] = 255 - imgData.data[i];
      //           imgData.data[i + 1] = 255 - imgData.data[i + 1];
      //           imgData.data[i + 2] = 255 - imgData.data[i + 2];
      //           imgData.data[i + 3] = 255;
      //       }
      //       context.putImageData(imgData, 0, 0);
      //   }

      /* putImageData 
       * imgData 规定要放回画布的 ImageData 对象。
       * x ImageData 对象左上角的 x 坐标，以像素计。
       * y ImageData 对象左上角的 y 坐标，以像素计。
       * dirtyX 可选。水平值（x），以像素计，在画布上放置图像的位置。
       * dirtyY 可选。水平值（y），以像素计，在画布上放置图像的位置。
       * dirtyWidth 可选。在画布上绘制图像所使用的宽度。
       * dirtyHeight 可选。在画布上绘制图像所使用的高度。
       */
      //   let img3 = new Image();
      //   img3.src = 'img/canvas2.jpg';
      //   img3.onload = function () {
      //       context.drawImage(img3, 0, 0, 940 / 3, 679 / 3);
      //       let imgData = context.getImageData(0, 0, 940 / 3, 679 / 3);
      //       // context.putImageData(imgData, 400, 150);
      //       // context.putImageData(imgData, 400, 150, 0, 0, 940 / 6, 679 / 6);
      //   }

      let oDemo = document.querySelector('#content .demo7 .title');
      let aLi = document.querySelectorAll('#content .demo7 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let img = new Image();
          img.src = 'img/img.jpeg';
          img.onload = function () {
              context.drawImage(img, 0, 0);
          }
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let img = new Image();
          img.src = 'img/img.jpeg';
          img.onload = function () {
              context.drawImage(img, 300, 150, 200, 200);
          }
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let img = new Image();
          img.src = 'img/img.jpeg';
          img.onload = function () {
              context.drawImage(img, 0, 500, 200, 200, 300, 150, 200, 200);
          }
      }

      aLi[3].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          var imgData = context.createImageData(200, 100);
          for (var i = 0; i < imgData.data.length; i += 4) {
              imgData.data[i + 0] = 255;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
          }
          context.putImageData(imgData, 300, 150);
      }

      aLi[4].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          var imgData = context.createImageData(200, 100);
          for (var i = 0; i < imgData.data.length; i += 4) {
              imgData.data[i + 0] = 255;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
          }
          context.putImageData(imgData, 300, 150);
      }

      aLi[5].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          var imgData = context.createImageData(200, 100);
          for (var i = 0; i < imgData.data.length; i += 4) {
              imgData.data[i + 0] = 255;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
          }
          context.putImageData(imgData, 300, 150);
          context.font = '20px Gill Sans';
          context.fillText("imgData.width=" + imgData.width, 100, 150);
          context.fillText("imgData.height=" + imgData.height, 100, 200);
      }

      aLi[6].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          var imgData = context.createImageData(200, 100);
          for (var i = 0; i < imgData.data.length; i += 4) {
              imgData.data[i + 0] = 255;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
          }
          context.putImageData(imgData, 300, 150);


          context.font = '20px Gill Sans';
          context.fillText("imgData.width=" + imgData.width, 100, 150);
          context.fillText("imgData.height=" + imgData.height, 100, 200);
      }

      aLi[7].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();

          var imgData = context.createImageData(200, 100);
          for (var i = 0; i < imgData.data.length; i += 4) {
              imgData.data[i + 0] = 255;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
          }
          context.putImageData(imgData, 300, 150);

          context.font = '20px Gill Sans';
          context.fillText("imgData.height=" + imgData, 100, 300);
          for (var i = 0; i < imgData.data.length / 4; i += 4) {
              imgData.data[i + 0] = 0;
              imgData.data[i + 1] = 0;
              imgData.data[i + 2] = 0;
              imgData.data[i + 3] = 255;
          }
          context.putImageData(imgData, 300, 150);
      }

      aLi[8].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let img2 = new Image();
          img2.src = 'img/canvas2.jpg';
          img2.onload = function () {
              context.drawImage(img2, 0, 0);
              let imgData = context.getImageData(0, 0, 800, 500);
              // 反转颜色
              for (var i = 0; i < imgData.data.length; i += 4) {
                  imgData.data[i] = 255 - imgData.data[i];
                  imgData.data[i + 1] = 255 - imgData.data[i + 1];
                  imgData.data[i + 2] = 255 - imgData.data[i + 2];
                  imgData.data[i + 3] = 255;
              }
              context.putImageData(imgData, 0, 0);
          }
      }

      aLi[9].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.beginPath();
          let img3 = new Image();
          img3.src = 'img/canvas2.jpg';
          img3.onload = function () {
              context.drawImage(img3, 0, 0, 940 / 3, 679 / 3);
              let imgData = context.getImageData(0, 0, 940 / 3, 679 / 3);
              // context.putImageData(imgData, 400, 150);
              context.putImageData(imgData, 400, 150, 0, 0, 940 / 6, 679 / 6);
          }
      }
  })();

  /* demo-mark-8 */
  (function () {
      let canvas = document.getElementById('demo8');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      // canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";
      /* scale */
      // context.strokeRect(10, 10, 150, 75);
      // context.scale(2, 2);
      // context.strokeRect(10, 10, 150, 75);
      // context.scale(2, 2);
      // context.strokeRect(10, 10, 150, 75);

      /* rotate */
      // context.strokeRect(300, 150, 150, 75);
      // context.rotate(30 * Math.PI / 180);
      // context.strokeRect(300, 150, 150, 75);

      // context.strokeRect(0, 0, 150, 75);
      // context.rotate(30 * Math.PI / 180);
      // context.strokeRect(0, 0, 150, 75);

      /* translate */
      // context.strokeRect(300, 150, 150, 75);
      // context.translate(300, 150);
      // context.rotate(30 * Math.PI / 180);
      // context.strokeRect(0, 0, 150, 75);

      /* transform 
       * a 水平缩放绘图
       * b 水平倾斜绘图
       * c 垂直倾斜绘图
       * d 垂直缩放绘图
       * e 水平移动绘图
       * f 垂直移动绘图
       */

      let oDemo = document.querySelector('#content .demo8 .title')
      let aLi = document.querySelectorAll('#content .demo8 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.save();
          context.beginPath();
          context.strokeRect(10, 10, 150, 75);
          context.scale(2, 2);
          context.strokeRect(10, 10, 150, 75);
          context.scale(2, 2);
          context.strokeRect(10, 10, 150, 75);
          context.restore();
      }

      aLi[1].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.save();
          context.beginPath();
          context.strokeRect(300, 150, 150, 75);
          context.rotate(30 * Math.PI / 180);
          context.strokeRect(300, 150, 150, 75);

          context.strokeRect(0, 0, 150, 75);
          context.rotate(30 * Math.PI / 180);
          context.strokeRect(0, 0, 150, 75);
          context.restore();
      }

      aLi[2].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.save();
          context.beginPath();
          context.strokeRect(300, 150, 150, 75);
          context.translate(300, 150);
          context.rotate(30 * Math.PI / 180);
          context.strokeRect(0, 0, 150, 75);
          context.restore();
      }

      // for (i = 0; i < aLi.length; i++) {
      //     console.log(i + "#####" + aLi[i].innerHTML)
      // }

      for (i = 5; i < aLi.length; i++) {
          aLi[i].style.display = 'none';
      }

      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";
          context.shadowBlur = 0;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
      }

      aLi[3].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 5; i < 12; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[5].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 0; i < 5; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      /* transform-a */
      aLi[6].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 12; i < 21; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[12].onclick = function () {
          returnToL1();
      }

      for (i = 13; i < 21; i++) {
          let j = i;
          aLi[i].onclick = function () {
              renderTransPara(j);
          }
      }

      /* transform-b */
      aLi[7].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 21; i < 31; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[21].onclick = function () {
          returnToL1();
      }

      for (i = 22; i < 31; i++) {
          let j = i;
          aLi[i].onclick = function () {
              renderTransPara(j);
          }
      }

      /* transform-c */
      aLi[8].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 31; i < 41; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[31].onclick = function () {
          returnToL1();
      }

      for (i = 32; i < 41; i++) {
          let j = i;
          aLi[i].onclick = function () {
              renderTransPara(j);
          }
      }

      /* transform-d */
      aLi[9].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 41; i < 52; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[41].onclick = function () {
          returnToL1();
      }

      for (i = 42; i < 52; i++) {
          let j = i;
          aLi[i].onclick = function () {
              renderTransPara(j);
          }
      }

      /* transform-e */
      aLi[10].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 52; i < 65; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[52].onclick = function () {
          returnToL1();
      }

      for (i = 53; i < 65; i++) {
          let j = i;
          aLi[i].onclick = function () {
              renderTransPara(j);
          }
      }

      /* transform-f */
      aLi[11].onclick = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 65; i < 76; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      aLi[65].onclick = function () {
          returnToL1();
      }

      for (i = 66; i < 76; i++) {
          let j = i;
          aLi[i].onclick = function () {
              renderTransPara(j);
          }
      }

      let returnToL1 = function () {
          for (i = 0; i < aLi.length; i++) {
              aLi[i].style.display = 'none';
          }
          for (i = 5; i < 12; i++) {
              aLi[i].style.display = 'flex';
          }
      }

      let renderTransPara = function (i) {
          let transPara = aLi[i].innerText;
          context.clearRect(0, 0, 800, 500);
          context.setTransform(transPara.split(',')[0], transPara.split(',')[1], transPara.split(',')[2],
              transPara.split(',')[3], transPara.split(',')[4], transPara.split(',')[5]);
          context.fillStyle = 'lightblue';
          context.fillRect(300, 150, 350, 175);
          context.fillStyle = 'hsl(0, 83%, 73%)';
          context.font = '40px Gill Sans';
          context.fillText('Transform' + transPara, 60, 80);
      }
  })();

  /* demo-mark-9 */
  (function () {
      let canvas = document.getElementById('demo9');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      // canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(209, 71%, 62%), hsl(195, 66%, 60%))";

      /* globalAlpha */
      //   context.fillStyle = "hsl(0, 83%, 73%)";
      //   context.fillRect(100, 100, 200, 100);
      //   context.globalAlpha = 0.5;
      //   context.fillRect(300, 250, 200, 100);
      //   context.fillStyle = 'hsl(47, 95%, 76%)';
      //   context.fillRect(350, 300, 200, 100);

      /* globalCompositeOperation */

      let oDemo = document.querySelector('#content .demo9 .title')
      let aLi = document.querySelectorAll('#content .demo9 ul li');
      let styleToggle = 0;

      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(209, 71%, 62%), hsl(195, 66%, 60%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.save();
          context.beginPath();
          context.fillStyle = "hsl(0, 83%, 73%)";
          context.fillRect(100, 100, 200, 100);
          context.globalAlpha = 0.5;
          context.fillRect(300, 250, 200, 100);
          context.fillStyle = 'hsl(47, 95%, 76%)';
          context.fillRect(350, 300, 200, 100);
          context.restore();
      }

      // for (i = 0; i < aLi.length; i++) {
      //     console.log(i + "#####" + aLi[i].innerHTML)
      // }

      for (i = 2; i < aLi.length; i++) {
          aLi[i].style.display = 'none';
      }

      aLi[1].onclick = function () {
          if (styleToggle == 0) {
              for (i = 2; i < aLi.length; i++) {
                  aLi[i].style.display = 'flex';
              }
              styleToggle = 1;
          } else {
              for (i = 2; i < aLi.length; i++) {
                  aLi[i].style.display = 'none';
              }
              styleToggle = 0;
          }
      }

      for (i = 2; i < aLi.length; i++) {
          let j = i;
          aLi[i].onclick = function () {
              composite(j);
              console.log(j);
          }
      }

      let composite = function (i) {
          let compPara = trim(aLi[i].innerText.split('=>')[0]);
          context.clearRect(0, 0, 800, 500);
          context.globalCompositeOperation = 'source-over';
          context.fillStyle = 'hsl(0, 83%, 73%)';
          context.fillRect(250, 150, 200, 100);
          context.globalCompositeOperation = compPara;
          context.fillStyle = 'hsl(47, 95%, 76%)';
          context.fillRect(350, 200, 200, 100);
          console.log(compPara);
      }

      function trim(s) {
          return s.replace(/(^\s*)|(\s*$)/g, "");
      }
  })();

  /* demo-mark-10 */
  (function () {
      let canvas = document.getElementById('demo10');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
      // canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";

      /* save & restore */
      // context.font = '40px Gill Sans'
      // context.fillStyle = 'hsl(0, 83%, 73%)';
      // context.fillRect(100, 50, 200, 100);
      // context.fillText('1', 100, 50);
      // context.save();

      // context.fillStyle = 'hsl(47, 95%, 76%)';
      // context.fillRect(100, 200, 200, 100);
      // context.fillText('2', 100, 200);
      // context.save();

      // context.fillStyle = 'lightblue';
      // context.fillRect(100, 350, 200, 100);
      // context.fillText('3', 100, 350);
      // context.save();

      // context.restore();
      // context.fillRect(500, 50, 200, 100);
      // context.fillText('4', 500, 50);

      // context.restore();
      // context.fillRect(500, 200, 200, 100);
      // context.fillText('5', 500, 200);

      // context.restore();
      // context.fillRect(500, 350, 200, 100);
      // context.fillText('6', 500, 350);

      let oDemo = document.querySelector('#content .demo10 .title')
      let aLi = document.querySelectorAll('#content .demo10 ul li');
      let styleToggle = 0;

      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(217, 66%, 70%), hsl(246, 81%, 81%))";
      }

      aLi[0].onclick = function () {
          context.clearRect(0, 0, 800, 500);
          context.save();
          context.beginPath();
          context.font = '40px Gill Sans'
          context.fillStyle = 'hsl(0, 83%, 73%)';
          context.fillRect(100, 50, 200, 100);
          context.fillText('1', 100, 50);
          context.save();

          context.fillStyle = 'hsl(47, 95%, 76%)';
          context.fillRect(100, 200, 200, 100);
          context.fillText('2', 100, 200);
          context.save();

          context.fillStyle = 'lightblue';
          context.fillRect(100, 350, 200, 100);
          context.fillText('3', 100, 350);
          context.save();

          context.restore();
          context.fillRect(500, 50, 200, 100);
          context.fillText('4', 500, 50);

          context.restore();
          context.fillRect(500, 200, 200, 100);
          context.fillText('5', 500, 200);

          context.restore();
          context.fillRect(500, 350, 200, 100);
          context.fillText('6', 500, 350);
          context.restore();
      }
  })();

  /* demo-mark-11 */
  (function () {
      let canvas = document.getElementById('demo11');
      let context = canvas.getContext('2d');

      canvas.width = 800;
      canvas.height = 500;
        canvas.style.background = "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";

      /* toDataURL */
    //   context.fillStyle = "white";
    //   context.fillRect(0,0,800,500);
    //   let img = new Image();
    //   img.src = 'img/img.jpeg';
    //   img.onload = function () {
    //       for (let i = 0; i < 10; i++) {
    //           context.drawImage(img, i * 80, i * 50, 50, 50);
    //       }
    //       // let img2 = document.getElementById('imageTest1');
    //       // img2.src = canvas.toDataURL('image.png', 1);
    //   }

      /* canvas优化 */
        // let canvasHide = document.createElement('canvas');
        // canvasHide.width = canvas.width;
        // canvasHide.height = canvas.height;
        // let contextHide = canvasHide.getContext('2d');

        // for (let i = 0; i < 10; i++) {
        //     contextHide.strokeRect(Math.random() * 800, Math.random() * 500, Math.random() * 100, Math
        //     .random() * 100);
        // }
        // context.drawImage(canvasHide, 0, 0);

      /* 几何计算 */
      // context.lineWidth = 6;
      // context.beginPath();
      // context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      // context.stroke();
      // context.beginPath();
      // context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      // context.stroke();

      //   // 监听点击事件
      //   canvas.addEventListener("click", function (event) {
      //       let x = getMousePosX(canvas, event);
      //       let y = getMousePosY(canvas, event);
      //       console.log('x:' + x + ',y:' + y);
      //       console.log((x - 400) * (x - 400));
      //       console.log((y - 250) * (y - 250));
      //       console.log(100 * 100);

      //       if ((x - 250) * (x - 250) + (y - 250) * (y - 250) <= 100 * 100) {
      //           context.save();
      //           context.fillStyle = 'hsl(0, 83%, 73%)';
      //           context.beginPath();
      //           context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      //           context.fill();
      //           context.restore();
      //       } else if ((x - 550) * (x - 550) + (y - 250) * (y - 250) <= 100 * 100) {
      //           context.save();
      //           context.fillStyle = 'hsl(47, 95%, 76%)';
      //           context.beginPath();
      //           context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      //           context.fill();
      //           context.restore();
      //       }
      //   });

      //   function getMousePosX(canvas, event) {
      //       var rect = canvas.getBoundingClientRect();
      //       var x = event.clientX - rect.left * (canvas.width / rect.width);
      //       var y = event.clientY - rect.top * (canvas.height / rect.height);
      //       return x;
      //   }

      //   function getMousePosY(canvas, event) {
      //       var rect = canvas.getBoundingClientRect();
      //       var y = event.clientY - rect.top * (canvas.height / rect.height);
      //       return y;
      //   }

      /* 图形序号 */
      // context.lineWidth = 6;
      // context.beginPath();
      // context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      // context.stroke();
      // context.beginPath();
      // context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      // context.stroke();

      // let blackboard = document.querySelector('.demo11 .blackboard');
      // let canvasHide = document.createElement('canvas');
      // canvasHide.width = canvas.width;
      // canvasHide.height = canvas.height;
      // let contextHide = canvasHide.getContext('2d');
      // const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

      // contextHide.beginPath();
      // contextHide.save();
      // contextHide.fillStyle = '#000001';
      // contextHide.arc(250, 250, 100, 0, 2 * Math.PI, false);
      // contextHide.fill();
      // contextHide.fillStyle = '#000002';
      // contextHide.beginPath();
      // contextHide.arc(550, 250, 100, 0, 2 * Math.PI, false);
      // contextHide.fill();

      // canvas.addEventListener("click", function (event) {
      //     let x = getMousePosX(canvas, event);
      //     let y = getMousePosY(canvas, event);
      //     let color = contextHide.getImageData(x, y, 1, 1).data;
      //     let hex = RGBToHex(color[0], color[1], color[2]);

      //     if (hex == '000001') {
      //         context.save();
      //         context.fillStyle = 'hsl(0, 83%, 73%)';
      //         context.beginPath();
      //         context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      //         context.fill();
      //         context.restore();
      //     } else if (hex == '000002') {
      //         context.save();
      //         context.fillStyle = 'hsl(47, 95%, 76%)';
      //         context.beginPath();
      //         context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      //         context.fill();
      //         context.restore();
      //     }
      // });

      function getMousePosX(canvas, event) {
          var rect = canvas.getBoundingClientRect();
          var x = event.clientX - rect.left * (canvas.width / rect.width);
          var y = event.clientY - rect.top * (canvas.height / rect.height);
          return x;
      }

      function getMousePosY(canvas, event) {
          var rect = canvas.getBoundingClientRect();
          var y = event.clientY - rect.top * (canvas.height / rect.height);
          return y;
      }
      // blackboard.appendChild(canvasHide);

      /* isPointInPath */
      //   context.lineWidth = 6;
      //   context.beginPath();
      //   context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      //   context.stroke();
      //   context.beginPath();
      //   context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      //   context.stroke();

      //   canvas.addEventListener("click", function (event) {
      //       let x = getMousePosX(canvas, event);
      //       let y = getMousePosY(canvas, event);

      //       context.beginPath();
      //       context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      //       if (context.isPointInPath(x, y)) {
      //           context.save();
      //           context.fillStyle = 'hsl(0, 83%, 73%)';
      //           context.beginPath();
      //           context.arc(250, 250, 100, 0, 2 * Math.PI, false);
      //           context.fill();
      //           context.restore();
      //       } else {
      //           context.beginPath();
      //           context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      //           if (context.isPointInPath(x, y)) {
      //               context.save();
      //               context.fillStyle = 'hsl(47, 95%, 76%)';
      //               context.beginPath();
      //               context.arc(550, 250, 100, 0, 2 * Math.PI, false);
      //               context.fill();
      //               context.restore();
      //           }
      //       }
      //   });

      //   function getMousePosX(canvas, event) {
      //       var rect = canvas.getBoundingClientRect();
      //       var x = event.clientX - rect.left * (canvas.width / rect.width);
      //       var y = event.clientY - rect.top * (canvas.height / rect.height);
      //       return x;
      //   }

      //   function getMousePosY(canvas, event) {
      //       var rect = canvas.getBoundingClientRect();
      //       var y = event.clientY - rect.top * (canvas.height / rect.height);
      //       return y;
      //   }
      let oDemo = document.querySelector('#content .demo11 .title')
      let aLi = document.querySelectorAll('#content .demo11 ul li');
      oDemo.onclick = function () {
          context.clearRect(0, 0, 800, 500);
          canvas.style.background =
              "-webkit-linear-gradient(bottom,  hsl(196, 54%, 55%), hsl(174, 47%, 52%))";
          context.shadowBlur = 0;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
      }
  })();

  