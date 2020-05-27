class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
    this.leftSubTree = 0;
  }
}
class SpecialBST {
  constructor(val) {
    this.root = new Node(val);
  }
  insert(val, idx, output, root = this.root, numsCount = 0) {
    if (val < root.value) {
      root.leftSubTree += 1;
      if (!root.left) {
        root.left = new Node(val);
        output[idx] = numsCount;
      } else {
        this.insert(val, idx, output, root.left, numsCount);
      }
    } else {
      numsCount += root.leftSubTree;
      if (val > root.value) {
        numsCount += 1;
      }
      if (!root.right) {
        root.right = new Node(val);
        output[idx] = numsCount;
      } else {
        this.insert(val, idx, output, root.right, numsCount);
      }
    }
  }
}

function rightSmallerThan(arr) {
  if (arr.length === 0) return [];
  let lastIdx = arr.length - 1;
  let output = new Array(arr.length).fill(0);

  let bst = new SpecialBST(arr[lastIdx]);
  output[lastIdx] = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    bst.insert(arr[i], i, output);
  }
  return output;
}

console.log(rightSmallerThan([8, 5, 11, -1, 3, 4, 2]));
