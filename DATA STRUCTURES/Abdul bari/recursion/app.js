function recursionFun(n) {
    if (n === 0) {
        return;
    }
    if (n > 0) {
        values.push(n);
        recursionFun(n - 1);
        recursionFun(n - 1);
    }

    return values;
}
let values = [];
console.log(recursionFun(3));

