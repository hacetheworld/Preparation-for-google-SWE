function caesarCipherEncrypter(str, num) {
  let newStr = [];
  for (let j = 0; j < str.length; j++) {
    let newValue = str[j].charCodeAt(0) + num;
    let newChar;
    if (newValue <= 122) {
      newChar = String.fromCharCode(newValue);
    } else {
      newChar = String.fromCharCode((newValue + 96) % 122);
    }
    newStr.push(newChar);
  }

  return newStr.join("");
}

console.log(caesarCipherEncrypter("axyz", 2));
