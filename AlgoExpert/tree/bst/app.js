class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      this.inserHelper(this.root, newNode);
    }
  }
  inserHelper(root, node) {
    if (root) {
      if (root.value > node.value) {
        root.left = this.inserHelper(root.left, node);
      } else {
        root.right = this.inserHelper(root.right, node);
      }
      return root;
    }
    return node;
  }
  contains(value) {
    let root = this.root;
    while (root) {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return false;
  }
  remove(value) {
    this.removeHelper(this.root, value);
  }
  removeHelper(root, value) {
    if (root) {
      if (root.value === value && !root.left && !root.right) {
        root = null;
        return root;
      }
      if (root.value === value) {
        let leftMostVal = this.leftMostVal(root.right);
        root.value = leftMostVal.value;
        root.right = this.removeHelper(root.right, root.value);
      } else if (root.value > value) {
        root.left = this.removeHelper(root.left, value);
      } else {
        root.right = this.removeHelper(root.right, value);
      }
      return root;
    }
    return null;
  }
  leftMostVal(root) {
    while (root && root.left) {
      root = root.left;
    }
    return root;
  }
}

const bst = new BST();
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(0);
bst.insert(2);
bst.insert(3);
bst.insert(5);
bst.insert(7);
bst.insert(8);
// bst.insert(12);
console.log(bst.root);

//let value = 0;
