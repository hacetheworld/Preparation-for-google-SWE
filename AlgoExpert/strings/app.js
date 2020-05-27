function isPlindrome(str) {
  let l = 0,
    r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
}

console.log(isPlindrome("madam"));
