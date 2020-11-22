def makeAdjList(arr, v):
    adjList = [[] for _ in range(v)]
    for u in arr:
        adjList[u[0]].append(u[1])
        adjList[u[1]].append(u[0])
    return adjList


def findBridge(arr, v):
    adjList = makeAdjList(arr, v)
    inArr = [0 for _ in range(v)]
    lowArr = [0 for _ in range(v)]
    timer = 0
    visited = [False for _ in range(v)]
    dfs(adjList, 1, -1, inArr, lowArr, timer, visited)


def dfs(adjList, node, parent, inArr, lowArr, timer, visited):
    visited[node] = True
    inArr[node] = lowArr[node] = timer

    for child in adjList[node]:
        if child == parent:
            continue
        if visited[child]:
            lowArr[node] = min(lowArr[node], inArr[child])
        else:
            dfs(adjList, child, node, inArr, lowArr, timer+1, visited)
            if inArr[node] < lowArr[child]:
                print("Vertices ->", node, " and ->", child, " form a bridge.")
            lowArr[node] = min(lowArr[node], lowArr[child])


arr = [[1, 2], [1, 3], [1, 4]]
v = 5
findBridge(arr, v)
