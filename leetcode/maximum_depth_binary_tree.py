
class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root):
    #input an array
    #output a number
    if not root:
        return 0

    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)

    return 1 + max(left_depth, right_depth)

root1 = [1,None,2] #2
root2 = [3,9,20,None,None,15,7] #3
root3 = [2,13,4,5,67,8,3,9,0] #9 unbalanced

print(maxDepth(root1))#2
print(maxDepth(root2))#3
print(maxDepth(root3))#9 

edge1 = [] # 0
edge2 = [9] #inclusive: output is 1
edge3 = [2,3,4,None, None, None,None] #2

print(maxDepth(edge1))# 0
print(maxDepth(edge2))#inclusive: output is 1
print(maxDepth(edge3))#2