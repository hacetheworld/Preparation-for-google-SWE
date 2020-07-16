def lengthOfLargestSubarray(arr):
    hash = {}
    lenCounter = 0
    for key in range(0, len(arr)):
        hash[arr[key]] = True

    for i in range(0, len(arr)):
        leftEl = arr[i]-1
        rightEl = arr[i]+1
        tempLength = 1
        while hash.get(leftEl):
            leftEl = leftEl-1
            tempLength += 1
        while hash.get(rightEl):
            rightEl = rightEl+1
            tempLength += 1

        lenCounter = max(lenCounter, tempLength)
    return lenCounter


print(lengthOfLargestSubarray([14, 12, 11, 20]))
print(lengthOfLargestSubarray([1, 56, 58, 57, 90, 92, 94, 93, 91, 45]))
print(lengthOfLargestSubarray([10, 12, 11]))
