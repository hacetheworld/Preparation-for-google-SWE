function e(x, n) {
    if (n == 0) return 1;



    result = e(x, n - 1);

    p = p * x;
    f = f * n;
    return result + p / f;
}

let p = 1, f = 1, result;
//console.log(e(4, 10));
console.log(e(3, 10));
