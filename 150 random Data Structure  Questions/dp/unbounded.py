def unboundedKnapsack(val, wt, W):
    n = len(val)
    dp = [[0 for _ in range(W+1)] for _ in range(n+1)]
    for l in range(1, n+1):
        for m in range(1, W+1):
            dp[l][m] = dp[l-1][m]
            if wt[l-1] <= m:
                dp[l][m] = val[l-1] + dp[l][m-wt[l-1]]
    print(dp)
    return dp[-1][-1]


def unboundedKnapsackRecursion(val, wt, w, n, res):
    if n < 0:
        return res
    if wt[n] <= w:
        return max(unboundedKnapsackRecursion(val, wt, w-wt[n], n, res+val[n]), unboundedKnapsackRecursion(val, wt, w, n-1, res))
    return unboundedKnapsackRecursion(val, wt, w, n-1, res)


W = 8
val = [10, 40, 50, 70]
wt = [1, 3, 4, 5]
print(unboundedKnapsack(val, wt, W))
