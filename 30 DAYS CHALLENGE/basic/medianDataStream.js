// class MedianFinder {
//   constructor() {
//     this.min = new Heap();
//     this.max = new Heap();
//   }

//   addNum(num) {
//     this.max.push(-num);
//     this.min.push(-this.max.pop());
//     if (this.max.size() < this.min.size()) {
//       this.max.push(-this.min.pop());
//     }
//   }

//   findMedian() {
//     if (this.max.size() === this.min.size()) {
//       return (-this.max.top() + this.min.top()) / 2;
//     } else {
//       return -this.max.top();
//     }
//   }
// };

// class Heap {
//   constructor() {
//     this.heap = [];
//   }

//   push(val) {
//     this.heap.push(val);
//     this.bubbleUp(this.heap.length - 1);
//   }

//   pop() {
//     let toReturn = this.heap[0];
//     let end = this.heap.pop();
//     if (this.heap.length > 0) {
//       this.heap[0] = end;
//       this.bubbleDown(0);
//     }
//     return toReturn;
//   }

//   size() {
//     return this.heap.length;
//   }

//   top() {
//     return this.heap[0];
//   }

//   bubbleUp(idx) {
//     let current = this.heap[idx];
//     while (idx > 0) {
//       let parent = Math.floor((idx + 1) / 2) - 1;
//       let parentEl = this.heap[parent];
//       if (parentEl < current) {
//         break;
//       }
//       [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
//       idx = parent;
//     }
//   }

//   bubbleDown(idx) {
//     let current = this.heap[idx];
//     while (true) {
//       let right = (idx + 1) * 2;
//       let left = right - 1;
//       let swap = null;
//       let leftEl = this.heap[left];
//       if (leftEl < current) {
//         swap = left;
//       }
//       let rightEl = this.heap[right];
//       if (rightEl < (swap ? this.heap[swap] : current)) {
//         swap = right;
//       }
//       if (!swap) {
//         break;
//       }
//       [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
//       idx = swap;
//     }
//   }
//
// }




class maxHeap {
  constructor() {
    this.values = [];

  }

  top() {
    return this.values[this.values.length - 1];
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

    while (currentIdx < length && (this.values[currentIdx] < this.values[lChildIdx] || this.values[currentIdx] < this.values[rChildIdx])) {
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


  first() {
    return this.values[0];
  }
}


class minHeap {
  constructor() {
    this.values = [];

  }

  first() {
    return this.values[0];
  }

  top() {
    return this.values[this.values.length - 1];
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

    while (currentIdx < length && (this.values[currentIdx] > this.values[lChildIdx] || this.values[currentIdx] > this.values[rChildIdx])) {
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


var MedianFinder = function () {
  this.minheap = new minHeap();
  this.maxheap = new maxHeap();
};


MedianFinder.prototype.addNum = function (num) {
  if (this.minheap.values.length == 0 || num > this.minheap.first()) {
    this.minheap.insert(num);
  } else {
    this.maxheap.insert(num);

  }

  if ((this.minheap.values.length > this.maxheap.values.length) && (this.minheap.values.length - this.maxheap.values.length > 1)) {
    this.maxheap.insert(this.minheap.delete());
  } else if ((this.minheap.values.length < this.maxheap.values.length) && (this.maxheap.values.length - this.minheap.values.length > 1)) {
    this.minheap.insert(this.maxheap.delete());
    // this.maxheap.values.pop()

  }

};


MedianFinder.prototype.findMedian = function () {
  if (this.minheap.values.length === this.maxheap.values.length) {
    return (this.minheap.first() + this.maxheap.first()) / 2;
  }

  if (this.minheap.values.length > this.maxheap.values.length) {
    return this.minheap.first();
  } else {
    return this.maxheap.first()
  }


};




var obj = new MedianFinder();

obj.addNum(1)
obj.addNum(2)
obj.addNum(3)
obj.addNum(4)
console.log(obj);

var med = obj.findMedian();

console.log(med);


