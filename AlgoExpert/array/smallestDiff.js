function smallestDiffrence(arr1, arr2) {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let MAX_INIT = Infinity;
  let pair = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (Math.abs(arr1[i] - arr2[j]) < MAX_INIT) {
      pair[0] = arr1[i];
      pair[1] = arr2[j];
      MAX_INIT = Math.abs(arr1[i] - arr2[j]);
    }

    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return pair;
}

console.log(smallestDiffrence([-1, 5, 10, 28, 20, 3], [26, 134, 135, 15, 17]));
