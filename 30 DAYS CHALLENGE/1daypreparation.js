/**
 * Linked list
*/

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(key) {
        let obj = {
            data: key,
            next: null
        }
        if (!this.head) {
            this.head = obj;
            this.tail = this.head;

        } else {
            this.tail.next = obj;
            this.tail = obj;
        }
    }
    reverseList() {
        let cur = this.head;
        let prev = null;
        let next = null;
        this.tail = cur;
        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev;
        return this.head;
    }


}

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
console.log(list);
console.log(list.reverseList());
