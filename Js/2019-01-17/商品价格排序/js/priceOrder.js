(function (data) {

    function dom() {
        //初始化
        let oUl = document.querySelector("#wrap .content ul");
        let html = "";
        data.forEach(d => {
            html += `<li>
                <a href="">
                    <img src="${d.src}" alt="">
                    <p>
                        <span class="name">${d.name}</span>
                        <span class="price">$ <i>${d.price}</i></span>
                    </p>
                </a>
            </li>`;
        });
        oUl.innerHTML = html;
    }

    dom(data);

    //btn点击事件
    let aBtn = [...document.querySelectorAll("#wrap .btn div")];
    let sortFn = [
        () => Math.random() - 0.5,
        (a, b) => a.price - b.price,
        (a, b) => b.price - a.price
    ];

    aBtn.forEach((e, i) => {
        e.onclick = function () {
            /*  原swith逻辑
            switch (i) {
                 case 0:
                     data.sort((a, b) => {
                         return Math.random() - 0.5;
                     });
                     break;
                 case 1:
                     data.sort((a, b) => {
                         return a.price - b.price;
                     });
                     break;
                 case 2:
                     data.sort((a, b) => {
                         return b.price - a.price;
                     });
                     break;
             } */
            data.sort(sortFn[i]);
            dom(data);
        };
    });
})(
    [{
            src: "img/HtmlImgs3.jpg",
            name: "HTML",
            price: 598
        },
        {
            src: "img/HtmlImgs6.png",
            name: "HTML",
            price: 888
        },
        {
            src: "img/CssImgs1.jpg",
            name: "CSS",
            price: 1088
        },
        {
            src: "img/CssImgs2.png",
            name: "CSS",
            price: 258
        },
        {
            src: "img/CssImgs5.jpg",
            name: "CSS",
            price: 308
        },
        {
            src: "img/JsImgs3.jpg",
            name: "JavaScript",
            price: 399
        },
        {
            src: "img/JsImgs4.png",
            name: "JavaScript",
            price: 1198
        },
        {
            src: "img/JsImgs6.jpeg",
            name: "JavaScript",
            price: 1998
        },
    ]
);