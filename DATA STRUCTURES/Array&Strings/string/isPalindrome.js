function isPalindrome(str) {

    str = str.toLowerCase().split(' ').join('').split(',').join('');
    let end = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        console.log(i, end);

        if (i === end) {
            return true;
        }
        if (str[i] !== str[end]) {
            console.log(str[i], str[end]);

            return false;
        }

        end--;
    }

    return true;

}

console.log(isPalindrome('A man, a plan, a canal Panama'));
console.log(isPalindrome('race a car'));
