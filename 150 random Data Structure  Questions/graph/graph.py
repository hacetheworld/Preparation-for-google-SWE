class Graph():
    def __init__(self, n):
        self.adjList = [[] for _ in range(n+1)]
        self.n = n

    def addEdge(self, src, dest):
        self.adjList[src].append(dest)
        # self.adjList[dest].append(src)

    def printAdjList(self):
        print(self.adjList)

    def bfs(self, src):
        visited = [False]*self.n
        queue = []
        dist = [0]*self.n
        parent = [-1]*self.n
        queue.append(src)
        visited[src] = True
        while len(queue) > 0:
            node = queue.pop()
            for neighbor in self.adjList[node]:
                if visited[neighbor] == False:
                    queue.append(neighbor)
                    visited[neighbor] = True
                    dist[neighbor] = dist[node]+1
                    parent[neighbor] = node
        # print(dist)
        # print(parent)
        res = []
        path = 36
        while path != 0:
            res.append(parent[path])
            path = parent[path]
        print(res)


graph = Graph(50)

board = [0]*50
board[2] = 13
board[5] = 2
board[9] = 18
board[18] = 11
board[17] = -13
board[20] = -14
board[24] = -8
board[25] = -10
board[32] = -2
board[34] = -22
for u in range(36):
    for dice in range(1, 7):
        v = u+dice+board[u+dice]
        graph.addEdge(u, v)

graph.bfs(0)
