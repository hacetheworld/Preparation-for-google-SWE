class BST {
    constructor() {
        this.root = null;
    }

    closestElement(root, stack, target) {
        if (!root) {
            let last = stack.pop();
            let secondLast = stack.pop();
            let diff1 = Math.abs(target - last.data);
            let diff2 = Math.abs(target - secondLast.data);
            if (diff1 > diff2) {
                return secondLast.data;
            } else {
                return last.data;
            }
        }
        else {
            stack.push(root);
            if (root.data === target) {
                return root.data;
            } else if (target > root.data) {
                return this.closestElement(root.right, stack, target);
            } else {
                return this.closestElement(root.left, stack, target);

            }
        }
    }
}

let B = new BST();

B.root = { left: null, data: 9, right: null };
B.root.left = { left: null, data: 4, right: null };
B.root.right = { left: null, data: 17, right: null };
B.root.left.left = { left: null, data: 3, right: null };
B.root.left.right = { left: null, data: 6, right: null };
B.root.left.right.left = { left: null, data: 5, right: null };
B.root.left.right.right = { left: null, data: 7, right: null };
B.root.right.right = { left: null, data: 22, right: null };
B.root.right.right.right = { left: null, data: 20, right: null };

console.log(B);
console.log(B.closestElement(B.root, stack = [], 4));
console.log(B.closestElement(B.root, stack = [], 18));
console.log(B.closestElement(B.root, stack = [], 12));
