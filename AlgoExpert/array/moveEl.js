// function moveZeroes(nums, target) {
//   let nonZeroEl = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== target) {
//       nums[nonZeroEl++] = nums[i];
//     }
//   }

//   for (let j = nonZeroEl; j < nums.length; j++) {
//     // if(nums[j] !==0){
//     nums[nonZeroEl++] = target;
//     // }
//   }
//   return nums;
// }

function moveElementsToEnd(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    while (arr[i] !== target) {
      i++;
    }
    while (arr[j] === target) {
      j--;
    }
    if (i < j) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j--;
    }
  }
  return arr;
}

console.log(moveElementsToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

console.log(moveElementsToEnd([0, 1, 0, 3, 12], 0));
