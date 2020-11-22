def subsetSum(arr, sum):
    dp = [[None for _ in range(sum+1)] for _ in range(len(arr)+1)]
    for i in range(len(arr)+1):
        for j in range(sum+1):
            if j == 0:
                dp[i][j] = True
            else:
                dp[i][j] = False
    for k in range(1, len(arr)+1):
        for l in range(1, sum+1):
            if arr[k-1] > l:
                dp[k][l] = dp[k-1][l]
            else:
                dp[k][l] = dp[k-1][l] or dp[k-1][l-arr[k-1]]
    return dp[-1][-1]


print(subsetSum([2, 3, 5, 8, 6, 10], 10))
