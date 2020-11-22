def graphColoring(graph, color, src, d, V):
    if src == V:
        return True
    for c in range(1, d+1):
        if isValidColor(graph, color, c, src):
            color[src] = c
            if graphColoring(graph, color, src+1, d, V):
                return True
            color[src] = 0
    return max(color)


def isValidColor(graph, color, c, src):
    for u in graph[src]:
        if color[u] == c:
            return False
    return True


graph = [
    [1, 5, 4],
    [0, 6, 2],
    [1, 8, 3],
    [2, 4, 9],
    [0, 7, 3],
    [0, 8, 9],
    [1, 7, 9],
    [6, 4, 8],
    [5, 2, 7],
    [3, 6, 5]

]

d = 3
V = 9
color = [0 for _ in range(V+1)]
print(graphColoring(graph, color, 0, d, V))
print(color)
