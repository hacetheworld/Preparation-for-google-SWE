function flattenUsingInorder(root) {
  let inorderNodes = inorder(root);
  for (let i = 0; i < inorderNodes.length - 1; i++) {
    let leftNode = inorderNodes[i];
    let rightNode = inorderNodes[i + 1];
    leftNode.right = rightNode;
    rightNode.left = leftNode;
  }
  return inorderNodes[0];
}

function inorder(root, res = []) {
  if (root) {
    inorder(root.left, res);
    res.push(root);
    inorder(root.right, res);
  }
  return res;
}

function node(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

const bt = node(1);
bt.left = node(2);
bt.right = node(3);
bt.left.left = node(4);
bt.left.right = node(5);
bt.left.right.left = node(7);
bt.left.right.right = node(8);
bt.right.left = node(6);

console.log(flattenUsingInorder(bt));
