const minHeapFunc = (a, b) => {
  return a < b;
};
const maxHeapFunc = (a, b) => {
  return a > b;
};

class MinMaxHeap {
  constructor(comparisionFunc, array) {
    this.comparisionFunc = comparisionFunc;
    this.heap = [];
    this.length = this.heap.length;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;

    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (
        childTwoIdx != -1 &&
        this.comparisionFunc(heap[childTwoIdx], heap[childOneIdx])
      ) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (this.comparisionFunc(heap[idxToSwap], heap[currentIdx])) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      this.comparisionFunc(heap[currentIdx], heap[parentIdx])
    ) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    let valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    this.length--;
    return valueToRemove;
  }
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
    this.length++;
  }
  swap(i, j, heap) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

class MedianContinuos {
  constructor() {
    this.minHeap = new MinMaxHeap(maxHeapFunc, []);

    this.maxHeap = new MinMaxHeap(minHeapFunc, []);
    this.median = null;
  }
  insert(number) {
    if (this.minHeap.length === 0 || number < this.minHeap.peek()) {
      this.minHeap.insert(number);
    } else {
      this.maxHeap.insert(number);
    }
    this.rebalancedHeap();
    this.updateMedian();
  }
  rebalancedHeap() {
    if (this.minHeap.length - this.maxHeap.length === 2) {
      this.maxHeap.insert(this.minHeap.remove());
    } else if (this.maxHeap.length - this.minHeap.length === 2) {
      this.minHeap.insert(this.maxHeap.remove());
    }
  }
  updateMedian() {
    if (this.minHeap.length === this.maxHeap.length) {
      this.median = (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.median = this.minHeap.peek();
    } else {
      this.median = this.maxHeap.peek();
    }
  }
  getMedian() {
    return this.median;
  }
}

const medianObj = new MedianContinuos();
medianObj.insert(5);
console.log(medianObj.getMedian());

medianObj.insert(10);
console.log(medianObj.getMedian());
medianObj.insert(100);
console.log(medianObj.getMedian());
medianObj.insert(200);
console.log(medianObj.getMedian());
medianObj.insert(6);
console.log(medianObj.getMedian());
medianObj.insert(13);
console.log(medianObj.getMedian());
medianObj.insert(14);
console.log(medianObj.getMedian());

console.log(medianObj);
