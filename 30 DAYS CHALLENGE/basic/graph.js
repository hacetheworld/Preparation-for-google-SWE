class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    };
    dequeue() {
        return this.values.shift();
    };
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}




class Graph {
    constructor() {
        this.adjancyList = {};
    }

    addVertex(v) {
        if (!this.adjancyList[v]) {
            this.adjancyList[v] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjancyList[v1].push({ node: v2, weight });
        this.adjancyList[v2].push({ node: v1, weight });
    }

    BFSIterative(start) {
        let queue = [];
        let result = [];
        let visited = {};
        let currentVertex;
        let NeighborVertex;
        queue.push(start);
        //visited[start] = true;
        while (queue.length > 0) {
            currentVertex = queue.shift();
            if (!visited[currentVertex]) {
                result.push(currentVertex);
                visited[currentVertex] = true;
            }
            NeighborVertex = this.adjancyList[currentVertex];
            for (let i = 0; i < NeighborVertex.length; i++) {
                if (!visited[NeighborVertex[i]]) {
                    queue.push(NeighborVertex[i]);
                }
            }
        }
        return result;
    }

    DFS(start, result = [], visited = {}) {
        if (!visited[start]) {
            result.push(start);
            visited[start] = true;
            let NeighborVertex = this.adjancyList[start];
            for (let i = 0; i < NeighborVertex.length; i++) {
                if (!visited[NeighborVertex[i]]) {
                    this.DFS(NeighborVertex[i], result, visited);
                }

            }
        }
        return result;
    }

    DFSIterative(start) {
        let result = [], visited = {}, stack = [], currentNode;
        stack.push(start);
        while (stack.length > 0) {
            currentNode = stack.pop();
            if (!visited[currentNode]) {
                result.push(currentNode);
                visited[currentNode] = true;
                let NeighborVertex = this.adjancyList[currentNode];
                for (let i = 0; i < NeighborVertex.length; i++) {
                    if (!visited[NeighborVertex[i]]) {
                        stack.push(NeighborVertex[i]);
                    }

                }
            }

        }
        return result;
    }

    hasCycle(start, visited = {}, parent = null) {
        visited[start] = true;
        let neighbor = this.adjancyList[start];
        for (let i = 0; i < neighbor.length; i++) {
            console.log(visited[neighbor[i]], parent)

            if (visited[start] == parent) {
                continue;
            }
            if (visited[neighbor[i]]) {
                return true;
            }
            if (this.hasCycle(neighbor[i], visited, start)) {
                return true;
            }

        }
        return false;
    }

    topologicalSort() {
        let visited = {}, stack = [];
        for (const key in this.adjancyList) {
            if (visited[key]) {
                continue;

            } else {
                this.topologicalSortUtil(key, visited, stack);
            }
        }

        return stack;
    }

    topologicalSortUtil(v, visited, stack) {
        visited[v] = true;
        let currVertex = this.adjancyList[v]
        for (let i = 0; i < currVertex.length; i++) {
            if (visited[currVertex[i]]) {
                continue;

            } else {
                this.topologicalSortUtil(currVertex[i], visited, stack);
            }
        }

        stack.push(v);
    }

    DijkstraAlgo(start, end) {
        let visited = {}, previous = {}, distances = {}, result = [];
        const Q = new PriorityQueue();
        for (const key in this.adjancyList) {
            if (this.adjancyList.hasOwnProperty(key)) {
                if (key === start) {
                    distances[key] = 0;
                    // Q.enqueue(key, 0);
                } else {
                    distances[key] = Infinity;
                    //  Q.enqueue(key, Infinity);
                }
                previous[key] = null;

            }
        }
        Q.enqueue(start, 0);
        let CurrentVertex;
        while (Q.values.length > 0) {
            CurrentVertex = Q.dequeue().val;
            if (CurrentVertex === end) {
                while (previous[CurrentVertex]) {
                    result.push(CurrentVertex);
                    CurrentVertex = previous[CurrentVertex];
                }
                break;


            }
            let ExploringVertex = this.adjancyList[CurrentVertex];

            for (let i = 0; i < ExploringVertex.length; i++) {

                if (ExploringVertex[i].weight + distances[CurrentVertex] < distances[ExploringVertex[i].node]) {
                    distances[ExploringVertex[i].node] = ExploringVertex[i].weight + distances[CurrentVertex];
                    previous[ExploringVertex[i].node] = CurrentVertex;
                    Q.enqueue(ExploringVertex[i].node, distances[ExploringVertex[i].node]);

                }

            }

        }

        return result.concat(CurrentVertex).reverse();
    }

    kruskalAlgo() {
        let I = Infinity;
        let Edges = [
            [1, 1, 2, 2, 3, 4, 4, 5, 5],
            [2, 6, 3, 7, 4, 5, 7, 6, 7],
            [25, 5, 12, 10, 8, 16, 14, 20, 18]
        ];
        let set = [-1, -1, -1, -1, -1, -1, -1, -1, -1]

        let included = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let result = [];


        function union(u, v) {
            if (set[u] < set[v]) {
                set[u] = set[u] + set[v];
                set[v] = u;
            } else {
                set[v] = set[u] + set[v];
                set[u] = v;
            }

        }

        function find(u) {
            let x = u;

            while (set[x] > 0) {
                x = set[x];
            }

            return x;
        }

        let min, u, v, j = 0, k, n = 7;


        while (j < n - 1) {
            min = I;
            for (let i = 0; i < Edges[2].length; i++) {
                if (included[i] == 0 && Edges[2][i] < min) {
                    min = Edges[2][i];
                    k = i;
                    u = Edges[0][i];
                    v = Edges[1][i];
                }
            }

            if (find(u) !== find(v)) {
                result.push([u, v]);
                union(find(u), find(v));
                j++;
            }
            included[k] = 1;
        }

        return result;

    }
}


const g = new Graph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addVertex('G')
g.addEdge('A', 'C', 6)
g.addEdge('A', 'B', 25)
g.addEdge('B', 'E', 12)
g.addEdge('C', 'D', 20)
g.addEdge('D', 'F', 16)
g.addEdge('D', 'G', 18)
g.addEdge('F', 'G', 14)
g.addEdge('B', 'G', 10)
g.addEdge('F', 'E', 8)
//console.log(g.BFSIterative('A'));
//console.log(g.DFS('A'));
//console.log(g.topologicalSort());
console.log(g);
console.log(g.kruskalAlgo());
