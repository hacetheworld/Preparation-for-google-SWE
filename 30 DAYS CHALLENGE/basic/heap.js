class maxHeap {
    constructor() {
        this.values = [];

    }

    insert(key) {
        this.values.push(key);

        let currentIdx = this.values.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);

        while (currentIdx !== parentIdx && this.values[currentIdx] > this.values[parentIdx]) {

            let temp = this.values[currentIdx];
            this.values[currentIdx] = this.values[parentIdx];
            this.values[parentIdx] = temp;
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }

    delete() {
        let el = this.values[0];
        let length = this.values.length;
        this.values[0] = this.values[length - 1];
        this.values.pop();
        let currentIdx = 0;
        let lChildIdx = 2 * currentIdx + 1;
        let rChildIdx = 2 * currentIdx + 2;

        while (currentIdx < length && (this.values[currentIdx] > this.values[lChildIdx] || this.values[currentIdx] > this.values[rChildIdx])) {
            let temp = this.values[currentIdx];
            if (this.values[lChildIdx] > this.values[rChildIdx]) {

                this.values[currentIdx] = this.values[rChildIdx];
                this.values[rChildIdx] = temp;

                currentIdx = rChildIdx;
                lChildIdx = 2 * currentIdx + 1;
                rChildIdx = 2 * currentIdx + 2;
            } else {

                this.values[currentIdx] = this.values[lChildIdx];
                this.values[lChildIdx] = temp;

                currentIdx = lChildIdx;
                lChildIdx = 2 * currentIdx + 1;
                rChildIdx = 2 * currentIdx + 2;
            }
        }
        return el;
    }
}


class minHeap {
    constructor() {
        this.values = [];

    }

    insert(key) {
        this.values.push(key);

        let currentIdx = this.values.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);

        while (currentIdx !== parentIdx && this.values[currentIdx] < this.values[parentIdx]) {

            let temp = this.values[currentIdx];
            this.values[currentIdx] = this.values[parentIdx];
            this.values[parentIdx] = temp;
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx / 2);
        }
    }

    delete() {
        let el = this.values[0];
        let length = this.values.length;
        this.values[0] = this.values[length - 1];
        this.values.pop();
        let currentIdx = 0;
        let lChildIdx = 2 * currentIdx + 1;
        let rChildIdx = 2 * currentIdx + 2;

        while (currentIdx < length && (this.values[currentIdx] < this.values[lChildIdx] || this.values[currentIdx] < this.values[rChildIdx])) {
            let temp = this.values[currentIdx];
            if (this.values[lChildIdx] < this.values[rChildIdx]) {

                this.values[currentIdx] = this.values[rChildIdx];
                this.values[rChildIdx] = temp;

                currentIdx = rChildIdx;
                lChildIdx = 2 * currentIdx + 1;
                rChildIdx = 2 * currentIdx + 2;
            } else {

                this.values[currentIdx] = this.values[lChildIdx];
                this.values[lChildIdx] = temp;

                currentIdx = lChildIdx;
                lChildIdx = 2 * currentIdx + 1;
                rChildIdx = 2 * currentIdx + 2;
            }
        }
        return el;
    }
}

const heap1 = new minHeap();
const heap2 = new maxHeap();

heap1.insert(30)
heap1.insert(20)
heap1.insert(15)
heap1.insert(5)
heap2.insert(10)
heap2.insert(12)
heap2.insert(6)
heap2.insert(40)
heap2.insert(50)
heap2.insert(45)

console.log(heap1);
console.log(heap2);
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap.delete());
// console.log(heap);
