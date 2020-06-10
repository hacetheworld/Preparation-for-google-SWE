function smallestSubstringContaining(string, subString) {
  const seen = {};
  for (let j = 0; j < subString.length; j++) {
    seen[subString[j]] = true;
  }
  let smallest = [0, string.length - 1];
  let runningSmallest;
  let compariedString = subString;
  for (let i = 0; i < string.length - 1; i++) {
    const char = string[i];
    if (!seen[char]) {
      continue;
    }
    compariedString = subString;
    let count = 1;
    let endIdx = i + 1;
    for (let k = i + 1; k < string.length; k++) {
      endIdx = k;
      const nextChar = string[k];
      if (compariedString.length === count) break;
      if (seen[nextChar]) {
        count++;
      }
    }
    runningSmallest = [i, endIdx];
    if (compariedString.length === count) {
      smallest =
        runningSmallest[1] - runningSmallest[0] < smallest[1] - smallest[0]
          ? runningSmallest
          : smallest;
    }
  }

  return string.slice(smallest[0], smallest[1]);
}

console.log(smallestSubstringContaining("abcd$ef$axb$c$", "$$abf"));
