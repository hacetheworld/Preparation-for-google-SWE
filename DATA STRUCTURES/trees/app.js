class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        } else {
            let current = this.root;
            while (true) {
                // If current value is less than root
                if (current.value > value) {
                    // left side

                    // check if current node has left value or null if not put new node to the current.left and we are done
                    if (!current.left) {
                        current.left = newNode;
                        return;
                    }
                    current = current.left;
                }
                // If current value is grater than root
                if (current.value < value) {
                    // right side

                    // check if current node has right value or null if not put new node to the current.right and we are done
                    if (!current.right) {
                        current.right = newNode;
                        return;
                    }
                    current = current.right;
                }
            }
        }
    }


    find(value) {
        if (!this.root) {
            return null;
        }

        // check if current root is the value we are looking for

        let current = this.root;
        while (current) {
            if (current.value === value) {
                return true;
            } else if (current.value < value) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        //end while loop

        return false;
    }


    insertRecur(current, value) {

        if (this.root === null) {
            this.root = new Node(value);
            return;
        } else if (current.value > value) {
            if (!current.left) {
                current.left = new Node(value);
                return;
            }
            this.insertRecur(current.left, value)
        } else {
            if (!current.right) {
                current.right = new Node(value);
                return;
            }
            this.insertRecur(current.right, value)
        }
        return;
    }


    BFS() {
        let queue = [];
        let visited = [];
        let current = this.root;
        queue.push(current);

        while (queue.length) {
            let first = queue.shift();
            visited.push(first.value);
            if (first.left) {
                queue.push(first.left);
            }
            if (first.right) {
                queue.push(first.right);
            }
        }
        return visited;
    }

    DFSPreOrder() {
        let visited = [];
        let current = this.root;
        this.traverse(current, visited);
        return visited;
    }


    traverse(current, visited) {
        if (!current) return;

        visited.push(current.value);
        if (current.left) this.traverse(current.left, visited)

        if (current.right) this.traverse(current.right, visited)

        return visited;

    }

    CalculateHeight(current = this.root) {
        if (current === null) return 0;
        let left, right;
        left = this.CalculateHeight(current.left);
        right = this.CalculateHeight(current.right);
        return 1 + Math.max(left, right);
    }



}



const BST = new BinarySearchTree();
BST.insertRecur(BST.root, 10);
BST.insertRecur(BST.root, 15);
BST.insertRecur(BST.root, 20);
BST.insertRecur(BST.root, 12);
BST.insertRecur(BST.root, 6);
BST.insertRecur(BST.root, 8);
BST.insertRecur(BST.root, 3);


// // console.log(BST.find(10))
// // console.log(BST.find(150))
// //console.log(BST.find(6))
// console.log(BST);
// console.log(BST.BFS());
// let visited = [];
// console.log(BST.DFSPreOrder());


console.log(BST.CalculateHeight())
