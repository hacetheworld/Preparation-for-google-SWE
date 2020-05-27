function countSort(arr) {
    let count = [];
    let max = findMax(arr);

    for (let i = 0; i <= max; i++) {
        count[i] = 0;
    }

    for (let j = 0; j < arr.length; j++) {
        count[arr[j]]++;
    }

    let k = 0, l = 0;
    while (k <= max) {
        if (count[k] > 0) {
            arr[l++] = k;
            count[k]--;
        } else {
            k++;
        }
    }

    return arr;
}


function findMax(arr) {
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

    }

    return max;
}

console.log(countSort([6, 70, 12, 4, 9, 1, 8]));
