function invertTree(root) {
    if (root) {
        let left = invertTree(root.left);
        let right = invertTree(root.right);
        root.left = right;
        root.right = left;
        return root;
    }
    return null

};

function InvertTreeIterative(root) {
    if (root) {
        let queue = [];

        queue.push(root);

        while (queue.length > 0) {
            let item = queue.shift();

            let temp = item.left;
            item.left = item.right;
            item.right = temp;
            if (item.left) {
                queue.push(item.left);
            }
            if (item.right) {
                queue.push(item.right)
            }
        }
    } else {
        return null;
    }

    return root;
}


let B = {};

B.root = { left: null, data: 4, right: null };
B.root.left = { left: null, data: 2, right: null };
B.root.right = { left: null, data: 7, right: null };
B.root.left.left = { left: null, data: 1, right: null };
B.root.left.left.right = { left: null, data: 3, right: null };
B.root.right.left = { left: null, data: 6, right: null };
B.root.right.right = { left: null, data: 9, right: null };
console.log(InvertTreeIterative(B.root));


