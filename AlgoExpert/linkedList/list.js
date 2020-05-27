class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let head = this.head;
    let currHead = head;
    while (head.next) {
      head = head.next;
    }
    head.next = newNode;
    this.head = currHead;
  }

  reverse(head, prev) {
    // if (!head) return null;
    //   #METHOD: 1
    // let curr = this.head;
    // let prev = null;
    // let next = null;
    // while (curr) {
    //   next = curr.next;
    //   curr.next = prev;
    //   prev = curr;
    //   curr = next;
    // }
    // //   this.head
    // return prev;

    //METHOD : Recursive
    // console.log(prev);

    if (head) {
      this.reverse(head.next, head);
      head.next = prev;
      //   return head;
    } else {
      this.head = prev;
    }
    // return th;
  }

  inserSort(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    if (this.head.data > data) {
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
    let head = this.head;
    let prev = head;
    // let currHead = head;
    while (head && head.data < data) {
      prev = head;
      head = head.next;
    }
    newNode.next = prev.next;
    prev.next = newNode;

    return this.head;
  }
}

//MergeList
const MergeList = (l1, l2, l3) => {
  while (l1 && l2) {
    if (l1.data > l2.data) {
      l3.insert(l2.data);
      l2 = l2.next;
    } else {
      l3.insert(l1.data);
      l1 = l1.next;
    }
  }

  while (l1) {
    l3.insert(l1.data);
    l1 = l1.next;
  }
  while (l2) {
    l3.insert(l2.data);
    l2 = l2.next;
  }

  return l3;
};

// App intialize
const list1 = new List();
const list2 = new List();
const list3 = new List();

//Set list1
list1.insert(2);
list1.insert(8);
list1.insert(10);
list1.insert(15);
//list2
list2.insert(4);
list2.insert(7);
list2.insert(12);
list2.insert(19);

console.log(MergeList(list1.head, list2.head, list3));

// list.reverse(list.head, null);
