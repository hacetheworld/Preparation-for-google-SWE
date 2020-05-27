/*

 * @param {string} s
 * @return {number}
*/
var countSubstrings = function (s) {

    let subsstr = [];
    let str = '';

    for (let i = 0; i < s.length; i++) {
        str = '';
        for (let j = i; j < s.length; j++) {
            str += s[j]
            subsstr.push(str);
        }

    }
    let count = 0;
    for (let k = 0; k < subsstr.length; k++) {

        if (subsstr[k].length == 1) {
            count++;
        } else if (isPalindrome(subsstr[k])) {
            count++;
        }
    }
    return count;

};
function isPalindrome(s) {
    let start = 0, end = s.length - 1;

    while (start < end) {
        if (s[start++] !== s[end--]) return false;
    }
    return true;
}




console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));
