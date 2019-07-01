(function () {
    var variable1 = '5' - 3;
    var variable2 = '5' + 3;
    var variable3 = '5' + -'2';
    var variable4 = ['10', '10', '10', '10', '10'].map(parseInt);
    var variable5 = 'foo ' + 1 + 1;
    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(variable4);
    console.log(variable5);
})();

function reservedNames() {
    console.log('this is a test for reservedNames')
}

function reservedNames1() {
    console.log('this is a test for reservedNames')
}

function reservedNames2() {
    console.log('this is a test for reservedNames')
}

function reservedNames3() {
    console.log(test);
}