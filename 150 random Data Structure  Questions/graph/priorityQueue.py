import math


class PriorityQueue():
    def __init__(self):
        self.pqList = []

    def add(self, node):
        self.pqList.append(node)
        currIdx = len(self.pqList)-1
        parent = math.floor((currIdx-1)/2)
        if len(self.pqList) == 1:
            return
        self.moveUp(currIdx, parent)

    def remove(self):
        removedNode = self.pqList[0]
        self.pqList[0] = self.pqList[-1]
        self.pqList.pop()
        currIdx = 0
        if len(self.pqList) == 1:
            return removedNode
        self.moveDown(currIdx)
        return removedNode

    def moveUp(self, currIdx, parent):
        while currIdx > 0 and self.pqList[parent][1] > self.pqList[currIdx][1]:
            temp = self.pqList[parent]
            self.pqList[parent] = self.pqList[currIdx]
            self.pqList[currIdx] = temp
            currIdx = parent
            parent = math.floor((currIdx-1)/2)

    def moveDown(self, currIdx):
        leftIdx = (2 * currIdx)+1
        rightIdx = (2 * currIdx)+2
        while currIdx < len(self.pqList):
            temp = None
            if rightIdx < len(self.pqList) and self.pqList[leftIdx][1] > self.pqList[rightIdx][1]:
                temp = self.pqList[currIdx]
                self.pqList[currIdx] = self.pqList[rightIdx]
                self.pqList[rightIdx] = temp
                currIdx = rightIdx
            elif leftIdx < len(self.pqList) and self.pqList[leftIdx][1] < self.pqList[currIdx][1]:
                temp = self.pqList[currIdx]
                self.pqList[currIdx] = self.pqList[leftIdx]
                self.pqList[leftIdx] = temp
                currIdx = leftIdx
            else:
                break
            leftIdx = (2 * currIdx)+1
            rightIdx = (2 * currIdx)+2


pq = PriorityQueue()
pq.add([1, 4])
pq.add([2, 3])
pq.add([3, 2])
pq.add([4, 1])
pq.add([5, 0])
pq.add([6, 1])
print(pq.pqList)
print(pq.remove())
print(pq.remove())
print(pq.remove())
print(pq.remove())
print(pq.remove())
print(pq.remove())
