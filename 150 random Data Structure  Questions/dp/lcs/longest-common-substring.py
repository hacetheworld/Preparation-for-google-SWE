def lcsRecur(s1, s2, i, j, count):
    if i <= 0 or j <= 0:
        return count
    if s1[i-1] == s2[j-1]:
        count = lcsRecur(s1, s2, i-1, j-1, count+1)
    else:
        count = max(count, lcsRecur(s1, s2, i-1, j, 0),
                    lcsRecur(s1, s2, i, j-1, 0))
    return count


def lcsDp(s1, s2, i, j):
    dp = [[0 for _ in range(j+1)] for _ in range(i+1)]
    result = 0
    for k in range(1, i+1):
        for l in range(1, j+1):
            if s1[k-1] == s2[l-1]:
                dp[k][l] = 1+dp[k-1][l-1]
                result = max(result, dp[k][l])
            else:
                dp[k][l] = 0
    print(dp)
    return result


s1 = "GeeksforGeeks"
s2 = "GeeksQuiz"
i = len(s1)
j = len(s2)
print(lcsDp(s1, s2, i, j))
