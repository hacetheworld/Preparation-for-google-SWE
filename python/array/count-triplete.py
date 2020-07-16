def count_triplete(arr, sum):
    arr.sort()
    tripletesCounter = 0
    length = len(arr)
    for i in range(0, length-2):
        left = i+1
        right = length-1
        while (left < right):
            if(arr[i]+arr[left]+arr[right] >= sum):
                right -= 1
            else:
                tripletesCounter += (right-left)
                left += 1
    return tripletesCounter


print(count_triplete([5, 1, 3, 4, 7], 12))
