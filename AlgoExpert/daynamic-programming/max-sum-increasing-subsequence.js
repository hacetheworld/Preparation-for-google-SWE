function maxSumIncreasingSubquence(arr) {
  let maxIncreasingSubquenceSum = -Infinity;
  let runningMaxSumIncreasingSubquence;

  for (let i = 0; i < arr.length - 1; i++) {
    runningMaxSumIncreasingSubquence = arr[i];
    let compairValue = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (compairValue < arr[j]) {
        runningMaxSumIncreasingSubquence += arr[j];
        compairValue = arr[j];
      }
    }
    maxIncreasingSubquenceSum = Math.max(
      runningMaxSumIncreasingSubquence,
      maxIncreasingSubquenceSum
    );
  }
  return maxIncreasingSubquenceSum;
}

console.log(maxSumIncreasingSubquence([8, 12, 2, 3, 15, 5, 7]));
console.log(maxSumIncreasingSubquence([4, 6, 1, 3, 8, 4, 6]));
