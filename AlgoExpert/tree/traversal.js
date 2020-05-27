function Node(val) {
  return {
    data: val,
    left: null,
    right: null,
  };
}

class Traversal {
  constructor() {
    this.root = null;
  }
  preorder(root, res) {
    if (root) {
      res.push(root.data);
      this.preorder(root.left, res);
      this.preorder(root.right, res);
    }
    return res;
  }
  inorder(root, res) {
    if (root) {
      this.preorder(root.left, res);
      res.push(root.data);

      this.preorder(root.right, res);
    }
    return res;
  }
  postorder(root, res) {
    if (root) {
      this.preorder(root.left, res);

      this.preorder(root.right, res);
      res.push(root.data);
    }
    return res;
  }

  // using loopd

  iterativePreorder(root) {
    let stk = [];
    let res = [];
    // stk.push(root);
    while (root || stk.length > 0) {
      if (root) {
        res.push(root.data);
        stk.push(root);
        root = root.left;
      } else {
        root = stk.pop().right;
      }
    }
    return res;
  }

  iterativeInorder(root) {
    let stk = [];
    let res = [];
    // stk.push(root);
    while (root || stk.length > 0) {
      if (root) {
        stk.push(root);
        root = root.left;
      } else {
        let last = stk.pop();
        res.push(last.data);
        root = last.right;
      }
    }
    return res;
  }

  levelOrder(root) {
    let queue = [];
    let res = [];
    queue.push(root);
    while (queue.length > 0) {
      let temp = queue.shift();
      res.push(temp.data);
      if (temp.left) {
        queue.push(temp.left);
      }
      if (temp.right) {
        queue.push(temp.right);
      }
    }

    return res;
  }
}

const Bt = new Traversal();
Bt.root = Node(1);
Bt.root.left = Node(2);
Bt.root.right = Node(3);
Bt.root.left.left = Node(4);
Bt.root.left.right = Node(5);
Bt.root.right.left = Node(6);
Bt.root.right.right = Node(7);

//Methods
console.log(Bt.iterativePreorder(Bt.root, []));
console.log(Bt.iterativeInorder(Bt.root, []));
console.log(Bt.levelOrder(Bt.root));

