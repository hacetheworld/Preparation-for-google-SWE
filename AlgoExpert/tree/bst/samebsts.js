function sameBsts(bst1, bst2) {
  if (bst1.length !== bst2.length) return false;
  if (bst1.length == 0 && bst2.length == 0) return true;
  if (bst1[0] !== bst2[0]) return false;
  let leftOne = getSmallerBst(bst1);
  let lefttwo = getSmallerBst(bst2);
  let rightOne = getLargerBst(bst1);
  let righttwo = getLargerBst(bst2);

  return sameBsts(leftOne, lefttwo) && sameBsts(rightOne, righttwo);
}

function getSmallerBst(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      result.push(array[i]);
    }
  }
  return result;
}

function getLargerBst(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[0]) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
);
