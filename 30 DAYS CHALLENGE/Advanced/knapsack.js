function mxProfit(profitArr, weightArr, capacity) {
    let maxProfit = 0, currMaxIdx, currCapacity = 0;

    while (currCapacity < capacity) {
        currMaxIdx = getLargestProfit(profitArr);

        if (!(currCapacity + weightArr[currMaxIdx] > capacity)) {
            currCapacity += weightArr[currMaxIdx];
            maxProfit += profitArr[currMaxIdx];

        }
        profitArr[currMaxIdx] = -(profitArr[currMaxIdx]);
    }

    return maxProfit;
}


function getLargestProfit(arr) {

    let max = -Infinity;
    let maxIdx;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            maxIdx = i;
        }
    }

    return maxIdx;
}




console.log(mxProfit([10, 5, 15, 7, 6, 18, 3], [2, 3, 5, 7, 1, 4, 1], 15));

console.log(mxProfit([60, 100, 120], [10, 20, 30], 50));