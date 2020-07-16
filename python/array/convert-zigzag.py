def convert_zigzag(arr):
    arr.sort()
    i = 1
    j = len(arr)
    while(i < j-2):
        swap(i, i+1, arr)
        i += 2
    return arr


def swap(i, j, arr):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


print(convert_zigzag([4, 3, 7, 8, 6, 2, 1]))
