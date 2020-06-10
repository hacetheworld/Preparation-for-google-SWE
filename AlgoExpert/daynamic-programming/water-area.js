function waterArea(arr) {
  let leftMaxArr = [];
  let rightMaxArr = [];
  let leftMax = 0;
  for (let i = 0; i < arr.length; i++) {
    leftMaxArr.push(leftMax);
    if (arr[i] > leftMax) {
      leftMax = arr[i];
    }
  }
  let rightMax = 0;
  for (let j = arr.length - 1; j >= 0; j--) {
    rightMaxArr.unshift(rightMax);
    if (arr[j] > rightMax) {
      rightMax = arr[j];
    }
  }
  let result = [];
  let minHeight;
  for (let k = 0; k < arr.length; k++) {
    minHeight = Math.min(leftMaxArr[k], rightMaxArr[k]);

    if (arr[k] < minHeight) {
      result.push(minHeight - arr[k]);
    } else {
      result.push(0);
    }
  }
  return result.reduce((val, currVal) => val + currVal, 0);
}

console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));
