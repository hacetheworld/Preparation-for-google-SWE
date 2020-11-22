def hasPath(edges, src, dist, v):
    graph = [[] for _ in range(v+1)]
    for edge in range(len(edges)):
        item = edges[edge]
        graph[item[0]].append(item[1])
        graph[item[1]].append(item[0])
    visited = [False for _ in range(v+1)]
    return hasPathHelper(graph, src, dist, visited)


def hasPathHelper(graph, src, dist, visited):
    if visited[src]:
        return False
    if src == dist:
        return True
    visited[src] = True
    for u in range(len(graph[src])):
        if hasPathHelper(graph, graph[src][u], dist, visited):
            return True
    return False


arr = [[1, 2], [2, 3], [2, 4], [4, 5], [5, 6], [5, 7]]
print(hasPath(arr, 1, 8, 8))
print(hasPath(arr, 1, 7, 8))
