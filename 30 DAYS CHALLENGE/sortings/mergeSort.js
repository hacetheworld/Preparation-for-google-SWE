function mergeSort(arr, l, h) {
    if (l < h) {
        let mid = Math.floor((l + h) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, h);
        merge(arr, l, mid, h);
    }
    return arr;
}

function merge(arr, l, mid, h) {
    let i = l, j = mid + 1, k = l;
    let aux = [];

    while (i <= mid && j <= h) {
        if (arr[i] < arr[j]) {
            aux[k++] = arr[i++];
        } else {
            aux[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        aux[k++] = arr[i++];
    }
    while (j <= h) {
        aux[k++] = arr[j++];
    }

    for (i = l; i <= h; i++) {
        arr[i] = aux[i];
    }

}
let arr = [6, 70, 12, -04, 9, 1, 8];
let l = 0, h = arr.length - 1;

console.log(mergeSort(arr, l, h));
