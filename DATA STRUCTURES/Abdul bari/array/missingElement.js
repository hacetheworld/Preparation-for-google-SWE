function missingElement(arr) {
    //  #Method 1
    // let n = arr[arr.length - 1];
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }
    // return (n * (n + 1)) / 2 - sum;

    // # Method 2
    let start = arr[0];
    let missingElements = [];
    let diff = start;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - i !== diff) {
            while (diff < arr[i] - i) {
                missingElements.push(diff + i);
                diff++;
            }
        }
    }
    return missingElements;
}


//missingElement([3, 7, 4, 9, 12, 6, 1, 11, 2, 10]);

console.log(missingElement([4, 5, 6, 8, 9, 12]));

