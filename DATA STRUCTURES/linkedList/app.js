class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(val) {
        // Create newNode using Node class
        const newNode = new Node(val);

        //Check if This.head has value or not

        if (this.head === null) {
            // we know that it is empty so we push in it
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If it has values in it we have to push it to the end

            this.tail.next = newNode;
            //  I know you probably confusing about this that how this.tail.next is going to push at the end , WEll it all has to do with the fact taht obj are refrence type variables which means they don't pass values insted they pass address of data that's why we assigned newNode at the begging by same obj to the HEAD AND TAIL
            // this.head = newNode;
            // this.tail = newNode;
            // so they both have Address in it insted of hardCore value when we change one obj that change will reflect to the other obj

            // Now we are setting it to the newNode to this.tail
            this.tail = newNode;

            //If you are still confusing about that Read about refrence type obj more.....
        }

        this.length++;

    }



    pop() {
        // If node has 1 value
        if (this.length === 1) {
            let DeletedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;

            return DeletedNode.val;
        } else {
            let previousNode = this.traverse();
            const deletedNode = previousNode.next;
            previousNode.next = null;
            this.tail = previousNode;
            this.length--;
            return true;
        }

    }


    shift() {
        let temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
        }

        this.length--;
        return true;
    }
    unshift(val) {
        const newNode = new Node(val);

        if (this.length === 1) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.head;
            newNode.next = temp;
            this.head = newNode;

        }

        this.length++;
        return newNode.val;
    }

    get(index) {

        if (index < 1 || index > this.length) {
            return null;
        }
        let currentNode = this.head;
        let count = 1;

        while (count !== index) {

            currentNode = currentNode.next;
            count++;
        }

        return currentNode.val

    }

    insertAt(index, val) {

        const newNode = new Node(val);

        if (index > this.length) {
            return null;
        }

        if (index === 1) {
            this.unshift(val);
        } else {
            let currentNode = this.head;
            let count = 1;
            while (count < index - 1) {
                currentNode = currentNode.next;
                count++;
            }

            let prev = currentNode;
            let next = currentNode.next;
            prev.next = newNode;
            newNode.next = next;
            this.length++;
        }



    }

    update(index, val) {
        if (index < 1 || index > this.length) {
            return false;
        }

        if (index === 1) {
            this.head.val = val;
            return true;
        }

        let currentNode = this.head;
        let count = 1;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        currentNode.val = val;
        return true;

    }


    removeFrom(index) {

        if (index > this.length) {
            return false;
        }

        if (index === 1) {
            this.shift();
            return true;
        } else if (index === this.length) {
            this.pop();
            return true;
        }
        else {
            let currentNode = this.head;
            let count = 1;
            while (count < index - 1) {
                currentNode = currentNode.next;
                count++;
            }

            let prev = currentNode;
            let next = currentNode.next;
            prev.next = next.next;
            this.length--;

            return true;
        }



    }


    traverse() {
        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next
        }
        return currentNode;
    }



    printList() {
        let currentNode = this.head;
        const arr = [];
        while (currentNode) {
            arr.push(`${currentNode.val} ->`);
            currentNode = currentNode.next
        }
        arr.push('Null')

        return arr.join('');
    }

    reversebyArr() {
        let arr = this.printList();
        let newArr = arr.slice();
        let reversedArr = [];
        for (let i = 0; i < arr.length; i++) {
            reversedArr.push(newArr.pop());
        }

        for (let j = 1; j <= reversedArr.length; j++) {
            this.update(j, reversedArr[j - 1]);

        }
        return reversedArr;
    }


    reverse(head) {
        let previous = null;
        let current = head;
        let following = head;
        while (current !== null) {
            following = following.next;
            current.next = previous;
            previous = current;
            current = following;

        }
        this.tail = this.head;

        this.head = previous;
        return previous;

    }



}


