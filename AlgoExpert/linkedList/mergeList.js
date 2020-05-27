function mergeList(list1, list2) {
  let third, first, last, second;
  first = list1;
  second = list2;
  if (first.value > second.value) {
    third = second;
    last = second;
    second = second.next;
    last.next = null;
  } else {
    third = first;
    last = first;
    first = first.next;
    last.next = null;
  }

  while (first && second) {
    if (first.value > second.value) {
      last.next = second;
      last = second;
      second = second.next;
    } else {
      last.next = first;
      last = first;
      first = first.next;
    }
  }

  if (first) {
    last.next = first;
  }
  if (second) {
    last.next = second;
  }
  return third;
}

function Node(val) {
  return { next: null, value: val };
}

let list1 = Node(2);
list1.next = Node(6);
list1.next.next = Node(7);
list1.next.next.next = Node(8);

let list2 = Node(1);
list2.next = Node(3);
list2.next.next = Node(4);
list2.next.next.next = Node(5);
list2.next.next.next.next = Node(9);
list2.next.next.next.next.next = Node(10);

console.log(mergeList(list1, list2));
