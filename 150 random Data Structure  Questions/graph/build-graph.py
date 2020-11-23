def adjList(arr, v):
    adjList = [[] for _ in range(v)]
    for u in arr:
        adjList[u[0]].append(u[1])
        # adjList[u[1]].append(u[0])
    return adjList
