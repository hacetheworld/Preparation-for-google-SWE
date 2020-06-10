function riverSizes(matrix) {
  let sizes = [];
  let visited = matrix.map((row) => row.map(() => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visited[i][j]) continue;
      getTheRiverSizes(matrix, visited, sizes, i, j);
    }
  }

  return sizes;
}

function getTheRiverSizes(matrix, visited, sizes, i, j) {
  let currentSize = 0;
  let stack = [];
  stack.push([i, j]);
  while (stack.length > 0) {
    let curentNodeToVisit = stack.pop();
    let row = curentNodeToVisit[0];
    let col = curentNodeToVisit[1];
    if (visited[row][col]) continue;
    visited[row][col] = true;
    if (matrix[row][col] === 0) continue;
    currentSize += 1;

    let unVisitedNodes = getTheUnvisitedNodes(matrix, visited, row, col);
    for (let i = 0; i < unVisitedNodes.length; i++) {
      stack.push(unVisitedNodes[i]);
    }
  }

  return currentSize > 0 ? sizes.push(currentSize) : sizes;
}

function getTheUnvisitedNodes(matrix, visited, row, col) {
  let nodesUnvisited = [];
  if (row > 0 && !visited[row - 1][col]) {
    nodesUnvisited.push([row - 1, col]);
  }

  if (row < matrix.length - 1 && !visited[row + 1][col]) {
    nodesUnvisited.push([row + 1, col]);
  }

  if (col > 0 && !visited[row][col - 1]) {
    nodesUnvisited.push([row, col - 1]);
  }

  if (col < matrix[0].length - 1 && !visited[row][col + 1]) {
    nodesUnvisited.push([row, col + 1]);
  }
  return nodesUnvisited;
}

console.log(
  riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ])
);
