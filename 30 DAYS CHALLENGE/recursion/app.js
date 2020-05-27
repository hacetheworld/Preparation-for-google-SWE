// function generatePermutation(str, choice = new Map(), result = []) {
//     if (choice.size == str.length) {
//         let joinStr = '';
//         for (const entry of choice.entries()) {
//             joinStr += entry[0];
//         }
//         result.push(joinStr);
//         return;
//     }
//     for (let i = 0; i < str.length; i++) {
//         const currentChoice = str[i];
//         if (!choice.has(currentChoice)) {
//             choice.set(currentChoice, true);
//             generatePermutation(str, choice, result);
//             choice.delete(currentChoice);
//         }
//     }
//     return result;
// }

// console.log(generatePermutation('ABC'));

function initializeCache(totalEggs, totalFloors, cached) {
    for (let eggs = 0; eggs <= totalEggs; eggs++) {
        cached.push([]);
        for (let floor = 0; floor <= totalFloors; floor++) {
            cached[eggs].push(Infinity);

        }
    }
}
//let cached = [];

//let count = 0;
var superEggDrop = function (K, N, cached = [], count = 0) {
    if (count == 0) {
        initializeCache(K, N, cached);
        count++;
    }
    if (N == 1 || N == 0) {
        return N;
    }


    if (K == 1) {
        return N;
    }
    console.log(cached);

    if (cached[K][N] !== Infinity) return cached[K][N];
    let countBuilding;
    for (let floor = 1; floor <= N; floor++) {
        countBuilding = Math.max(superEggDrop(K, N - floor, cached, count), superEggDrop(K - 1, floor - 1, cached, count));

        cached[K][N] = Math.min(cached[K][N], countBuilding + 1)

    }
    return cached[K][N];
};


console.log(superEggDrop(6, 5000));
//console.log(superEggDrop(3, 14, cached, count));

//console.log(cached);
