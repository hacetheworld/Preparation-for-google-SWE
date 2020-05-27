function combination(n, r) {

    if (r === 0 || n == 1 || r == n) {
        return 1;
    }

    return combination(n - 1, r - 1) + combination(n - 1, r);
}


console.log(combination(4, 2));
