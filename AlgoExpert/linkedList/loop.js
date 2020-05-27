function findLoop(list) {
  let fast = list.next.next;
  let slow = list.next;
  while (fast.next && fast.value !== slow.value) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (!fast.next) {
    return false;
  }
  slow = list;
  while (fast.value !== slow.value) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
function Node(val) {
  return { next: null, value: val };
}

let list = Node(0);
list.next = Node(1);
list.next.next = Node(2);
list.next.next.next = Node(4);
list.next.next.next.next = Node(5);
list.next.next.next.next.next = Node(6);
list.next.next.next.next.next.next = Node(7);
list.next.next.next.next.next.next.next = Node(8);
list.next.next.next.next.next.next.next.next = Node(9);
list.next.next.next.next.next.next.next.next.next = list.next.next.next;
// let root = {list}
console.log(findLoop(list));
