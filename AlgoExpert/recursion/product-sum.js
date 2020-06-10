function productSum(arr, depth = 1) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    } else {
      sum += productSum(arr[i], depth + 1);
    }
  }
  return sum * depth;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
