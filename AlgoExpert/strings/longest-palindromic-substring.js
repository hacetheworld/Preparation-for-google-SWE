function longestPalindromicSubstring(str) {
  let currentLongest = [0, 1];
  let odd, even;
  let runningLongestSubstring;
  for (let i = 1; i < str.length; i++) {
    odd = getLongestPalindromicSubstring(str, i - 1, i + 1);
    even = getLongestPalindromicSubstring(str, i - 1, i);
    runningLongestSubstring = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    currentLongest =
      currentLongest[1] - currentLongest[0] >
      runningLongestSubstring[1] - runningLongestSubstring[0]
        ? currentLongest
        : runningLongestSubstring;
  }
  return str.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromicSubstring(str, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < str.length) {
    if (str[leftIdx] !== str[rightIdx]) {
      break;
    }
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

console.log(longestPalindromicSubstring("abaxyzzyxf"));
console.log(longestPalindromicSubstring("abau"));
