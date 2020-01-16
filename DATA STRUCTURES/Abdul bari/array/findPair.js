function findPair(arr, k) {
    // let obj = {};
    // let remain;
    // let pairs = [];
    // for (let i = 0; i < arr.length; i++) {
    //     remain = k - arr[i];
    //     if (obj[remain]) {
    //         pairs.push([arr[i], remain]);
    //     }
    //     obj[arr[i]] = true;
    // }
    // return pairs;

    // # in sorted Array
    let l = 0;
    let h = arr.length - 1;
    let pairs = [];
    while (l < h) {
        if (arr[l] + arr[h] === k) {
            pairs.push([arr[l], arr[h]]);
            h--;
            l++;
        } else if (arr[l] + arr[h] > k) {
            h--;
        } else {
            l++;
        }
    }
    return pairs
}


console.log(findPair([1, 3, 4, 5, 6, 8, 9, 10, 12, 14], 10));
