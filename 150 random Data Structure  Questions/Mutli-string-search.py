# Solution 1 time complexity : O(n^3) space = O(n)
# def multiStringSearch(strInSearch, strToSearch):
#     result = []
#     for searchStr in strToSearch:
#         result.append(searchHelper(strInSearch, searchStr))

#     return result


# def searchHelper(stringInSearch, searchStr):
#     newStr = stringInSearch.split(' ')
#     # print(newStr, searchStr)
#     for item in newStr:
#         i = 0
#         if len(item) != len(searchStr):
#             continue
#         for letter in item:
#             if searchStr[i] != letter:
#                 break
#             i += 1
#         if i == len(searchStr):
#             return True

#     return False


# print(multiStringSearch('this is a good thing',
#                         ['thi', 'is', 'happen', 'good', 'a']))


# Solution 2 using trie

class Trie:
    def __init__(self):
        self.root = {}
        self.endSymbol = "*"

    def createTrie(self, string):
        newstring = string.split(' ')
        for word in newstring:
            self.addNode(word)

    def addNode(self, word):
        currentNode = self.root
        for letter in word:
            if(letter not in currentNode):
                currentNode[letter] = {}
            currentNode = currentNode[letter]
        currentNode[self.endSymbol] = True

    def contains(self, string):
        currentNode = self.root
        for letter in string:
            if(letter not in currentNode):
                return False
            currentNode = currentNode[letter]

        return self.endSymbol in currentNode


def multiStringSearchUsingTrie(string, multiString):
    trie = Trie()
    trie.createTrie(string)
    result = []
    for item in multiString:
        result.append(trie.contains(item))
    return result


print(
    multiStringSearchUsingTrie(
        'this is a good thing',
        ['this', 'is', 'happen', 'good', 'a']
    ))
