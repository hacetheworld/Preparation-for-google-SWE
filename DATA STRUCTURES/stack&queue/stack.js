class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;

    }

    pop() {
        if (!this.first) {
            return null;
        }

        if (this.first.next == null) {
            let last = this.last;
            this.last = null;
            this.first = null;
            return last;

        } else {
            let temp = this.first;
            this.first = temp.next;

            return temp;
        }

    }

    push(val) {
        const newNode = new Node(val);

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

    }


    isEmpty() {
        if (this.first) {
            return false;
        } else {
            return true;
        }
    }


}


const s = new Stack();

s.push('Ajay');
s.push('Meena');
s.push('Love');
s.push('Coding');
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());

console.log(s.isEmpty());

console.log(s);
