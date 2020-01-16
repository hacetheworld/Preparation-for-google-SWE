class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }


    enqueue(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {

            let lastNode = this.FindLastNode();
            lastNode.next = newNode;
        }

        // return newNode;
    }

    FindLastNode() {
        let head = this.head;
        while (head.next) {
            head = head.next;
        }
        return head;
    }

    traverseList() {
        let head = this.head;
        while (head) {
            console.log(head.data);
            head = head.next;
        }
    }

    RecursiveTraverseList(head = this.head) {
        if (head) {
            console.log(head.data);
            this.RecursiveTraverseList(head.next);
        }
    }

    sumAllList() {

        let sum = 0;
        let head = this.head;

        while (head) {
            sum += head.data;
            head = head.next;
        }
        return sum;
    }

    maximumElement() {

        let head = this.head;
        let max = head.data;
        while (head) {
            head = head.next;
            if (head && head.data > max) {
                max = head.data;
            }
        }
        return max;
    }
    isListSorted() {
        let prev = null;
        let current = this.head;

        while (current) {

            if (!(prev < current.data)) {
                return false;
            }
            prev = current.data;
            current = current.next;
        }
        return true;

    }

    removeDuplicate() {
        let prev = this.head;
        let next = this.head.next;

        while (next) {
            if (prev.data === next.data) {
                prev.next = next.next;
                next = prev.next;
            } else {
                prev = next;
                next = next.next;
            }
        }
        return this;
    }

    reverseList() {
        let prev = null;
        let next = null;

        let cur = this.head;
        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
        return this;
    }

    RecursiveReverseList(current = this.head, prev = null) {

        if (current) {
            this.RecursiveReverseList(current.next, current);
            current.next = prev;

        } else {
            this.head = prev;
        }
        return this;
    }

    //
    removeDups() {

        let hash = new Object();

        let curr = this.head;
        let prev = null;
        while (curr && curr.next) {
            if (!hash[curr.data]) {
                hash[curr.data] = true;
            }
            if (hash[curr.next.data]) {
                curr.next = curr.next.next;
            }
            curr = curr.next;
        }
        return this;
    }
}

let List = new LinkedList();


// List.enqueue(1);
// List.enqueue(2);
// List.enqueue(3);
// List.enqueue(4);
// List.enqueue(5);
// List.enqueue(6);

List.enqueue(12);
List.enqueue(11);
List.enqueue(12);
List.enqueue(21);
List.enqueue(41);
List.enqueue(43);
List.enqueue(21);

console.log(List);

//List.RecursiveTraverseList();
//console.log(List.sumAllList());
//console.log(List.maximumElement());
//console.log(List.isListSorted());
console.log(List.removeDups());
