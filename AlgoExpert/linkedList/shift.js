function shiftList(head, k) {
  let listTail = head;
  let listLength = 1;
  while (listTail.next) {
    listTail = listTail.next;
    listLength++;
  }

  let offSet = k % listLength;

  if (offSet == 0) return;
  let newTailPosition = listLength - offSet;
  let newTail = head;
  for (let i = 1; i < newTailPosition; i++) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  listTail.next = head;
  return newHead;
}

function Node(val) {
  return { next: null, value: val };
}

let list = Node(0);
list.next = Node(1);
list.next.next = Node(2);
// list.next.next.next = Node(3);
// list.next.next.next.next = Node(4);
// list.next.next.next.next.next = Node(5);
console.log(shiftList(list, 4));
