function selectionSort(arr) {
    let k;
    for (let i = 0; i < arr.length - 1; i++) {
        k = i;
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[k] > arr[j]) {
                k = j;
            }

        }
        let temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(selectionSort([-9, 7, 3, 2, 77, -6, 1]));
