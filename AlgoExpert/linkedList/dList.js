class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
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
    while (head.next) {
      head = head.next;
    }
    newNode.prev = head;
    head.next = newNode;
    //this.head = currHead;
  }

  reverse(head = this.head) {
    let temp;
    // let currHead = this.head;
    while (head.next) {
      temp = head.next;
      head.next = head.prev;
      head.prev = temp;
      head = head.prev;
      //   if(head)
    }
    console.log(head);
    temp = head.next;
    head.next = head.prev;
    head.prev = temp;
    return (this.head = head);
  }
}

// App intialize
const DbList = new DoublyList();

DbList.insert(1);
DbList.insert(2);
DbList.insert(3);

console.log(DbList);
console.log(DbList.reverse());
