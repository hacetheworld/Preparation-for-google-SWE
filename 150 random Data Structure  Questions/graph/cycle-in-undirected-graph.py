def cycleInUnDirectedGraph(vertices, V):
    adjList = [[] for _ in range(V)]
    visited = [False for _ in range(V)]
    for v in vertices:
        adjList[v[0]].append(v[1])
        adjList[v[1]].append(v[0])
    for node in range(len(adjList)):
        if visited[node] == False:
            if helperCycleFunction(adjList, node, -1, visited):
                return True
    return False


def helperCycleFunction(adjList, u, parent, visited):
    visited[u] = True
    for neighbor in adjList[u]:
        if visited[neighbor] == False:
            if helperCycleFunction(adjList, neighbor, u, visited):
                return True
        elif parent != neighbor:
            return True
    return False


arr = [[0, 1], [0, 2], [2, 3]]
v = 4
if cycleInUnDirectedGraph(arr, 4):
    print("Graph has a cycle")
else:
    print("Graph has no cycle")
