# def Dijkstra(graph,start):
#     visited = {}
#     distance={}
#     parents={}
#     queue=[]

#     for node in graph:
#         if(node ==start):
#             distance[node] = 0
#         else:
#             distance[node] = float("inf")

#         parents[node] = None
#         visited[node]=false
#     queue.append(start)

#     while queue:
#         nodeToVisit = queue.pop(0)
#         for node in graph[nodeToVisit]:
