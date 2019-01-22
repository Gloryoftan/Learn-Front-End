let oForm = document.getElementById("form");
let aInput = [...oForm.children];

//添加焦点事件
oForm.num1.focus();
aInput.forEach((ele, index) => {
    ele.oninput = function () {
        if (this.value.length >= 4) {
            this.disabled = true;
            aInput[index + 1] && aInput[index + 1].focus();
        }
    };
    ele.onblur = function () {
        if (this.value.length < 4) {
            this.focus();
        }
    };
});