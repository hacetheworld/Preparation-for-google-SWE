function threeSum(nums, target) {
  let triplets = [];
  let left, right;

  if (nums.length < 3) {
    return [];
  }
  if (nums.length === 3) {
    let sum = nums.reduce(function (acc, cv) {
      return acc + cv;
    }, 0);
    return sum === 0 ? [nums] : [];
  }

  nums = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    left = i + 1;
    right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
