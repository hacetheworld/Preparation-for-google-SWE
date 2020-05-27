function findDuplicate(str) {
  let obj = {};
  let dups = [];

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  console.log(obj);

  for (const key in obj) {
    if (obj[key] > 1) {
      dups.push(key);
    }
  }

  return dups;
}

//Method 2

function findDuplicateBit(str) {
  let bit = 0;
  let x = 0;
  let obj = {};
  let dups = [];

  for (let i = 0; i < str.length; i++) {
    x = 1;
    x = x << (str[i].charCodeAt(0) - 97);
    if ((x & bit) > 0) {
      if (obj[str[i]]) {
        obj[str[i]]++;
      } else {
        obj[str[i]] = 1;
      }
    } else {
      bit = x | bit;
    }
  }
  console.log(obj);

  for (const key in obj) {
    if (obj[key] > 1) {
      dups.push(key);
    }
  }

  return dups;

  //   return dups;
}

console.log(findDuplicateBit("ajayjjjayyyajksdjdjkfdjddshdydgjhdfbhb"));
