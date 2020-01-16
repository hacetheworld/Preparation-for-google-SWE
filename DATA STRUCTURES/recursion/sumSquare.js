function sumSquare(arr) {

    //Base Case

    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    let first = arr.shift();

    if (typeof first === 'object') {
        sum += sumSquare(first);
    }

    if (typeof first === 'number') {
        sum += first * first;
    }

    return sum + sumSquare(arr);

}

console.log(sumSquare([1, 2, 3]));
console.log(sumSquare([[1, 2], 3]));
console.log(sumSquare([[[[[[[[[1]]]]]]]]]));
console.log(sumSquare([10, [[10], 10], [10]]));
