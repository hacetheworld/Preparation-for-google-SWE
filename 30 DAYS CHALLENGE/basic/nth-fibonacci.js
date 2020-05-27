function nthFibonacci(n, cached = {}) {
    //#1 method
    // if (n <= 1) {
    //     return n;
    // } else {
    //     return nthFibonacci(n - 1) + nthFibonacci(n - 2);
    // }


    // method #2

    // if (n <= 1) {
    //     return n;
    // }
    // if (cached[n]) {
    //     return cached[n];

    // } else {
    //     cached[n] = nthFibonacci(n - 1, cached) + nthFibonacci(n - 2, cached);
    // }

    // return cached[n];

    // method #3

    let fibSeries = [0, 1]; //we know that fib series is sum of last 2 numbers

    for (let i = 2; i <= n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2]; // add last two numbers and store them in fibseries arr

    }
    return fibSeries[n];

}

console.log(nthFibonacci(20));
