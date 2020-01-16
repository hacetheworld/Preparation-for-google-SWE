
class MergeTolinkedlist {
    constructor(linkedList1, linkedList2) {
        this.list1 = linkedList1;
        this.list2 = linkedList2;
    }

    mergeToList() {
        let result = [];
        let list1 = this.list1.head;
        let list2 = this.list2.head;

        while (list1 !== null && list2 !== null) {

            if (list1.val < list2.val) {
                result.push(list1.val);
                list1 = list1.next;
            } else {
                result.push(list2.val);
                list2 = list2.next;
            }
        }

        while (list1 !== null) {
            result.push(list1.val);
            list1 = list1.next;
        }

        while (list2 !== null) {
            result.push(list2.val);
            list2 = list2.next;
        }


        return result;

    }



}

const list1 = new LinkedList();
list1.push(1);
list1.push(3);
list1.push(6);
list1.push(8);
const list2 = new LinkedList()
list2.push(2);
list2.push(4);
list2.push(5);
list2.push(10);


const mergeLinkedList = new MergeTolinkedlist(list1, list2)

console.log(mergeLinkedList.mergeToList());
;