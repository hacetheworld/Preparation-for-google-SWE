from binary_tree import BinaryTree


def maxSumBranch(root):
    if(root == None):
        return [0, 0]

    [leftBranch, leftBranchMostSum] = maxSumBranch(root.left)
    [rightBranch, rightBranchMostSum] = maxSumBranch(root.right)

    gst = max(leftBranch, rightBranch)
    gstAsBranch = max(gst+root.val, root.val)
    mst = max(gstAsBranch, leftBranch+rightBranch+root.val,
              leftBranchMostSum, rightBranchMostSum)

    return [gstAsBranch, mst]


Bt = BinaryTree(1)
Bt.left = BinaryTree(2)
Bt.right = BinaryTree(3)
Bt.left.left = BinaryTree(4)
Bt.left.right = BinaryTree(5)
Bt.right.left = BinaryTree(6)
Bt.right.right = BinaryTree(7)

res = maxSumBranch(Bt)
print(res[1])
