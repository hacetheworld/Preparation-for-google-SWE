function binaryShiftedSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[left] < arr[mid]) {
      if (target < arr[mid] && target >= arr[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > arr[mid] && target < arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
}

console.log(binaryShiftedSearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 45], 33));
console.log(binaryShiftedSearch([61, 71, 72, 73, 0, 1, 21, 33, 45, 45], 383));
