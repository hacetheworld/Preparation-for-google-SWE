function quickSort(arr, l, h) {

    if (l < h) {
        let partionPoint = partion(arr, l, h);
        quickSort(arr, l, partionPoint);
        quickSort(arr, partionPoint + 1, h);
    }
    return arr;
}


function partion(arr, l, h) {
    //let mid = Math.floor((l + h) / 2);
    let pivot = arr[l];
    let i = l, j = h;

    while (i < j) {
        do {
            do { i++; } while (arr[i] <= pivot);
            do { j--; } while (arr[j] > pivot);
            if (i < j) { swap(arr, i, j); }
        } while (i < j);
    }

    swap(arr, l, j);
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let arr = [1, 4, 2, 4, 2, 4, 1, 2, 4, 1, 2, 2, 2, 2, 4, 1, 4, 4, 4];

let l = 0;
let h = arr.length;
console.log(quickSort(arr, l, h));
