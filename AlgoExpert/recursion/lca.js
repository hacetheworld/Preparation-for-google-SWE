function lowestCommonAncestor(root, p, q) {
  if (root) {
    if (root.val == p.val || root.val === q.val) return root;
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;

    return left || right;
  }

  return null;
}

function node(val) {
  return {
    val: val,
    left: null,
    right: null,
  };
}

const bt = node(3);
bt.left = node(5);
bt.right = node(1);
bt.left.left = node(6);
bt.left.right = node(2);
bt.right.left = node(0);
bt.right.right = node(8);
bt.left.right.left = node(7);
bt.left.right.right = node(4);

console.log(lowestCommonAncestor(bt, bt.left, bt.right));
