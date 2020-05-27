class BT {
    constructor() {
        this.root = null;
    }

    pathSum(root, sum) {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right) {
            return sum === root.data;
        }
        return this.pathSum(root.left, sum - root.data) || this.pathSum(root.right, sum - root.data);
    }
}

let B = new BT();

B.root = { left: null, data: 5, right: null };
B.root.left = { left: null, data: 4, right: null };
B.root.right = { left: null, data: 8, right: null };
B.root.left.left = { left: null, data: 11, right: null };
B.root.left.left.left = { left: null, data: 7, right: null };
B.root.left.left.right = { left: null, data: 2, right: null };
B.root.right.left = { left: null, data: 13, right: null };
B.root.right.right = { left: null, data: 4, right: null };
B.root.right.right.right = { left: null, data: 5, right: null };

console.log(B);
let total = 0;
console.log(B.pathSum(B.root, 22));


