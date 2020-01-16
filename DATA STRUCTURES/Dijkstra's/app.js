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


    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = [];
        }
    }
    addEdge(v1, v2, value) {
        if (this.adjancyList[v1] && this.adjancyList[v2]) {
            this.adjancyList[v1].push({ node: v2, weight: value });
            this.adjancyList[v2].push({ node: v1, weight: value });
        }
    }

    Dijkstra(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        for (const vertex in this.adjancyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }


        while (nodes.values.length) {
            smallest = nodes.dequeue().val;
            if (smallest === end) {
                // Done
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;



            }

            if (smallest || distances[smallest] !== Infinity) {
                for (const neighbor in this.adjancyList[smallest]) {
                    let nextNode = this.adjancyList[smallest][neighbor];

                    let candidate = distances[smallest] + nextNode.weight;

                    if (candidate < distances[nextNode.node]) {
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = smallest;
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }

        return path.concat(smallest).reverse();

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
graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'E', 3)
graph.addEdge('C', 'D', 2)
graph.addEdge('C', 'F', 4)
graph.addEdge('D', 'E', 3)
graph.addEdge('D', 'F', 1)
graph.addEdge('E', 'F', 1)

console.log(graph);
console.log(graph.Dijkstra('A', 'E'));
console.log(graph.Dijkstra('A', 'B'));
console.log(graph.Dijkstra('A', 'D'));
console.log(graph.Dijkstra('A', 'F'));

