def reverseStr(text):
    left = 0
    right = len(text)-1
    while(left < right):
        if (isCharString(text[left]) and isCharString(text[right])):
            swap(left, right, text)
            left += 1
            right -= 1
        elif(isCharString(text[left]) != True):
            left += 1
        elif (isCharString(text[right]) != True):
            right -= 1

    return "".join(text)


def isCharString(char):
    return char.isalpha()


def swap(i, j, text):
    temp = text[j]
    text[j] = text[i]
    text[i] = temp


res = reverseStr(list("a!!!b.c.d,e'f,ghi"))
print(res)
