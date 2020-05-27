function insertionSort(arr) {
    let currentEle;
    for (let i = 1; i < arr.length; i++) {
        currentEle = arr[i];
        j = i - 1;
        while (j >= 0 && currentEle < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = currentEle;

    }
    return arr;

}
console.log(insertionSort([8, 5, 7, 3, 2, 1]));
