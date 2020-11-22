import queue
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


def adjList(arr, v):
    adjList = [[] for _ in range(v)]
    for u in arr:
        adjList[u[0]].append([u[1], u[2]])
        adjList[u[1]].append([u[0], u[2]])
    return adjList


def dijkstra(arr, v, src, dst):
    adjListGraph = adjList(arr, v)
    path = {}
    dist = {}
    for i in range(v):
        dist[i] = float("inf")
        path[i] = None
        if src == i:
            dist[i] = 0
            path[i] = None
    helperDijkstra(adjListGraph, v, path, dist, src, dst)


def helperDijkstra(adjList, v, path, dist, src, dst):
    visited = [False for _ in range(v)]
    pq = PriorityQueue()
    pq.add([src, dist[src]])
    while len(pq.pqList) > 0:
        minNodeItem = pq.remove()
        currNode = minNodeItem[0]
        # mark visited that node
        visited[currNode] = True
        neighborNodes = adjList[currNode]
        for neighbor in neighborNodes:
            neighborNode = neighbor[0]
            neighborNodeWeight = neighbor[1]
            if visited[neighborNode] == False and dist[currNode]+neighborNodeWeight < dist[neighborNode]:
                dist[neighborNode] = dist[currNode]+neighborNodeWeight
                path[neighborNode] = currNode
                pq.add([neighborNode, dist[neighborNode]])

    print("path", path)
    print("dist", dist)


arr = [[0, 1, 4], [0, 7, 8], [1, 7, 11], [1, 2, 8], [2, 3, 7], [2, 8, 2], [2, 5, 4], [
    7, 8, 7], [7, 6, 1], [8, 6, 6], [3, 5, 14], [3, 4, 9], [5, 6, 2], [4, 5, 10]]
v = 9
dijkstra(arr, v, 0, 4)
