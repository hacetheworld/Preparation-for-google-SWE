def longestPalindromeSubseq(s):
    n = len(s)
    dp = [[0 for _ in range(n)] for _ in range(n)]
    for i in range(n):
        dp[i][i] = 1
    for k in range(2, n+1):
        for l in range(n-k+1):
            j = k+l-1
            if s[l] == s[j]:
                dp[l][j] = 2+dp[l+1][j-1]
            else:
                dp[l][j] = max(dp[l+1][j], dp[l][j-1])
    return dp[0][n-1]


s = "GEEKS FOR GEEKS"

print(longestPalindromeSubseq(s))
