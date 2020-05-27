function closestValue(root, val) {
  return helper(root, Infinity, val);
}

function helper(root, closet, value) {
  if (root) {
    let absDiff = Math.abs(root.value - value);
    let closetsDiff = Math.abs(closet - value);
    closet = absDiff > closetsDiff ? closet : root.value;

    if (value < root.value) {
      return helper(root.left, root.value, value);
    } else if (value > root.value) {
      return helper(root.right, root.value, value);
    } else {
      return root.value;
    }
  }
  return closet;
}
