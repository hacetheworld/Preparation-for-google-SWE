def coinChangeWays(coins, sum):
    dp = [[0 for _ in range(sum+1)] for _ in range(len(coins)+1)]

    for i in range(len(coins)+1):
        dp[i][0] = 1
    for j in range(1, len(coins)+1):
        for k in range(1, sum+1):
            dp[j][k] = dp[j-1][k]
            if coins[j-1] <= k:
                dp[j][k] += dp[j][k-coins[j-1]]
    print(dp)
    return dp[-1][-1]


def helperMethod(coins, sum, i):
    if sum == 0:
        return 1
    if sum < 0:
        return 0
    if i >= len(coins) or coins[i] > sum:
        return 0
    return helperMethod(coins, sum-coins[i], i)+helperMethod(coins, sum, i+1)


arr = [2, 5, 3, 6]
sum = 10
size = len(arr)
print("Maximum Obtainable Value is", coinChangeWays(arr, sum))
