def isBipartite(G, src, V):
    color = [-1 for _ in range(V)]
    color[src] = 1
    queue = []
    queue.append(src)
    while len(queue) > 0:
        u = queue.pop(0)
        if G[u][u] == 1:
            return False
        for v in range(len(G[u])):
            if G[u][v] == 1 and color[v] == -1:
                color[v] = 1-color[u]
                queue.append(v)
            elif G[u][v] == 1 and color[v] == color[u]:
                return False
    return True


def getBipartiteEdges(G, src, V):
    odd = [-1 for _ in range(V)]
    even = [-1 for _ in range(V)]
    visited = [False for _ in range(V)]
    queue = []
    level = 0
    queue.append([src, level])
    while len(queue):
        u = queue.pop(0)
        if u[1] & 1 == 1:
            if even[u[0]] != -1:
                return False
            odd[u[0]] = u[0]
        else:
            if odd[u[0]] != -1:
                return False
            even[u[0]] = u[0]
        for v in range(G[u]):
            if visited[v] == True:
                continue
            queue.append([v, level+1])
        level = level+1
    return (odd, even)


if __name__ == "__main__":

    G = [[0, 1, 0, 1],
         [1, 0, 1, 0],
         [0, 1, 0, 1],
         [1, 0, 1, 0]]
    V = 5
    if isBipartite(G, 0, V):
        print("Yes")
    else:
        print("No")
