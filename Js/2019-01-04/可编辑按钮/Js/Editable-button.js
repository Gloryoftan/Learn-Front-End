let aP = document.querySelectorAll("#wrap p");
let aInput = document.querySelectorAll("#wrap input");
let aEdit = document.querySelectorAll("#wrap div.edit");
let aAccept = document.querySelectorAll("#wrap div.accept");

let len = aEdit.length;

//Edit
function pEdit(i) {
    aEdit[i].className = "edit hide";
    aAccept[i].className = "accept show";

    aP[i].className = "hide";

    aInput[i].className = "show";
}

//Confirm
function pAccept(i) {
    aAccept[i].className = "accept hide";
    aEdit[i].className = "edit show";

    aP[i].className = "show";
    aP[i].innerHTML = aInput[i].value;

    aInput[i].className = "hide";
}

//添加事件的for循环
for (let i = 0; i < len; i++) {
    aEdit[i].onclick = function () {
        pEdit(i);
    };

    aAccept[i].onclick = function () {
        pAccept(i);
    };
}