let aTitle = document.querySelectorAll("#wrap .title");
let aList = document.querySelectorAll("#wrap .list");

let len = aTitle.length;
let index = 0;

for (let i = 0; i < len; i++) {
    aTitle[i].onclick = function () {
        if (i !== index) {
            aList[index].classList.remove("show");
            aList[i].classList.add("show");
            index = i;
        } else {
            aList[i].classList.toggle("show");
        }

    };
}