function subarraySort(arr) {
  let start = 0,
    end = arr.length - 1,
    min = Infinity,
    max = -Infinity;

  while (arr[start] <= arr[start + 1]) {
    start++;
  }

  while (arr[end] >= arr[end - 1]) {
    end--;
  }
  for (let i = start; i <= end; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  for (let j = end + 1; j < arr.length; j++) {
    if (arr[j] <= max) {
      end = j;
      // break;
    }
    {
      // end = j ;
      break;
    }
  }
  for (let k = start; k >= 0; k--) {
    if (arr[k] >= min) {
      start = k;
    } else {
      break;
    }
  }

  return [start, end];
}

// console.log(subarraySort([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]));
// console.log(subarraySort([0, 1, 15, 25, 6, 7, 30, 40, 50]));
console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
