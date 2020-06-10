// function multiStringSearch(bigString, smallStrings) {
//   return smallStrings.map((smallString) =>
//     isInBigString(bigString, smallString)
//   );
// }
// function isInBigString(bigString, smallString) {
//   for (let i = 0; i < bigString.length; i++) {
//     if (i + smallString.length > bigString.length) break;
//     if (isInBigStringHelper(bigString, smallString, i)) return true;
//   }
//   return false;
// }
// function isInBigStringHelper(bigString, smallString, startIdx) {
//   let leftBigIdx = startIdx;
//   let rightBigIdx = startIdx + smallString.length - 1;
//   let leftSmallIdx = 0;
//   let rightSmallIdx = smallString.length - 1;
//   while (leftBigIdx <= rightBigIdx) {
//     if (
//       bigString[leftBigIdx] != smallString[leftSmallIdx] ||
//       bigString[rightBigIdx] != smallString[rightSmallIdx]
//     ) {
//       return false;
//     }

//     leftBigIdx++;
//     rightBigIdx--;
//     leftSmallIdx++;
//     rightSmallIdx--;
//   }
//   return true;
// }

class ModifiedTrie {
  constructor(string) {
    this.root = {};
    this.populateString(string);
  }

  populateString(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertString(string, i);
    }
  }
  insertString(string, idx) {
    let node = this.root;
    for (let j = idx; j < string.length; j++) {
      let letter = string[j];
      if (!node[letter]) node[letter] = {};
      node = node[letter];
    }
  }

  contains(string) {
    let node = this.root;
    for (let j = 0; j < string.length; j++) {
      let letter = string[j];
      if (!node[letter]) return false;
      node = node[letter];
    }
    return true;
  }
}
function multiStringSearch(bigString, smallString) {
  const TrieObj = new ModifiedTrie(bigString);
  console.log(TrieObj);

  return [smallString.map((string) => TrieObj.contains(string))];
}

console.log(
  multiStringSearch("this is a big string", [
    "this",
    "yo",
    "is",
    "a",
    "bigger",
    "keaper",
  ])
);
