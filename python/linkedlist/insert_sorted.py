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

    def getHead(self):
        return self.head.value

    def getTail(self):
        return self.tail.value

    def printList(self):
        head = self.head
        result = []
        while head:
            result.append(head.value)
            head = head.next
        return result


# Test
llist = LinkedList()
llist.insert(5)
llist.insert(6)
llist.insert(7)
llist.insert(3)
llist.insert(1)
llist.insert(9)

# print(llist)
print(llist.printList())
