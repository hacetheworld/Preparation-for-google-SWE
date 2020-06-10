function bfs(graph, start) {
  let res = [];
  let seen = {};
  let queue = [];
  res.push(start);
  queue.push(start);
  seen[start] = true;
  while (queue.length > 0) {
    let vertextToVisit = queue.shift();

    for (let i = 0; i < graph[vertextToVisit].length; i++) {
      if (!seen[graph[vertextToVisit][i]]) {
        res.push(graph[vertextToVisit][i]);
        queue.push(graph[vertextToVisit][i]);
        seen[graph[vertextToVisit][i]] = true;
      }
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

console.log(bfs(graph, "A"));
