function detechCycle(head) {
    let current = head;
    let slow = head.next;
    let fast = head.next.next;

    while (current) {
        if (slow.val===fast.val) {
            return true;
        }

         slow = slow.next;
     fast = fast.next.next;
    }

    return false;
}