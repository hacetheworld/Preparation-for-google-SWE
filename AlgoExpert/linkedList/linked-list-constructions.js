class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  setHead(node) {
    let newNode = new Node(node);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.insertBefore(this.head.value, newNode.value);
  }
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail.value, node);
  }
  insertBefore(node, nodeToInsert) {
    let newNode = new Node(nodeToInsert);
    if (nodeToInsert === this.head.value && nodeToInsert === this.tail.value)
      return;

    let currentNode = this.head;
    while (currentNode && currentNode.value !== node) {
      currentNode = currentNode.next;
    }

    newNode.prev = currentNode.prev;
    newNode.next = currentNode;
    if (currentNode.prev === null) {
      this.head = newNode;
    } else {
      currentNode.prev.next = newNode;
    }
    currentNode.prev = newNode;
  }
  insertAfter(node, nodeToInsert) {
    let newNode = new Node(nodeToInsert);
    if (nodeToInsert === this.head.value && nodeToInsert === this.tail.value)
      return;

    let currentNode = this.head;
    while (currentNode && currentNode.value !== node) {
      currentNode = currentNode.next;
    }

    newNode.prev = currentNode;
    newNode.next = currentNode.next;
    if (currentNode.next === null) {
      this.tail = newNode;
    } else {
      currentNode.next.prev = newNode;
    }
    currentNode.next = newNode;
  }
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node.value, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
  //   // O(n) time | O(1) space
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
      node = node.next;
    }
  }
  // O(1) time | O(1) space
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
  removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
}

const List = new DoublyLinkedList();

List.setHead(1);
List.insertAfter(1, 2);
List.insertAfter(2, 4);
List.insertBefore(4, 3);
List.setTail(5);
List.setHead(0);
List.setTail(6);
List.removeNodesWithValue(0);
console.log(List);
