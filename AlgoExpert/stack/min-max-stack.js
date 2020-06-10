class MinMax {
  constructor() {
    this.stack = [];
  }
  getMin() {
    return this.stack.length > 0
      ? this.stack[this.stack.length - 1].min
      : Infinity;
  }
  getMax() {
    return this.stack.length > 0
      ? this.stack[this.stack.length - 1].max
      : -Infinity;
  }
  peek() {
    return this.stack[this.stack.length - 1].value;
  }
  push(value) {
    const newValue = {
      min: Math.min(this.getMin(), value),
      max: Math.max(this.getMax(), value),
      value,
    };

    if (this.stack.length === 0) {
    }

    this.stack.push(newValue);
  }
  pop() {
    this.stack.pop();
  }
}
const MinMaxStk = new MinMax();
MinMaxStk.push(5);
console.log(MinMaxStk.getMin());
console.log(MinMaxStk.getMax());
MinMaxStk.push(7);
console.log(MinMaxStk.getMin());
console.log(MinMaxStk.getMax());
MinMaxStk.push(2);
console.log(MinMaxStk.getMin());
console.log(MinMaxStk.getMax());
console.log(MinMaxStk);
