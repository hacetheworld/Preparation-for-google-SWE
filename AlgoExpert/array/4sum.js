function fourSum(arr, target) {
  let hash = {};
  let quarDruplates = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sumOfTwoNum = arr[i] + arr[j];
      let diff = target - sumOfTwoNum;
      if (hash[diff]) {
        for (const pair of hash[diff]) {
          quarDruplates.push([...pair, arr[i], arr[j]]);
        }
      }
    }
    //continue;

    for (let l = 0; l < i; l++) {
      let isPairExist = arr[l] + arr[i];
      if (hash[isPairExist]) {
        hash[isPairExist].push([arr[l], arr[i]]);
      } else {
        hash[isPairExist] = [];
        hash[isPairExist].push([arr[l], arr[i]]);
      }
    }
  }
  return quarDruplates;
}

console.log(fourSum([7, 6, 4, -1, 1, 2], 16));
