function MST() {
  let I = Infinity;
  let matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, I, 25, I, I, I, 5, I],
    [0, 25, I, 9, I, I, I, 6],
    [0, I, 9, I, 10, I, I, I],
    [0, I, I, 10, I, 12, I, 11],
    [0, I, I, I, 12, I, 18, 16],
    [0, 5, I, I, I, 18, I, I],
    [0, I, 6, I, 11, 16, I, I],
  ];
  let result = [];
  let near = new Array(matrix.length).fill(I);
  let minEdgesIdx = getMinimumFromMatrix(matrix);
  result.push(minEdgesIdx);
  near[minEdgesIdx[0]] = near[minEdgesIdx[1]] = 0;
  updateNearArray(matrix, near, minEdgesIdx[0], minEdgesIdx[1]);

  for (let i = 1; i < near.length - 2; i++) {
    minEdgesIdx = calculateMinimum(matrix, near);
    result.push(minEdgesIdx);
    let lastIdx = result[result.length - 1][1];
    near[minEdgesIdx[0]] = near[minEdgesIdx[1]] = 0;
    updateNearArray(matrix, near, minEdgesIdx[0], lastIdx);
  }
  return result;
}
function getMinimumFromMatrix(matrix) {
  let minEdges = [];
  let runningMin = Infinity;
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix.length; j++) {
      if (i < j) {
        if (runningMin > matrix[i][j]) {
          minEdges = [i, j];
          runningMin = matrix[i][j];
        }
      }
    }
  }
  return minEdges;
}

function updateNearArray(matrix, near, idxOne, idxTwo) {
  for (let i = 1; i < near.length; i++) {
    if (near[i] == 0) continue;
    if (near[i] !== Infinity) {
      idxOne = near[i];
    }
    if (matrix[i][idxOne] > matrix[i][idxTwo]) {
      near[i] = idxTwo;
    } else {
      near[i] = idxOne;
    }
  }
}
function calculateMinimum(matrix, near) {
  // console.log();

  let minEdges;
  let runningMin = Infinity;
  for (let j = 1; j < near.length; j++) {
    if (near[j] === 0) continue;

    if (runningMin >= matrix[j][near[j]]) {
      minEdges = [near[j], j];
      runningMin = matrix[j][near[j]];
    }
  }
  return minEdges;
}

console.log(MST());

let coins = [2, 4];
let amount = 7;
function change(amount, coins) {
  return coinChange(amount, coins);
}

function coinChange(amount, coins) {
  let res = new Array(amount + 1).fill(Infinity);
  res[0] = 0;
  // for (let i = 0; i < coins.length; i++) {
  //   for (let j = 1; j < res.length; j++) {
  //     if (coins[i] <= j) {
  //       res[j] += res[j - coins[i]];
  //     }
  //   }
  // }
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j < res.length; j++) {
      if (coins[i] <= j) {
        res[j] = Math.min(res[j], res[j - coins[i]] + 1);
      }
    }
  }

  return res[res.length - 1] !== Infinity ? res[res.length - 1] : -1;
}

console.log(change(amount, coins));
