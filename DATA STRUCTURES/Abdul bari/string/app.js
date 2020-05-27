class newString {
  countVowelsWords(str) {
    let vowelsContainer = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
      A: true,
      E: true,
      I: true,
      O: true,
      U: true,
    };

    let voewlsCounter = 0;
    let wordsConuter = 1;
    let consonentsCounter = 0;
    let toASCII;
    for (let i = 0; i < str.length; i++) {
      toASCII = str[i].charCodeAt(0);
      if (vowelsContainer[str[i]]) {
        voewlsCounter++;
      } else if (
        (toASCII >= 65 && str[i] <= 90) ||
        (toASCII >= 97 && toASCII <= 122)
      ) {
        consonentsCounter++;
      }

      if (str[i] == " " && str[i - 1] !== " ") {
        wordsConuter++;
      }
    }

    console.log(
      `This String Contains : ${wordsConuter} Words , ${consonentsCounter} Consonents ${voewlsCounter} Vowels`
    );
  }

  reverse(str) {
    // str = str.split('')
    // let start = 0;
    // let end = str.length - 1;
    // while (start <= end) {
    //     let temp = str[start];
    //     str[start] = str[end];
    //     str[end] = temp;
    //     start++;
    //     end--;
    // }
    // return str.join('');

    let reversedArr = [];

    for (let i = str.length - 1; i >= 0; i--) {
      reversedArr.push(str[i]);
    }
    return reversedArr.join("");
  }
  isPanilndrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }

  fonudDuplicateChar(str) {
    let hashTable = {};
    let duplicateChars = [];

    for (let i = 0; i < str.length; i++) {
      if (hashTable[str[i]]) {
        duplicateChars.push(str[i]);
      } else {
        hashTable[str[i]] = true;
      }
    }

    return duplicateChars;
  }

  fonudDuplicateCharUsingBits(str) {
    let H = 0,
      x = 0,
      dupChar = [];
    for (let i = 0; i < str.length; i++) {
      x = 1;
      x = x << (str[i].charCodeAt(0) - 97);
      if (x & H) {
        console.log("h");
        dupChar.push(str[i]);
      } else {
        H = x | H;
      }
    }

    return dupChar;
  }

  isAnagram(str1, str2) {
    let hashTable = {};
    for (let i = 0; i < str1.length; i++) {
      if (hashTable[str1[i]]) {
        hashTable[str1[i]]++;
      } else {
        hashTable[str1[i]] = 1;
      }
    }

    for (let j = 0; j < str2.length; j++) {
      if (hashTable[str2[j]]) {
        hashTable[str2[j]]--;
      } else {
        return false;
      }
    }

    return true;
  }

  permutation(str, k) {
    if (str.length === k) {
      console.log(result);
    } else {
      for (let i = 0; i < str.length; i++) {
        if (A[i] === undefined) {
          result[k] = str[i];
          A[i] = 1;
          this.permutation(str, k + 1);
          A[i] = undefined;
        }
      }
    }
  }
}

let string = new newString();

// string.countVowelsWords('how are you');

// console.log(string.reverse('python'));

//console.log(string.isPanilndrome('ajay'));
//console.log(string.fonudDuplicateCharUsingBits('finding'));
let A = {};
let result = [];
console.log(string.permutation(["A", "B", "C"], 0));
