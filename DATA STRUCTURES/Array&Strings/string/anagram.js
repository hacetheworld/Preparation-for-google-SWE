function isAnagram(str1, str2) {

    // Check if str1 === str2 if not return false

    if (str1.length !== str2.length) return false;

    //convert them into lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Initialize obj that will keep track of str values

    let keepTrackOfStr = {};

    for (let i = 0; i < str1.length; i++) {
        //Check if that char already exist or not if not we will add it to the obj else we will increase +1
        if (keepTrackOfStr[str1[i]]) {
            keepTrackOfStr[str1[i]] += 1;
        } else {
            keepTrackOfStr[str1[i]] = 1;
        }

    }

    // Loop Over second str

    for (let j = 0; j < str2.length; j++) {
        //Check if that char already exist or not if it does we will decrease it value by -1
        if (keepTrackOfStr[str2[j]]) {
            keepTrackOfStr[str2[j]] -= 1;
        } else {
            // If char not exist in it we will know that it's not valid anagram and return false
            return false;
        }

    }


    return true;

}


console.log(isAnagram('', ''));
console.log(isAnagram('A', 'A'));
console.log(isAnagram('A', 'B'));
console.log(isAnagram('ab', 'ba'));
console.log(isAnagram('AB', 'ab'));
console.log(isAnagram('hello world !', 'HELLO WORLD !'));
console.log(isAnagram('abb', 'bab'));
