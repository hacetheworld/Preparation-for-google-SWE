function missingEl(arr) {
  let diff = arr[0];
  let missingElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - i !== diff) {
      while (diff < arr[i] - i) {
        missingElements.push(diff + i);
        diff++;
      }
    }
  }

  return missingElements;
}

console.log(missingEl([1, 2, 3, 4, 6, 7, 9, 11, 14]));
