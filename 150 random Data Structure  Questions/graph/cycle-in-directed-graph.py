def cycleInDirectedGraph(vertices, V):
    adjList = [[] for _ in range(V)]
    visited = [False for _ in range(V)]
    recurStack = [False for _ in range(V)]

    for v in vertices:
        adjList[v[0]].append(v[1])
    for node in range(len(adjList)):
        if visited[node] == False:
            if helperCycleFunction(adjList, node, visited, recurStack):
                return True
    return False


def helperCycleFunction(adjList, u, visited, recurStack):
    visited[u] = True
    recurStack[u] = True
    for neighbor in adjList[u]:
        if visited[neighbor] == False:
            if helperCycleFunction(adjList, neighbor, visited, recurStack):
                return True
        elif recurStack[neighbor]:
            return True
    recurStack[u] = False
    return False


arr = [[0, 1], [0, 2], [1, 2], [2, 0], [2, 3], [3, 3]]
v = 4
if cycleInDirectedGraph(arr, 4):
    print("Graph has a cycle")
else:
    print("Graph has no cycle")
