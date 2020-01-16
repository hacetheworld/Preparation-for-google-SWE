function recursionFunA(n) {

    if (n > 0) {
        console.log(n);
        recursionFunB(n - 1);
    }


}

function recursionFunB(n) {

    if (n > 1) {
        console.log(n);
        recursionFunA(Math.floor(n / 2));
    }


}

recursionFunA(20);

