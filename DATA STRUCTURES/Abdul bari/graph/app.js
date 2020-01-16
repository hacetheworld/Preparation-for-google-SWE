class Graph {
    constructor() {
        this.adjancyList = {};
    }

    addVertex(v) {
        if (!this.adjancyList[v]) {
            this.adjancyList[v] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.adjancyList[v1] || !this.adjancyList[v2]) {
            this.adjancyList[v1] = [];
            this.adjancyList[v2] = [];
        } else {
            this.adjancyList[v1].push(v2);
            this.adjancyList[v2].push(v1);
        }
    }

    BFS(start) {
        let visited = {};
        let queue = [];
        let BFSORDER = [];
        BFSORDER.push(start);
        visited[start] = true;
        queue.push(this.adjancyList[start]);

        while (queue.length > 0) {
            let currentVertex = queue.shift();

            for (let i = 0; i < currentVertex.length; i++) {
                if (!visited[currentVertex[i]]) {
                    BFSORDER.push(currentVertex[i]);
                    visited[currentVertex[i]] = true;
                    queue.push(this.adjancyList[currentVertex[i]]);
                }

            }
        }
        return BFSORDER;

    }


    DFS(start, visited = {}, DFSORDER = []) {
        if (!visited[start]) {
            let currentVertex = this.adjancyList[start];
            DFSORDER.push(start);
            visited[start] = true;

            for (let i = 0; i < currentVertex.length; i++) {
                this.DFS(currentVertex[i], visited, DFSORDER);
            }
        }
        return DFSORDER;
    }
    prim() {

    }
}

let G = new Graph();
G.addVertex(1);
G.addVertex(2);
G.addVertex(3);
G.addVertex(4);
G.addVertex(5);
G.addVertex(6);
G.addEdge(1, 2)
G.addEdge(1, 3)
G.addEdge(2, 4)
G.addEdge(3, 4)
G.addEdge(4, 5)
G.addEdge(4, 6)
console.log(G);
console.log(G.BFS(1));
console.log(G.DFS(1));
