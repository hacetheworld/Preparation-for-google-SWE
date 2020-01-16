class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(val) {
        // Create newNode using Node class
        const newNode = new Node(val);

        //Check if This.head has value or not

        if (this.head === null) {
            // we know that it is empty so we push in it
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If it has values in it we have to push it to the end

            this.tail.next = newNode;
            //  I know you probably confusing about this that how this.tail.next is going to push at the end , WEll it all has to do with the fact taht obj are refrence type variables which means they don't pass values insted they pass address of data that's why we assigned newNode at the begging by same obj to the HEAD AND TAIL
            // this.head = newNode;
            // this.tail = newNode;
            // so they both have Address in it insted of hardCore value when we change one obj that change will reflect to the other obj

            // Now we are setting it to the newNode to this.tail
            this.tail = newNode;

            //If you are still confusing about that Read about refrence type obj more.....
        }

        this.length++;

    }


    reverseByRecur(cur = this.head) {
        if (cur == null) {
            return [];
        }
        return this.reverseByRecur(cur.next).concat(`${cur.val}->`);

    }



}




const List = new LinkedList();

List.push(10);
List.push(20);
List.push(30);
List.push(40);
List.push(50);

console.log(List);
console.log(List.reverseByRecur());
