function isSubset(arr1, arr2) {
    // Init an Hash map and loop throw first arr and store the values in map
    let hash = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!hash[arr1[i]]) {
            hash[arr1[i]] = 1;
        } else {
            hash[arr1[i]] + 1;
        }

    }

    // Now loop throw second arr2 and check if the exist in hash map if not return false
    let j = 0;
    for (j; j < arr2.length; j++) {

        if (hash[arr2[j]]) {
            delete hash[arr2[j]];
        } else {
            return false;
        }

    }

    // if in the end j===arr.length-1 then we know every values of arr2 exist in arr1 so we return true

    if (j === arr2.length) {
        return true;
    }

}


console.log(isSubset([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]));
