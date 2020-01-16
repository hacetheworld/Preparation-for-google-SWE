class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    BSTSearch(key) {

        let root = this.root;
        let tail = null;
        while (root) {
            if (root.data == key) {
                return true;
            } else if (root.data < key) {
                tail = root;
                root = root.right;
            } else {
                tail = root;

                root = root.left;
            }
        }

        return tail;

    }


    inorderTraversal(root) {

        if (root) {
            this.inorderTraversal(root.left);
            console.log(root.data);
            this.inorderTraversal(root.right);
        }
    }

    addBst(val) {
        let newNode = {
            left: null,
            data: val,
            right: null
        }

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let tail = this.BSTSearch(val);

        if (tail.data > val) {
            tail.left = newNode;
        } else {
            tail.right = newNode;
        }
    }

    insert(root, val) {
        if (!root) {
            let newNode = {
                left: null,
                data: val,
                right: null
            }

            return newNode;
        }

        if (val > root.data) {
            root.right = this.insert(root.right, val)
        } else if (val < root.data) {
            root.left = this.insert(root.left, val);
        }
        return root;
    }

    Height(root) {
        let x, y;
        if (!root) {
            return 0;
        }
        x = this.Height(root.left);
        y = this.Height(root.right);
        return x > y ? x + 1 : y + 1;
    }

    InPred(root) {
        while (root && root.right) {
            root = root.right;
        }
        return root;
    }

    InSucc(root) {
        while (root && root.left) {
            root = root.left;
        }
        return root;
    }

    DeleteInTree(root, val) {
        if (!root) {
            return null;
        }
        if (!root.left && !root.right) {
            if (root === this.root) {
                this.root = null;
            }
            root = null;
            return root;
        }
        if (root.data === val) {
            let q;
            if (this.Height(root.left) > this.Height(root.right)) {
                q = this.InPred(root.left);
                root.data = q.data;
                root.left = this.DeleteInTree(root.left, q.data);

            } else {
                q = this.InSucc(root.right);
                root.data = q.data;
                root.right = this.DeleteInTree(root.right, q.data);
            }

        } else if (root.data < val) {
            root.right = this.DeleteInTree(root.right, val);
        } else {
            root.left = this.DeleteInTree(root.left, val);
        }
        return root;
    }

    conutNodes(root) {
        if (root) {

            return this.conutNodes(root.left) + this.conutNodes(root.right) + 1;
        }
        return 0;
    }

    conutLeafNodes(root) {

        if (root) {
            if (!root.left && !root.right) {
                return this.conutLeafNodes(root.left) + this.conutLeafNodes(root.right) + 1;
            } else {
                return this.conutLeafNodes(root.left) + this.conutLeafNodes(root.right);
            }
        }
        return 0;
    }

    conutHeight(root) {

        if (root) {
            let x, y;
            x = this.conutHeight(root.left);
            y = this.conutHeight(root.right);

            if (x > y) {
                return x + 1;
            } else {
                return y + 1;
            }
        }
        return 0;
    }
}



let BST = new BinarySearchTree();
//console.log(BST.insert(150));

BST.root = BST.insert(BST.root, 9);
BST.insert(BST.root, 5);
BST.insert(BST.root, 15);
BST.insert(BST.root, 3);
BST.insert(BST.root, 8);
BST.insert(BST.root, 6);
BST.insert(BST.root, 12);
BST.insert(BST.root, 20);
BST.insert(BST.root, 16);
// BST.insert(BST.root, 12);
// BST.insert(BST.root, 3);
// BST.insert(BST.root, 6);
BST.DeleteInTree(BST.root, 9);
//BST.inorderTraversal(BST.root);

console.log(BST);
console.log(BST.conutNodes(BST.root));
console.log(BST.conutLeafNodes(BST.root));
console.log(BST.Height(BST.root));

