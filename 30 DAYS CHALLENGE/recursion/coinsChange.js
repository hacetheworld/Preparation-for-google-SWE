// function coinChange(coins, amount) {
//     let coinCounter = 0, flag;
//     coins = coins.sort((a, b) => a - b);

//     while (amount > 0) {
//         flag = false;
//         // console.log(coins);

//         for (let j = coins.length - 1; j >= 0; j--) {
//             if (amount - coins[j] >= 0) {
//                 amount = amount - coins[j];
//                 coinCounter += 1;
//                 flag = true;
//                 break;
//             }
//         }
//         console.log(coinCounter, amount);

//         if (amount === 0) return coinCounter;
//         if (!flag) return -1;
//     }

//     if (amount === 0) return coinCounter;
// };


let map = {};
var coinChange = function (coins, amount, map) {
    if (amount == 0) { return 0 };

    if (map[amount]) { return map[amount] };
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
        if (amount - coins[j] >= 0) {
            let val = coinChange(coins, amount - coins[j], map);
            if (val < min) {
                min = val;
            }
        }
    }
    min = (min === Infinity ? -1 : min + 1);
    map[amount] = min;
    return map[amount];

};




console.log(coinChange([1, 2, 5], 11, map));


//console.log(coinChange([2], 3, map));
// console.log(coinChange([186, 419, 83, 408]
//     , 6249));
