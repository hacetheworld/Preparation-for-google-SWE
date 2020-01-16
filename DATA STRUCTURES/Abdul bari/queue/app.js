class Queue {
    constructor() {
        this.front = null;
        this.rear = null;

    }

    enqueue(val) {
        let newNode = {
            data: val,
            next: null
        }

        if (this.front == null) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (this.front.next !== null) {
            let item = this.front;
            this.front = item.next;
            return item.data;
        } else {
            let item = this.front;
            this.rear = null;
            this.front = null;
            return item.data;
        }
        return null;
    }
}


let Q = new Queue();
Q.enqueue(10);
Q.enqueue(20);
Q.enqueue(30);
Q.enqueue(40);
console.log(Q.dequeue());
//console.log(Q.dequeue());
//console.log(Q.dequeue());
//console.log(Q.dequeue());

console.log(Q);
