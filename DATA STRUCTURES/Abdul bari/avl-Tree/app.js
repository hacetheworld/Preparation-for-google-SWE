
class Node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    nodeHeight(root) {
        let hl, hr;
        hl = root && root.left ? root.left.height : 0;
        hr = root && root.right ? root.right.height : 0;

        return hl > hr ? hl + 1 : hr + 1;
    }

    balancedFactor(root) {
        let hl, hr;
        hl = root && root.left ? root.left.height : 0;
        hr = root && root.right ? root.right.height : 0;

        return hl - hr;
    }

    LLRotation(root) {

        let B = root.left;
        let BR = B.right;

        B.right = root;
        root.left = BR;
        root.height = this.nodeHeight(root);
        B.height = this.nodeHeight(B);

        if (this.root === root) {
            this.root = B;
        }

        return B;
    }

    LRRotation(root) {

        let B = root.left;
        let C = B.right;
        let Cl = C.left;
        let Cr = C.right;
        C.right = root;
        C.left = B;
        B.right = Cl;
        root.left = Cr;
        root.height = this.nodeHeight(root);
        B.height = this.nodeHeight(B);
        C.height = this.nodeHeight(C);
        if (this.root === root) {
            this.root = C;
        }

        return C;
    }
    Insert(root, val) {

        if (!root) {
            let newNode = new Node(val);
            return newNode;
        }
        if (val > root.data) {
            root.right = this.Insert(root.right, val)
        } else if (val < root.data) {
            root.left = this.Insert(root.left, val);
        }
        root.height = this.nodeHeight(root);

        if (this.balancedFactor(root) == 2 && this.balancedFactor(root.left) == 1) {
            return this.LLRotation(root);
        } else if (this.balancedFactor(root) == 2 && this.balancedFactor(root.left) == -1) {
            return this.LRRotation(root);
        } else if (this.balancedFactor(root) == -2 && this.balancedFactor(root.right) == -1) {
            return this.RRRotation(root);
        } else if (this.balancedFactor(root) == 2 && this.balancedFactor(root.right) == 1) {
            return this.RLRotation(root);
        }

        //return root;

    }

}


let AT = new AVLTree();
AT.root = new Node(30);
AT.Insert(AT.root, 10);
AT.Insert(AT.root, 20);
console.log(AT);
