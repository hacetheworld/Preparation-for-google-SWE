class Linkedlist {

    constructor() {
        this.head = null;
        this.size = 0;
        this.top = -1;
    }

    push(data) {
        const newNode = {
            data: data,
            next: null
        }

        if (this.size == 0) {
            this.head = newNode;
        } else {
            let Currhead = this.head;
            newNode.next = Currhead;
            this.head = newNode;
        }
        this.size++;
        this.top++;
    }

    pop() {
        if (this.size == 0) {
            return null;
        } else {
            let last = this.head;
            this.head = last.next;
            last.next = null;
            this.size--;
            this.top--;
            return last.data;
        }

    }
    isEmpty() {
        if (this.size > 0) {
            return false;
        } return true;
    }
}



let StkLinkedList = new Linkedlist();

StkLinkedList.push(1);
StkLinkedList.push(2);
StkLinkedList.push(3);
console.log(StkLinkedList.pop());
console.log(StkLinkedList.isEmpty());

console.log(StkLinkedList);
