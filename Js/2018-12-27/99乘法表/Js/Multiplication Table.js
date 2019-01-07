let oContainer = document.getElementById("container");
let content = "";
let content2="";

for (i = 1; i < 10; i++) {

    let html = "";

    for (j = 1; j <= i; j++) {
        html += `<span>${i} x ${j} = ${i*j} </span>`;
    }

    //换行
    html += "<br>";

    content += html;


}

for (i = 1; i < 10; i++) {

    let html = "";

    for (j = i; j<=9; j++) {
        html += `<span>${i} x ${j} = ${i*j} </span>`;
    }

    //换行
    html += "<br>";

    content2 += html;

}
oContainer.innerHTML += content;
oContainer.innerHTML += content2;