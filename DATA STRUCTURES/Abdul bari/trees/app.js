class BinaryTree {

    constructor() {
        this.root = null;

    }

    CreateTree() {
        let val = window.prompt('Enter root node');
        let newNode = {
            left: null,
            right: null,
            data: val
        }

        if (!this.root) {
            this.root = newNode;
            Queue.push(this.root);
        }

        while (Queue.length > 0) {
            let last = Queue.shift();
            val = window.prompt('Enter left child of' + last.data);
            if (val !== null) {
                newNode = {
                    left: null,
                    right: null,
                    data: val
                }
                last.left = newNode;
                Queue.push(last.left);
            }

            if (val === null) {
                return;
            }
            val = window.prompt('Enter right child of' + last.data);

            if (val !== null) {
                newNode = {
                    left: null,
                    right: null,
                    data: val
                }
                last.right = newNode;
                Queue.push(last.right);
            }

        }

    }

    preorderTraversal(root = this.root) {

        if (root) {
            console.log(root.data);
            this.preorderTraversal(root.left);
            this.preorderTraversal(root.right);
        }
    }


    preorderTraversalItrative(root = this.root) {
        let stack = [];

        while (root || stack.length > 0) {

            if (root !== null) {
                console.log(root.data);

                stack.push(root);
                root = root.left;
            } else {
                root = stack.pop();

                root = root.right;
            }

        }
    }

    inorderTraversalItrative(root = this.root) {
        let stack = [];

        while (root || stack.length > 0) {

            if (root !== null) {
                stack.push(root);
                root = root.left;
            } else {
                root = stack.pop();
                console.log(root.data);

                root = root.right;
            }

        }
    }

    postorderTraversalItrative(root = this.root) {
        let stack = [];

        while (root || stack.length > 0) {

            if (root !== null) {
                stack.push(root);
                root = root.left;
            } else {
                let temp = stack.pop();
                if (temp.data > 0) {
                    temp.data = -temp.data;
                    stack.push(temp);
                    root = temp.right;
                } else {
                    console.log(-temp.data);
                    root = null;
                }

            }

        }
    }



    levelTraversalItrative(root = this.root) {
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            let item = queue.shift();
            console.log(item.data);

            if (item.left) {
                queue.push(item.left);
            }
            if (item.right) {
                queue.push(item.right);
            }
        }
    }
}

let Queue = [];
let BT = new BinaryTree();
BT.CreateTree();
console.log(BT);

BT.preorderTraversalItrative();
console.log('============');

//BT.postorderTraversalItrative();

BT.levelTraversalItrative();