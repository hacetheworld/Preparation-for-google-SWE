function depthFirstSearch(graph, vertex, res = [], seen = {}) {
  res.push(vertex);
  seen[vertex] = true;

  for (
    let vertexToVisit = 0;
    vertexToVisit < graph[vertex].length;
    vertexToVisit++
  ) {
    if (!seen[graph[vertex][vertexToVisit]]) {
      depthFirstSearch(graph, graph[vertex][vertexToVisit], res, seen);
    }
  }

  return res;
}

const graph = {};
graph["A"] = ["B", "C", "D"];
graph["B"] = ["A", "E", "F"];
graph["C"] = ["A"];
graph["D"] = ["A", "G", "H"];
graph["E"] = ["B"];
graph["F"] = ["B", "I", "J"];
graph["G"] = ["D", "K"];
graph["H"] = ["D"];
graph["I"] = ["F"];
graph["K"] = ["G"];
graph["J"] = ["F"];

console.log(depthFirstSearch(graph, "A"));
