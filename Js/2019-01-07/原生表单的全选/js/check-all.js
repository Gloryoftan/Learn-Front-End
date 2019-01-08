let aInput = document.querySelectorAll("#wrap .checklist input");
let oBtn = document.getElementById("box7");

let len = aInput.length;

oBtn.onchange = function () {
    let ifChecked = this.checked;
    if (ifChecked) {
        for (let i = 0; i < len; i++) {
            aInput[i].checked = true;
        }
    }
};

for (let i = 0; i < len; i++) {
    aInput[i].onchange = function (){

        let bool = true;
        for (let j = 0; j < len; j++) {
            if ( !aInput[j].checked ) {
                bool = false;
                break;
            }
        }
        oBtn.checked = bool;
    };
}

console.log(aInput);