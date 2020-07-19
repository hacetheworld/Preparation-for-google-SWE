def bfs(graph, start):
    visited = {}
    queue = []
    queue.append(start)
    res = []
    visited[start] = True

    while queue:
        vertexToVisit = queue.pop(0)
        res.append(vertexToVisit)
        for node in graph[vertexToVisit]:
            if(visited.get(node) == None):
                queue.append(node)
                visited[node] = True

    return res


def dfs(graph, start):
    visited = {}
    queue = []
    queue.append(start)
    res = []
    visited[start] = True

    while queue:
        vertexToVisit = queue.pop()
        res.append(vertexToVisit)
        for node in graph[vertexToVisit]:
            if(visited.get(node) == None):
                queue.append(node)
                visited[node] = True

    return res


graph = {
    "A": ["B", "C"],
    "B": ["A", "C", "D"],
    "C": ["B", "A", "D"],
    "D": ["B", "C"]

}

print(dfs(graph, "A"))
