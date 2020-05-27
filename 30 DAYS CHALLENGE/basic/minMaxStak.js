class minMax {
    constructor() {
        this.values = [];
        this.top = null;

    }


    push(val) {
        if (this.values.length == 0) {
            this.values.push({ data: val, min: val });
            this.top = this.values[this.values.length - 1];
            return;
        }
        let top = this.top.min;
        this.values.push({ data: val, min: Math.min(val, top) });

        this.top = this.values[this.values.length - 1];

    }

    pop() {
        this.values.pop();
        this.top = this.values[this.values.length - 1];
    }

    top() {
        return this.top;
    }

    getMin() {
        return this.top.min;
    }



}

let minMaxStack = new minMax();
minMaxStack.push(2);
minMaxStack.push(3);
minMaxStack.push(1);

//minMaxStack.push(6);
minMaxStack.push(0);
//console.log(minMaxStack.getMin());
//console.log(minMaxStack.getMax());
// minMaxStack.pop();
// minMaxStack.pop();
// minMaxStack.pop();
console.log(minMaxStack.getMin());
//console.log(minMaxStack.getMin());

console.log(minMaxStack);
