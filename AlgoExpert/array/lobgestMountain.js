function longestMountain(A) {
  let lp = 0;
  for (let i = 1; i < A.length; i++) {
    let isPeak = A[i - 1] < A[i] && A[i + 1] < A[i];
    if (isPeak) {
      let left = i;
      let right = i;
      while (left >= 0 && A[left - 1] < A[left]) {
        left--;
      }

      while (right < A.length && A[right + 1] < A[right]) {
        right++;
      }
      lp = Math.max(right - left + 1, lp);
    }
  }
  return lp;
}

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
console.log(longestMountain([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
