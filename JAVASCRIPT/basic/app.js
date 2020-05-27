// function multiply(a, b) {
//     return a * b;
// }

// let multiplyByTwo = multiply.bind(this, 2);

// console.log(multiplyByTwo(5));


function heavyDuty(idx) {
    const bigArray = new Array(700).fill(`&smile;`);
    console.log('created');

    return bigArray[idx];
}

console.log(heavyDuty(500));
console.log(heavyDuty(500));
console.log(heavyDuty(500));
console.log(heavyDuty(500));

console.log('------------------------');

function heavyDuty2() {
    const bigArray = new Array(700).fill(`&smile;`); console.log('created');

    return function (idx) {
        return bigArray[idx]
    };
}

let getHD = heavyDuty2();
console.log(getHD(500));
console.log(getHD(500));
console.log(getHD(500));
