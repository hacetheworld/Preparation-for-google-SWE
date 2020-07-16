def smallest_subarray(arr, sum):
    n = len(arr)
    minLength = n+1
    for i in range(0, n-1):
        currLen = 1
        currSum = arr[i]

        for j in range(i+1, n):
            if(currSum > sum):
                minLength = min(minLength, currLen)
            currSum += arr[j]
            currLen += 1
        # print(currLen)
    return minLength


print(smallest_subarray([1, 4, 45, 6, 10, 19], 51))
print(smallest_subarray([1, 10, 5, 2, 7], 9))
print(smallest_subarray([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280))
