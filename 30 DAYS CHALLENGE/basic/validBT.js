
var isBalanced = function (root) {
    if (height(root) > -1) return true;
    return false;
};

function height(root) {
    if (root == null) return 0;
    let x = height(root.left);
    let y = height(root.right);
    if (x == -1 || y == -1) return -1;
    if (Math.abs(x - y) > 1) return -1;
    return x > y ? x + 1 : y + 1;

}