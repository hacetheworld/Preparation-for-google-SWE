function BinaryTree() {
  let queue = [];
  let p;
  let val = prompt("Please enter Root Node value") * 1;
  let newNode = {
    data: val,
    left: null,
    right: null,
  };
  const root = newNode;
  queue.push(root);

  while (queue.length > 0) {
    p = queue.shift();
    val = prompt("Please enter left Node value of last " + p.data);
    if (val === null) return;
    val = val * 1;
    if (val !== -1) {
      newNode = {
        data: val,
        left: null,
        right: null,
      };

      p.left = newNode;
      queue.push(p.left);
    }
    val = prompt("Please enter Right Node value of last " + p.data) * 1;
    if (val !== -1) {
      newNode = {
        data: val,
        left: null,
        right: null,
      };
      p.right = newNode;
      queue.push(p.right);
    }
  }
  return root;
}

console.log(BinaryTree());
