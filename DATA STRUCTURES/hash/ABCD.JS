// function abcd(arr) {

//     let ab;

//     for (let i = 0; i < arr.length - 1; i++) {
//         ab = arr[i] + arr[i + 1];
//         let auxilary = arr.slice(0);
//         let newArr = auxilary.splice(i, 2);
//         //console.log(auxilary);
//         //console.log(newArr);

//         for (let j = 0; j < auxilary.length - 1; j++) {

//             for (let k = j + 1; k < auxilary.length; k++) {
//                 //console.log(ab, auxilary[j], auxilary[k]);

//                 if (ab === auxilary[j] + auxilary[k]) {
//                     return [[arr[i], arr[i + 1]], [auxilary[j], auxilary[k]]];
//                 }

//             }

//         }
//     }

//     return 'No pairs found';

// }

// console.log(abcd([3, 4, 7, 1, 2, 9, 8]));
// console.log(abcd([3, 4, 7, 1, 12, 9]));
// console.log(abcd([65, 30, 7, 90, 1, 9, 8]));




function abcdByHash(arr) {
    let hash = new Object();
    let sum;

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];
            if (hash[sum] !== sum) {
                hash[sum] = sum;
            } else {
                return [hash[sum], [arr[i], arr[j]]];
            }

        }
    }

    return 'No pairs found';

}

console.log(abcdByHash([3, 4, 7, 1, 2, 9, 8]));
console.log(abcdByHash([3, 4, 7, 1, 12, 9]));
console.log(abcdByHash([65, 30, 7, 90, 1, 9, 8]));
