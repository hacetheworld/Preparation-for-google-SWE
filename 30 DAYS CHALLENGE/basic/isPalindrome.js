function Ispalindrome(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ',' && str[i] !== ':' && str[i] !== ' ') {
            newStr += str[i];
        }
    }
    newStr = newStr.toLocaleLowerCase();
    let start = 0, end = newStr.length - 1;
    console.log(newStr);
    while (start < end) {
        if (newStr[start++] !== newStr[end--]) {
            return false;
        }

    }


    return true;
}


console.log(Ispalindrome('A man, a plan, a canal: Panama'));
console.log(Ispalindrome("race a car"));
