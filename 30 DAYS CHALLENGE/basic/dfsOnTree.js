class BST {
    constructor() {
        this.root = null;
    }

    DFS(root, result = []) {
        if (!root) {
            return;
        }
        result.push(root.data);
        this.DFS(root.left, result);
        this.DFS(root.right, result);
        return result
    }

    DfsIterative(root) {
        if (!root) {
            return null;
        }

        let stk = [];
        let result = [];


        while (root || stk.length > 0) {
            if (root) {
                result.push(root.data);
                stk.push(root);
                root = root.left;
            } else {
                // root = stk.pop();
                root = stk.pop().right;
            }
        }
        return result;
    }


    DfsInIterative(root) {
        if (!root) {
            return null;
        }
        let stk = [];
        let result = [];
        while (root || stk.length > 0) {
            if (root) {

                stk.push(root);
                root = root.left;
            } else {
                root = stk.pop();
                result.push(root.data);
                root = root.right;
            }
        }
        return result;
    }

    DfsPostIterative(root) {
        if (!root) {
            return null;
        }
        let stk = [];
        let result = [];
        let temp;
        while (root || stk.length > 0) {
            if (root) {
                stk.push(root);
                root = root.left;
            } else {
                root = stk.pop();
                let temp = {
                    left: root.left,
                    data: -root.data,
                    right: root.right
                };
                if (root.data > 0) {
                    stk.push(temp);
                    root = root.right;
                } else {
                    result.push(-root.data);
                    root = null;
                }

            }
        }
        return result;
    }
}

let B = new BST();

// B.root = { left: null, data: 9, right: null };
// B.root.left = { left: null, data: 4, right: null };
// B.root.right = { left: null, data: 17, right: null };
// B.root.left.left = { left: null, data: 3, right: null };
// B.root.left.right = { left: null, data: 6, right: null };
// B.root.left.right.left = { left: null, data: 5, right: null };
// B.root.left.right.right = { left: null, data: 7, right: null };
// B.root.right.right = { left: null, data: 22, right: null };
// B.root.right.right.right = { left: null, data: 20, right: null };

B.root = { left: null, data: 1, right: null };
B.root.left = { left: null, data: 2, right: null };
B.root.right = { left: null, data: 3, right: null };
B.root.left.left = { left: null, data: 4, right: null };
B.root.left.right = { left: null, data: 5, right: null };
B.root.right.left = { left: null, data: 6, right: null };
B.root.right.right = { left: null, data: 7, right: null };

console.log(B);
console.log(B.DFS(B.root));
console.log(B.DfsIterative(B.root));
console.log(B.DfsInIterative(B.root));
console.log(B.DfsPostIterative(B.root));


