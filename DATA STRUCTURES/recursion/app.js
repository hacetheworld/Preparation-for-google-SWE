function pareseMultiDimensionalArr(arr) {

    // Base Case
    if (arr.length === 0) {
        return 0;
    }

    let total = 0;
    let first = arr.shift();
    // console.log(first);

    if (typeof first === 'object') {
        total += pareseMultiDimensionalArr(first);
    }
    if (typeof first === 'number') {
        total += 1;
    }

    return total + pareseMultiDimensionalArr(arr);

}


console.log(pareseMultiDimensionalArr([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));


