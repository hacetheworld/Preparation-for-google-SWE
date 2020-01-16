function findPairOfSum(arr, sum) {
    if (arr.length < 2) {
        return null;
    }

    // Make hash map and store the arr values in it as key
    let hash = new Object();

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = true;
        }

    }

    // Now start second loop and check if the sum/currentvalue is exist in hash map

    for (let j = 0; j < arr.length; j++) {
        // Exp arr[i] = 2 then pairIdx = 20(sum)/2(arr[i]) , pairIdx = 10 , then wecheck if pairIdx exist in hash map if it is we will return arr[i] and pairIdx because they are equal to sum
        let pairIdx = Math.round(sum - arr[j]);

        if (hash[pairIdx]) {
            return [arr[j], pairIdx];
        }

    }

    return null;

}

console.log(findPairOfSum([2, 4, 5, 3, 1], 9));
console.log(findPairOfSum([1, 4, 45, 6, 10, -8], 16));
