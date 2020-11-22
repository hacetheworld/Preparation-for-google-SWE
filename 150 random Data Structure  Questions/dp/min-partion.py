def minPartion(arr):
    n = len(arr)
    sumArr = sum(arr)
    dp = [[None for _ in range(sumArr+1)] for _ in range(n+1)]
    for i in range(1, n+1):
        dp[i][0] = True

    for j in range(1, sumArr+1):
        dp[0][j] = False
    dp[0][0] = True
    for l in range(1, n+1):
        for m in range(1, sumArr+1):
            dp[l][m] = dp[l-1][m]
            if arr[l-1] <= m:
                dp[l][m] |= dp[l-1][m-arr[l-1]]
    diff = float("inf")
    k = sumArr//2
    while k >= 0:
        if dp[n][k] == True:
            diff = sumArr-(2*k)
            break
        k -= 1
    return diff


arr = [6, 11, 5]
print("The minimum difference between 2 sets is", minPartion(arr))
