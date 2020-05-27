function maxSubsetSumNoAdjacent(arr) {
  let first = arr[0];
  let last = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let temp = Math.max(arr[i] + first, last);
    first = last;
    last = temp;
  }
  return last;
}

console.log(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]));
