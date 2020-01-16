function merge(arr1, arr2) {

    let i = 0, j = 0, k = 0;
    let arr3 = [];
    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] < arr2[j]) {
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        arr3[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        arr3[k++] = arr2[j++];
    }

    return arr3;

}



console.log(merge([3, 8, 16, 20, 25], [4, 10, 12, 22, 23]));
