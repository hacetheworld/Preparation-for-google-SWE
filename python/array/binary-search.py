def binarySearch(arr, key):
    left = 0
    right = len(arr)-1
    mid = round((left+right) / 2)
    while left <= right:
        if(arr[mid] == key):
            return True
        elif(arr[mid] < key):
            left = mid+1
        else:
            right = mid-1
        mid = round((left+right) / 2)
    return False


print(binarySearch([4, 5, 9, 10, 15, 20], 9))
print(binarySearch([4, 5, 9, 10, 15, 20], 20))
print(binarySearch([4, 5, 9, 10, 15, 20], -155))
