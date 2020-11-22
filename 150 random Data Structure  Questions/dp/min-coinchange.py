def coinChange(coins, amount):
    coins = sorted(coins)
    dp = [float("inf") for _ in range(amount+1)]
    dp[0] = 0
    for coin in coins:
        for k in range(coin, amount+1):
            dp[k] = 1 + min(dp[k], dp[k-coin])
    print(dp)
    res = dp[-1]
    if res == float("inf"):
        return -1
    return res


coins = [1, 2, 5]
amount = 11
print(coinChange(coins, amount))
