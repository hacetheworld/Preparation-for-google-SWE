function lengthOfLongestSubstring(str) {

    let output = 0;
    let visitedValues;

    //BFS Solution
    for (let i = 0; i < str.length; i++) {
        visitedValues = new Set();

        let j = i
        for (; j < str.length; j++) {

            if (visitedValues.has(str[j])) {
                break;
            } else {
                visitedValues.add(str[j]);
            }
        }
        if (output < visitedValues.size) {
            output = visitedValues.size

        }
    }
    return output;

}

console.log(lengthOfLongestSubstring('abcabcbb'));
