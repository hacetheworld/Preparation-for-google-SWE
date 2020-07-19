class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def makeHead(self, node):
        node.next = self.head
        self.head = node

    def append(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode

    def makeTail(self, node):
        self.tail.next = node
        self.tail = self.tail.next

    def insert(self, value):
        newNode = Node(value)
        if(self.head is None):
            self.head = newNode
            self.tail = newNode
            return
        if(self.head.value > value):
            self.makeHead(newNode)
            return
        if(self.tail.value < value):
            self.makeTail(newNode)
            return
        head = self.head
        while(head.next and head.next.value < value):
            head = head.next
        temp = head.next
        head.next = newNode
        newNode.next = temp
        return

    def merge(self, list2):
        p = self.head
        q = list2.head

        while p != None and q != None:
            p_next = p.next
            q_next = q.next

            q.next = p_next
            p.next = q

            p = p_next
            q = q_next
        # print(q.value)
        list2.head = q

    def printList(self):
        head = self.head
        result = []
        while head:
            result.append(head.value)
            head = head.next
        return result


# Test
llist1 = LinkedList()
llist1.append(3)
llist1.append(2)
llist1.append(1)

llist2 = LinkedList()
llist2.append(8)
llist2.append(7)
llist2.append(6)
llist2.append(5)
llist2.append(4)
# print(llist)
llist1.merge(llist2)
print(llist1.printList())
print(llist2.printList())
