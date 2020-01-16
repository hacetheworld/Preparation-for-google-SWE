class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        //if(index ==0) return;
        let parentIdx = Math.floor((index - 1) / 2);
        while (this.values[parentIdx] < this.values[index]) {

            let temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[index];
            this.values[index] = temp;
            index = parentIdx;
            parentIdx = Math.floor((index - 1) / 2)
        }

    }


    extractMax() {

        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;

            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (swap === null && rightChild > element || swap !== null && rightChild > leftChild) {
                    swap = rightChildIdx;

                }

            }

            if (swap === null) {
                break;
            }

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const maxBH = new MaxBinaryHeap();

let heap = [41, 39, 33, 18, 27, 12];

for (let i = 0; i < heap.length; i++) {
    maxBH.insert(heap[i]);
}
maxBH.insert(70);

console.log(maxBH.extractMax());
console.log(maxBH);
