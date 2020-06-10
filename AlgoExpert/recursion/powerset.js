function powerSet(set) {
  let subsets = [[]];
  for (const ele of set) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      const currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }

  return subsets;
}

console.log(powerSet([1, 2, 3]));
