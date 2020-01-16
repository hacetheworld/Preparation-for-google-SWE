
function findUinonAndIntersection(list1, list2) {

    // Make hash map and store values of first list

    let hash = new Object();
    let curHeadOfList1 = list1.head;
    while (curHeadOfList1 !== null) {

        if (!hash[curHeadOfList1.data]) {
            hash[curHeadOfList1.data] = curHeadOfList1.data;
        }

        curHeadOfList1 = curHeadOfList1.next;

    }

    // strat second loop on list2 and make two arrays and fill them based on if values exist in hash map or not
    let union = [];
    let intersection = [];
    let hash2 = new Object();
    let curHeadOfList2 = list2.head;
    while (curHeadOfList2 !== null) {

        if (hash[curHeadOfList2.data]) {
            union.push(curHeadOfList2.data);
        } else {

            intersection.push(curHeadOfList2.data);
        }

        if (!hash2[curHeadOfList2.data]) {
            hash2[curHeadOfList2.data] = curHeadOfList2.data;
        }

        curHeadOfList2 = curHeadOfList2.next;

    }

    for (const key in hash) {
        intersection.push(hash[key]);
    }

    // Now make two linked list using both arr
    let unionList = new LinkedList();
    for (let k = 0; k < union.length; k++) {
        unionList.push(union[k]);
    }

    let intersectionList = new LinkedList();
    for (let l = 0; l < intersection.length; l++) {
        intersectionList.push(intersection[l]);
    }



    return [unionList.printList(), intersectionList.printList()]

}


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        // Create newNode using Node class
        const newNode = new Node(data);

        //Check if This.head has dataue or not

        if (this.head === null) {
            // we know that it is empty so we push in it
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If it has dataues in it we have to push it to the end

            this.tail.next = newNode;
            //  I know you probably confusing about this that how this.tail.next is going to push at the end , WEll it all has to do with the fact taht obj are refrence type variables which means they don't pass dataues insted they pass address of data that's why we assigned newNode at the begging by same obj to the HEAD AND TAIL
            // this.head = newNode;
            // this.tail = newNode;
            // so they both have Address in it insted of hardCore value when we change one obj that change will reflect to the other obj

            // Now we are setting it to the newNode to this.tail
            this.tail = newNode;

            //If you are still confusing about that Read about refrence type obj more.....
        }

        this.length++;

    }


    printList() {
        let currentNode = this.head;
        const arr = [];
        while (currentNode) {
            arr.push(`${currentNode.data} ->`);
            currentNode = currentNode.next
        }
        arr.push('Null')

        return arr.join('');
    }

}



let list1 = new LinkedList();

list1.push(10);
list1.push(15);
list1.push(4);
list1.push(20);

let list2 = new LinkedList();
list2.push(8);
list2.push(4);
list2.push(2);
list2.push(10);


console.log(findUinonAndIntersection(list1, list2));
