function minMax(arr) {

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }

        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return [min, max]
}

console.log(minMax([5, 8, 3, 9, 6, 2, 10, 7, -1, 4]));
