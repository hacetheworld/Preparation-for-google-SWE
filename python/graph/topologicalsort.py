def topologicalSort(graph):
    res = []
    visited = {}

    for node in graph:
        topologicalSortHelper(graph, node, visited, res)

    res.reverse()
    return res


def topologicalSortHelper(graph, node, visited, res):
    if(visited.get(node) == True):
        return res

    for nodeToExplore in graph[node]:
        topologicalSortHelper(graph, nodeToExplore, visited, res)
        visited[nodeToExplore] = True
    res.append(node)


graph = {
    5: [2, 0],
    4: [0, 1],
    2: [3],
    3: [1],
    1: [],
    0: []
}

print(topologicalSort(graph))
