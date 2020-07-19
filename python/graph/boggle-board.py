# Method 1 Naive

def boogleBoard(board, dictonary):
    result = []
    for char in dictonary:
        result.append(isWord(board, char))
    return result


def isWord(board, char):
    visited = [[False for col in row] for row in board]
    for i in range(0, len(board)):
        for j in range(0, len(board[i])):
            if(board[i][j] == char[0]):
                if(isBoardContains(board, i, j, char, visited)):
                    return True
    return False


def isBoardContains(board, row, col, char, visited):
    counter = 0
    queue = []
    queue.append([row, col])

    while queue:
        node = queue.pop(0)
        i = node[0]
        j = node[1]
        if(counter == len(char)):
            return True
        if(visited[i][j] == True):
            continue
        if(board[i][j] != char[counter]):
            continue
        counter += 1
        visited[i][j] = True
        nodeToExplore = getNodes(board, i, j)
        for currentNode in nodeToExplore:
            queue.append(currentNode)
        visited[i][j] = False
    return False


def getNodes(board, i, j):
    unvisitedNeighbors = []

    if (i > 0):
        unvisitedNeighbors.append([i - 1, j])
    if (i < len(board) - 1):
        unvisitedNeighbors.append([i + 1, j])
    if (j > 0):
        unvisitedNeighbors.append([i, j - 1])
    if (j < len(board) - 1):
        unvisitedNeighbors.append([i, j+1])
    if (i > 0 and j > 0):
        unvisitedNeighbors.append([i-1, j - 1])
    if (i > 0 and j < len(board) - 1):
        unvisitedNeighbors.append([i-1, j + 1])
    if (i < len(board) - 1 and j > 0):
        unvisitedNeighbors.append([i+1, j - 1])

    if (i < len(board) - 1 and j < len(board) - 1):
        unvisitedNeighbors.append([i+1, j + 1])
    return unvisitedNeighbors


board = [['G', 'I', 'Z'],
         ['U', 'E', 'K'],
         ['Q', 'S', 'E']]
dictonary = ["GEEKS", "FOR", "QUIZ", "GO"]

print(boogleBoard(board, dictonary))
