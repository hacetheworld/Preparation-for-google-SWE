def rodCutting(prices, N):
    dp = [float("-inf") for _ in range(N)]
    dp[0] = prices[0]
    for i in range(1, N):
        temp = prices[i]
        for j in range(i):
            temp = max(temp, (dp[j]+dp[i-j-1]))
        dp[i] = temp
    print(dp)
    return dp[-1]


def helperRodCutting(prices, length, n, i, res):
    if n <= 0:
        return res
    return max(helperRodCutting(prices, length, n-i, i, res+prices[i-1]), helperRodCutting(prices, length, n-1, i+1, res))


arr = [1,  5,  8,  9, 10,  17,  17,  20]
size = len(arr)
length = [i for i in range(size)]
print(length)
print("Maximum Obtainable Value is", helperRodCutting(arr, length, size, 1, 0))
