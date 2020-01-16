function longsubArr(arr) {
    let longsubarr = 0;
    let sum;
    for (let i = 0; i < arr.length; i++) {
        sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === 0) {
                longsubarr = Math.max(longsubarr, j - i + 1)
            }
        }

    }

    return longsubarr;
}


console.log(longsubArr([15, -2, 2, -8, 1, 7, 10, 23]));
console.log(longsubArr([1, 2, 3]));
console.log(longsubArr([1, 0, 3]));
