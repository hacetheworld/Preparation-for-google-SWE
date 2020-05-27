function largestRange(arr) {
  let lr = 0;
  let bestRange = [0, 0];
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }

  for (let j = 0; j < arr.length; j++) {
    let currentElement = arr[j];
    if (!hash[currentElement]) continue;
    hash[currentElement] = false;
    let left = currentElement - 1;
    let right = currentElement + 1;
    let currentLength = 1;
    while (hash[left]) {
      hash[left] = false;
      currentLength++;
      left--;
    }
    while (hash[right]) {
      hash[right] = false;
      currentLength++;
      right++;
    }
    if (lr < currentLength) {
      lr = currentLength;
      bestRange[0] = left + 1;
      bestRange[1] = right - 1;
    }
  }
  return bestRange;
}

console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
