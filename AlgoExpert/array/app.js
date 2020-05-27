function BinarySearch(arr, val) {
  if (arr[0] > val || arr[arr.length - 1] < val) return false;
  let l = 0,
    r = arr.length,
    mid = Math.floor((l + r) / 2);

  while (l < r) {
    if (arr[mid] === val) {
      return true;
    } else if (arr[mid] > val) {
      r = mid;
    } else {
      l = mid;
    }

    mid = Math.floor((l + r) / 2);
  }
  return false;
}
let arr = [4, 8, 10, 15, 18, 21, 35, 57, 78];
let val = 35;

console.log(BinarySearch(arr, val));
