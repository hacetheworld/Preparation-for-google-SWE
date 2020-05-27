// function zigzagTraverse(arr) {
//   let height = arr.length - 1;
//   let width = arr[0].length - 1;
//   let result = [];
//   let row = 0,
//     col = 0;
//   let goingDown = true;
//   while (isOutOFBound(row, col, height, width)) {
//     result.push(arr[row][col]);
//     if (goingDown) {
//       if (col === 0 || row === height) {
//         goingDown = false;
//         if (row === height) {
//           col += 1;
//         } else {
//           row += 1;
//         }
//       } else {
//         row += 1;
//         col -= 1;
//       }
//     } else {
//       if (row === 0 || col === width) {
//         goingDown = true;
//         if (col === width) {
//           row += 1;
//         } else {
//           col += 1;
//         }
//       } else {
//         row -= 1;
//         col += 1;
//       }
//     }
//   }

//   return result;
// }

function zigzagTraverse(arr) {
  let height = arr.length - 1;
  let width = arr[0].length - 1;
  let result = [];
  let row = 0,
    col = 0;
  let goingDown = true;
  while (row <= height && col <= width) {
    result.push(arr[row][col]);
    if (goingDown) {
      if (col === 0 || row === height) {
        goingDown = false;
        if (row === height) {
          col++;
        } else {
          row++;
        }
      } else {
        col--;
        row++;
      }
    } else {
      if (row === 0 || col === width) {
        goingDown = true;
        if (col === width) {
          row++;
        } else {
          col++;
        }
      } else {
        col++;
        row--;
      }
    }
  }

  return result;
}

function isOutOFBound(row, col, height, width) {
  return row < 0 || row < height || col < 0 || col < width;
}

console.log(
  zigzagTraverse([
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
  ])
);
