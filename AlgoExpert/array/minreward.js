function minReward(arr) {
  let res = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      res[i] = res[i - 1] + 1;
    }
  }
  for (let j = arr.length - 2; j >= 0; j--) {
    if (arr[j] > arr[j + 1]) {
      res[j] = Math.max(res[j], res[j + 1] + 1);
    }
  }
  return res.reduce((acc, val) => acc + val, 0);
}

console.log(minReward([8, 4, 2, 1, 3, 6, 7, 9, 5]));
