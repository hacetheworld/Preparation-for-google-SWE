function validateSubsequence(arr, subSequence) {
  let j = 0,
    i = 0;
  while (i < arr.length && j < subSequence.length) {
    if (arr[i] === subSequence[j]) {
      j++;
    }
    if (j === subSequence.length) {
      return true;
    }
    i++;
  }
  if (j === subSequence.length) {
    return true;
  } else {
    return false;
  }
}

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
