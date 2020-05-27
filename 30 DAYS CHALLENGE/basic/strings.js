function changingCase(str) {
    let newStr = '';
    let Charcode;
    for (let i = 0; i < str.length; i++) {
        Charcode = str[i].charCodeAt(0);
        if (Charcode >= 97) {
            newStr += String.fromCharCode(Charcode - 32);
        } else {
            newStr += String.fromCharCode(Charcode + 32);
        }
    }
    return newStr;
}


//console.log(changingCase('HELoo'));

// Validate String

// function validateStr(str) {
//     let charCodeAt;
//     for (let i = 0; i < str.length; i++) {
//         charCode = str[i].charCodeAt(0);
//         if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122) && !(charCode >= 48 && charCode <= 57)) {
//             return false;
//         }

//     }
//     return true;
// }


// console.log(validateStr('ajay?123'));



// Reverse String


function reverse(str) {

    let i = 0, j = str.length - 1;
    let temp;
    while (i < j) {
        temp = str[i];
        str[i++] = str[j];
        str[j--] = temp;

    }

    return str;
}

//console.log(reverse(['a', 'j', 'a', 'y']));


function findDup(str) {
    // #1 Using Hash table

    // let hash = {};
    // let dups = new Set();
    // for (let i = 0; i < str.length; i++) {
    //     if (!hash[str[i]]) {
    //         hash[str[i]] = 1;
    //     } else {
    //         hash[str[i]] += 1;
    //     }
    // }
    // for (let j = 0; j < str.length; j++) {
    //     if (hash[str[j]] > 1) {
    //         dups.add(str[j]);
    //     }
    // }

    // return dups;

    // #2 using array and ASCII

    // let store = new Array(25).fill(0);
    // let charCode;
    // let idx;
    // let dups = new Array();
    // for (let i = 0; i < str.length; i++) {
    //     charCode = str[i].charCodeAt(0);
    //     idx = charCode - 97;
    //     store[idx] += 1;
    // }

    // let fromCharCode;
    // for (let j = 0; j < store.length; j++) {
    //     fromCharCode = String.fromCharCode(j + 97);
    //     if (store[j] > 1) {
    //         dups.push(fromCharCode);
    //     }
    // }

    // return dups;


    // #3 bits

    let dups = [];
    let H = 0, X = 0;
    for (let i = 0; i < str.length; i++) {
        X = 1;
        X = X << str[i].charCodeAt(0) - 97;
        if ((X & H) > 0) {
            dups.push(str[i]);
        } else {
            H = X | H;
        }
    }
    return dups;

}

console.log(findDup('finding'));
