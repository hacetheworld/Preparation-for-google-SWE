def lis(arr):
    res = [1 for i in range(0, len(arr))]
    for i in range(1, len(arr)):
        for j in range(0, i):
            if(arr[j] < arr[i] and res[j] >= res[i]):
                res[i] = res[j]+1
    return res


print(lis([10, 22, 9, 33, 21, 50, 41, 60, 80]))
