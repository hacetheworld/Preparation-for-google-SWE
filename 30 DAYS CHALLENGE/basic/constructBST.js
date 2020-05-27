class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}



class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(root, key) {
        if (!root) {
            this.root = new Node(key);
            return true;
        }

        let last = null;
        while (root) {
            last = root;

            if (root.val === key) {

                return false;
            } else if (key > root.val) {
                root = root.right;
            } else {
                root = root.left;
            }
        }

        let newNode = new Node(key);


        if (key > last.val) {
            last.right = newNode
        } else {
            last.left = newNode

        }

        return true;
    }
    delete() {

    }
}

let BST = new BinarySearchTree();

BST.insert(BST.root, 30);
BST.insert(BST.root, 20);
BST.insert(BST.root, 40);
BST.insert(BST.root, 10);
BST.insert(BST.root, 25);
BST.insert(BST.root, 35);
BST.insert(BST.root, 50);
console.log(BST);
