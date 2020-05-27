function generateTree(pre, inr) {
  if (inr.length > 0) {
    let treeNode = {};
    treeNode.data = pre[0];
    let idx = findIdx(inr, treeNode.data);
    treeNode.left = generateTree(pre.slice(1, idx + 1), inr.slice(0, idx));
    treeNode.right = generateTree(pre.slice(idx + 1), inr.slice(idx + 1));

    return treeNode;
  }
  return null;
}

function findIdx(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(generateTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7], {}));
