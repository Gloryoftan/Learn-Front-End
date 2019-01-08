//模拟数据,不可能通过html获取。
let data = [{
        id: 0,
        price: 88,
        num: 0
    },
    {
        id: 1,
        price: 198,
        num: 0
    },
    {
        id: 2,
        price: 208,
        num: 0
    }
];


let aAdd = document.querySelectorAll(".goods .quality .add");
let aReduce = document.querySelectorAll(".goods .quality .reduce");
let aNum = document.querySelectorAll(".goods .quality .num");
let aSub_total = document.querySelectorAll(".goods .sub-total");
let oTotal_quality = document.querySelector(".count .Total-quality");
let oTotal_price = document.querySelector(".count .Total-price");

let len = aAdd.length;

function change(i) {
    //数量更新
    aNum[i].innerHTML = data[i].num;
    //sub-total更新
    aSub_total[i].innerHTML = data[i].num * data[i].price;
    //总价格和总数量的更新
    let sum = 0,
        sum1 = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].num;
        sum1 += data[i].num * data[i].price;
    }
    oTotal_quality.innerHTML = sum;
    oTotal_price.innerHTML = sum1;
};


for (let i = 0; i < len; i++) {
    aAdd[i].onclick = function () {
        //数量更新
        data[i].num++;
        /* aNum[i].innerHTML = data[i].num;
        //sub-total更新
        aSub_total[i].innerHTML = data[i].num * data[i].price;
        //总价格和总数量的更新
        let sum=0,sum1=0;
        for(let i=0;i<data.length;i++){
            sum += data[i].num;
            sum1 += data[i].num * data[i].price;
        }
        oTotal_quality.innerHTML = sum; 
        oTotal_price.innerHTML= sum1; */
        change(i);
    };

    aReduce[i].onclick = function () {
        data[i].num--;
        if (data[i].num < 0) {
            data[i].num = 0;
        }
        /* aNum[i].innerHTML = data[i].num;
        aSub_total[i].innerHTML = data[i].num * data[i].price;

        let sum=0,sum1=0;
        for(let i=0;i<data.length;i++){
            sum += data[i].num;
            sum1 += data[i].num * data[i].price;
        }
        oTotal_quality.innerHTML = sum; 
        oTotal_price.innerHTML= sum1; */
        change(i);
    };
}


console.log(aReduce);
console.log(oTotal_price);