function merge(A, B) {
    let i = 0;
    let j = 0;
    let sortedArr = [];

    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            sortedArr.push(A[i]);
            i++;
        } else {
            sortedArr.push(B[j]);
            j++;
        }
    }
    while (i < A.length) {
        sortedArr.push(A[i]);
        i++
    }
    while (j < B.length) {
        sortedArr.push(B[j]);
        j++
    }
    return sortedArr;
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.splice(0, mid));
    let right = mergeSort(arr);
    return merge(left, right);
}

let A = [109, 16, 39, 46, 34, 19, 89, 36, 1, 7, 3, 4];


console.log(mergeSort(A))