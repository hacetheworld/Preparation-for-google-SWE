function permutation(arr, seen, result, runningRes) {
  if (arr.length === runningRes.length) {
    result.push([...runningRes]);
    return result;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      runningRes.push(arr[i]);
      permutation(arr, seen, result, runningRes);
      runningRes.pop();
      seen[arr[i]] = false;
    }
  }
  return result;
}

let result = [];
let seen = {};
console.log(permutation([1, 2, 3, 4, 5], seen, result, []));
