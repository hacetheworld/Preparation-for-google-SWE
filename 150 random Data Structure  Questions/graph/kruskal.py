# def makeAdjList(arr, v):
#     adjList = [[] for _ in range(v)]
#     for u in arr:
#         adjList[u[0]].append(u[1])
#         adjList[u[1]].append(u[0])
#     return adjList


# def kruskal(arr, v):
#     adjList = makeAdjList(arr, v+1)
#     sortedEdges = sorted(adjList, key=lambda x: x[1])
#     res = []
#     parent = [-1 for _ in range(v+1)]
#     rank = [0 for _ in range(v+1)]
#     while v > 0:
#         minNode =
import math


def Solution(L, R):
    counter = 0
    totalNum = (R-L)+1
    tillInc = 0
    for i in range(L, R+1):
        if check(i):
            diff = totalNum-tillInc
            counter = 1 + math.floor(diff/2)
            return counter
        tillInc += 1
    return counter


def check(i):
    numLength = math.floor(math.log10(i)+1)
    while True:
        if numLength == 1:
            if (i % 2) > 0:
                return True
            else:
                return False
        rem = i % 10
        i = math.floor(i/10)

        if(numLength % 2) != 0:
            if(rem % 2) == 0:
                break
        if(numLength % 2) == 0:
            if (rem % 2) != 0:
                break
        numLength -= 1


for t in range(int(input())):
    L, R = map(int, input().split())
    print("Case #{}: {}".format(t+1, Solution(L, R)))
