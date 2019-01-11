(function (data) {
    let aUl = document.querySelectorAll("#wrap .content .frame");
    let len = data.length;
    let aNav = document.querySelectorAll("#wrap .nav li");
    let index = 0;

    console.log(aNav);

    //生成content
    let html = "";
    for (let i = 0; i < len; i++) {
        let thisData = data[i];
        let {
            type,
            id,
            src,
            des,
            href
        } = thisData;
        aUl[type - 1].innerHTML += `<li class="imgs"><a href="${href}"><img src="${src}" alt="${des}"><p>${des}</p></a></li>`;

        /* 
        如果type不是数字的话可以用switch
               switch (type) {
                    case 1:
                        aUl[0].innerHTML += `<li class="imgs"><a href="${href}"><img src="${src}" alt="${des}"><p>${des}</p></a></li>`;
                        break;
                    case 2:
                        aUl[1].innerHTML += `<li class="imgs"><a href="${href}"><img src="${src}" alt="${des}"><p>${des}</p></a></li>`;
                        break;
                    case 3:
                        aUl[2].innerHTML += `<li class="imgs"><a href="${href}"><img src="${src}" alt="${des}"><p>${des}</p></a></li>`;
                        break;
                    case 4:
                        aUl[3].innerHTML += `<li class="imgs"><a href="${href}"><img src="${src}" alt="${des}"><p>${des}</p></a></li>`;
                        break;
                }  */

    }
    //添加点击事件
    [...aNav].forEach(function (n, i) {
        aNav[i].onmouseenter = function () {
            aNav[index].classList.remove("active");
            aUl[index].classList.remove("show");

            index = i;

            aNav[index].classList.add("active");
            aUl[index].classList.add("show");
        };
    });




})
(
    //模拟数据
    [{
            id: 1,
            src: "img/HtmlImgs1.jpeg",
            des: "Hypertext Markup Language",
            href: "https://baike.baidu.com/item/HTML/97049?fr=aladdin",
            type: 1
        },
        {
            id: 2,
            src: "img/CssImgs1.jpg",
            des: "Cascading Style Sheets",
            href: "https://baike.baidu.com/item/CSS/5457",
            type: 1
        },
        {
            id: 3,
            src: "img/JsImgs1.jpg",
            des: "JavaScript",
            href: "https://baike.baidu.com/item/javascript",
            type: 1
        },
        {
            id: 4,
            src: "img/HtmlImgs2.jpeg",
            des: "Hypertext Markup Language",
            href: "https://baike.baidu.com/item/HTML/97049?fr=aladdin",
            type: 2
        },
        {
            id: 5,
            src: "img/HtmlImgs3.jpg",
            des: "Hypertext Markup Language",
            href: "https://baike.baidu.com/item/HTML/97049?fr=aladdin",
            type: 2
        },
        {
            id: 6,
            src: "img/HtmlImgs4.jpeg",
            des: "Hypertext Markup Language",
            href: "https://baike.baidu.com/item/HTML/97049?fr=aladdin",
            type: 2
        },
        {
            id: 7,
            src: "img/CssImgs2.png",
            des: "Cascading Style Sheets",
            href: "https://baike.baidu.com/item/CSS/5457",
            type: 3
        },
        {
            id: 8,
            src: "img/CssImgs3.jpg",
            des: "Cascading Style Sheets",
            href: "https://baike.baidu.com/item/CSS/5457",
            type: 3
        },
        {
            id: 9,
            src: "img/CssImgs4.jpeg",
            des: "Cascading Style Sheets",
            href: "https://baike.baidu.com/item/CSS/5457",
            type: 3
        },
        {
            id: 10,
            src: "img/JsImgs2.jpg",
            des: "JavaScript",
            href: "https://baike.baidu.com/item/javascript",
            type: 4
        },
        {
            id: 11,
            src: "img/JsImgs3.jpg",
            des: "JavaScript",
            href: "https://baike.baidu.com/item/javascript",
            type: 4
        },
        {
            id: 12,
            src: "img/JsImgs4.png",
            des: "JavaScript",
            href: "https://baike.baidu.com/item/javascript",
            type: 4
        },
    ]
);