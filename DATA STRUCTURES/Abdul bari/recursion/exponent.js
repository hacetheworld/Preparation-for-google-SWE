function pow(m, n) {

    if (n === 0) {
        return 1;
    } else {
        return pow(m, n - 1) * m;
    }
}

console.log(pow(2, 9));
