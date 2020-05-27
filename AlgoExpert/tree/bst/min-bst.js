function minBstConstruction(arr) {
  if (arr.length == 0) return null;
  let mid = Math.floor(arr.length / 2);
  //   console.log(mid % 2 === 0, mid);
  let root = {};
  root.val = arr[mid];
  root.left = minBstConstruction(arr.slice(0, mid));
  root.right = minBstConstruction(arr.slice(mid + 1));
  //console.log(root);
  return root;
}
//let root = {};
console.log(minBstConstruction([1, 2, 5, 7, 10, 13, 14, 15, 22]));
