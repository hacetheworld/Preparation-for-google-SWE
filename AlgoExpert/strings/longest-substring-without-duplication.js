function longestSubstringWithoutDuplication(string) {
  //#METHOD 1
  //   let longestSubstringWithoutDups = "";
  //   let runnningSubstringWithoutDups;

  //   let hash;

  //   for (let i = 0; i < str.length - 1; i++) {
  //     hash = {};
  //     hash[str[i]] = true;
  //     runnningSubstringWithoutDups = str[i];
  //     for (let j = i + 1; j < str.length; j++) {
  //       if (hash[str[j]]) {
  //         break;
  //       }
  //       hash[str[j]] = true;
  //       runnningSubstringWithoutDups += str[j];
  //     }
  //     longestSubstringWithoutDups =
  //       longestSubstringWithoutDups.length > runnningSubstringWithoutDups.length
  //         ? longestSubstringWithoutDups
  //         : runnningSubstringWithoutDups;
  //   }
  //   return longestSubstringWithoutDups;

  /**------------------ Method 2 -------------------*/
  const lastSeen = {};
  let longest = [0, 1];
  let startIdx = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }
    if (longest[1] - longest[0] < i + 1 - startIdx) {
      longest = [startIdx, i + 1];
    }
    lastSeen[char] = i;
  }
  return string.slice(longest[0], longest[1]);
}

console.log(longestSubstringWithoutDuplication("clementisacap"));
