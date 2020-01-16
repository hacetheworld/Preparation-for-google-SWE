function taylor(x, n) {

    // while (n > 0) {
    //     result = 1 + (x / n) * result;
    //     n--;
    // }

    if (n === 0) {
        return result;
    } else {
        result = 1 + (x / n) * result;

        return taylor(x, n - 1);
    }

}

let result = 1;
console.log(taylor(1, 10));
