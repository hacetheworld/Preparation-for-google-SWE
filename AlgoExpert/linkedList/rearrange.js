function reArrangelist(head, k) {
  let smallestList = null;
  let smallestListTail = null;
  let equalList = null;
  let equalListTail = null;
  let graterList = null;
  let graterListTail = null;
  let currHead = head;
  while (currHead) {
    if (currHead.value > k) {
      if (!graterList) {
        graterList = currHead;
        graterListTail = currHead;
      } else {
        graterListTail.next = currHead;
        graterListTail = currHead;
      }
    } else if (currHead.value < k) {
      if (!smallestList) {
        smallestList = currHead;
        smallestListTail = currHead;
      } else {
        smallestListTail.next = currHead;
        smallestListTail = currHead;
      }
    } else {
      if (!equalList) {
        equalList = currHead;
        equalListTail = currHead;
      } else {
        equalListTail.next = currHead;
        equalListTail = currHead;
      }
    }

    currHead = currHead.next;
  }

  smallestListTail.next = equalList;
  equalListTail.next = graterList;
  return smallestList;
}

function Node(val) {
  return { next: null, value: val };
}

let list = Node(3);
list.next = Node(0);
list.next.next = Node(5);
list.next.next.next = Node(2);
list.next.next.next.next = Node(1);
list.next.next.next.next.next = Node(4);
console.log(reArrangelist(list, 3));
