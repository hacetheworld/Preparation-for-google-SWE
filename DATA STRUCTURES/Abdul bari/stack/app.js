class Stack {

    constructor() {
        this.data = [];
        this.top = -1;
        this.size = 0;
    }
    push(val) {
        this.data.push(val);
        this.size++;
        this.top++;
    }
    pop() {
        if (!this.isEmpty()) {
            let val = this.data.pop();
            this.size--;
            this.top--;
            return val;
        }
        return 0;
    }
    peek(idx) {

        if (!this.isEmpty()) {

            let ps = this.top - idx + 1;
            return this.data[ps];
        }
        return 0;
    }

    isEmpty() {
        if (this.size > 0) {
            return false;
        } else {
            return true;
        }
    }

}

let stk = new Stack();
stk.push(10);
stk.push(20);
stk.push(30);
console.log(stk);
//console.log(stk.pop());
//console.log(stk.pop());
console.log(stk.peek(1));

console.log(stk);
