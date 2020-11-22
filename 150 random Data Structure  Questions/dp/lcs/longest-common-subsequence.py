def lcsRecur(s1, s2, i, j):
    if i < 0 or j < 0:
        return 0
    if s1[i] == s2[j]:
        return 1+lcsRecur(s1, s2, i-1, j-1)
    return max(lcsRecur(s1, s2, i-1, j), lcsRecur(s1, s2, i, j-1))


def lcsDp(s1, s2, n, m):
    dp = [[0 for _ in range(m+1)] for _ in range(n+1)]
    for i in range(1, n+1):
        for j in range(1, m+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = 1+dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i][j-1], dp[i-1][j])
    lcs = ""
    row = n
    col = m
    while row > 0 and col > 0:
        if s1[row-1] == s2[col-1]:
            lcs += s1[row-1]
            col = col-1
            row = row-1
        else:
            if dp[row][col-1] > dp[row-1][col]:
                col = col-1
            else:
                row = row-1

    print(dp)
    print(lcs)
    return dp[-1][-1]


s1 = "AGGTAB"
s2 = "GXTXAYB"
n = len(s1)
m = len(s2)
print(lcsDp(s1, s2, n, m))
