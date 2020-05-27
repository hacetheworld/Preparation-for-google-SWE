function spiral(arr) {
  let top = 0,
    left = 0,
    right = arr[0].length - 1,
    down = arr.length - 1;
  let spiralPrint = [];
  let dir = 0;

  while (top <= down && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        spiralPrint.push(arr[top][i]);
      }
      top++;
    } else if (dir === 1) {
      for (let i = top; i <= down; i++) {
        spiralPrint.push(arr[i][right]);
      }
      right--;
    } else if (dir === 2) {
      //   console.log("i was at 2", right, left);
      for (let i = right; i >= left; i--) {
        spiralPrint.push(arr[down][i]);
      }
      down--;
    } else if (dir === 3) {
      for (let i = down; i >= top; i--) {
        spiralPrint.push(arr[i][left]);
      }
      left++;
    }
    dir = (dir + 1) % 4;
  }
  return spiralPrint;
}

console.log(
  spiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
