let oBtn = document.getElementById("btn");
let oResult = document.getElementById("results");

oBtn.onclick = function () {
    let ran = Math.random();
    let result = lottery(ran);
    oResult.innerHTML += `<p>Congratulations! You won a  <i>${result}</i></p>`;
};

function lottery(ran) {
    let res;
    if (ran < 0.01) {
        res = "Special Prize!!!!!";
    } else if (ran < 0.05) {
        res = "First Prize!!!";
    } else if (ran < 0.15) {
        res = "Second Prize!!";
    } else if (ran < 0.45) {
        res = "Third Prize!";
    } else {
        res = "Good luck next time.";
    }
    return res;
}