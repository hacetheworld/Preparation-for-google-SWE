function sortChar(str) {
    let sortedChar = str.split('');
    // let sortedChar = [];
    sortedChar.sort();

    // for (var i = 0; i < str.length; i++) {
    //     sortedChar.push(str.charCodeAt(i));
    // }

    // for (let i = 0; i < sortedChar.length - 1; i++) {
    //     for (let j = i + 1; j < sortedChar.length; j++) {

    //         if (sortedChar[i] > sortedChar[j]) {

    //             let temp = sortedChar[j];
    //             sortedChar[j] = sortedChar[i];
    //             sortedChar[i] = temp;
    //         }

    //     }

    // }

    // for (let k = 0; k < sortedChar.length; k++) {

    //     sortedChar[k] = String.fromCharCode(sortedChar[k]);

    // }


    return sortedChar.join('');
}


console.log(sortChar('ajay'));
console.log(sortChar('bbccdefbbaa '));
console.log(sortChar('geeksforgeeks'));
