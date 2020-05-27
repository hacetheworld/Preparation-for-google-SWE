function twoSum(arr, k) {

    //#1 un optimized version
    // timecomplexity O(n^2) and space O(1)
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === k) {
    //             return [i, j]
    //         }
    //     }
    // }


    // #2 We can improve it by using hash map
    // time complexity O(n) and space O(n)

    let hashMap = new Map();
    let complement;

    for (let i = 0; i < arr.length; i++) {
        complement = k - arr[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i]
        }
        hashMap.set(arr[i], i);
    }




}


console.log(twoSum([2, 7, 11, 15], 9));
