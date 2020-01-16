class Graph {
    constructor() {
        this.adjancyList = {};
    }


    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        if (this.adjancyList[v1] && this.adjancyList[v2]) {
            this.adjancyList[v1].push(v2);
            this.adjancyList[v2].push(v1);
        }
    }

    removeEdge(v1, v2) {
        // console.log(v1, v2);

        if (this.adjancyList[v1]) {
            this.adjancyList[v1] = this.adjancyList[v1].filter(v1 => v1 !== v2);
        }

        if (this.adjancyList[v2]) {
            this.adjancyList[v2] = this.adjancyList[v2].filter(v2 => v2 !== v1);
        }
    }

    removeVertex(v1) {
        // console.log(v1, v2);

        if (this.adjancyList[v1]) {

            this.adjancyList[v1].forEach(vertex => {
                this.adjancyList[vertex] = this.adjancyList[vertex].filter(v => v !== v1);
            });

            delete this.adjancyList[v1];

        }


    }

    DFS(vertex, visited = {}, result = []) {
        if (!vertex) return;
        result.push(vertex);
        visited[vertex] = true;
        this.adjancyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                this.DFS(neighbor, visited, result);
            }
        });
        return result;
    }

    DfsIterative(start) {
        let visited = {};
        let result = [];
        let stack = [];
        stack.push(start);

        while (stack.length !== 0) {
            let vertex = stack.shift();

            if (!visited[vertex]) {
                result.push(vertex);
                visited[vertex] = true;
                this.adjancyList[vertex].forEach(neighbor => {
                    stack.push(neighbor);
                })
            }
        }
        return result;
    }


}



const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E')
graph.addVertex('F')
// Add Edges between
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph);
console.log(graph.DFS('A'));
console.log(graph.DfsIterative('A'));
