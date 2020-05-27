function change(amount) {
    let count = 0, minCoin, i;
    let coins = [1, 5, 10, 20, 50, 100, 500, 1000]
    while (amount > 0) {
        minCoin = 0;
        i = 0;
        if (amount < 5) {
            return count += amount;
        }
        while (coins[i] <= amount) {
            minCoin = coins[i++];
        }
        count += Math.floor(amount / minCoin);
        amount = amount % minCoin;
        if (amount === 0) {
            return count;
        }
    }
}



console.log(change(1));
console.log(change(3));
console.log(change(7));
console.log(change(32));
console.log(change(320));
