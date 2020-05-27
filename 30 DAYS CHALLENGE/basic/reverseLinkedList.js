function reverseLinkedList(list) {
    if (list) {
        reverseLinkedList(list.next);
        console.log(list.data);
    }
}