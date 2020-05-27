function permutation(str) {
  let res = [];
  let concateStr = "";
  let visited = {};
  return permuteHelper(str, concateStr, res, visited);
}

function permuteHelper(str, concateStr, res, visited) {
  if (str.length === concateStr.length) {
    res.push(concateStr);
    return res;
  }
  for (let i = 0; i < str.length; i++) {
    if (!visited[str[i]]) {
      visited[str[i]] = true;
      permuteHelper(str, str[i] + concateStr, res, visited);
      visited[str[i]] = false;
    }
  }

  return res;
}

console.log(permutation("ABC"));
