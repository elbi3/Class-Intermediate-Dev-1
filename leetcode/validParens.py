# stack
# LIFO
s0 = "["
s1 = "()"
s2 = "()[]{}"
s3 = "(]"
s4 = "([])"
s5 = "([)]"
s6 = "({[]})({{{[[()]]}}})"
# other odd length tests

def isValid(s):
    stack = []
# if len(stack) is odd, return false? (solves the one element issue)
    if len(s) % 2 != 0:
        return False
# it's not advisable to iterate over any iterable while changing it
# what if there are only 2 in the list?
    for x in s:
        if x == "(" or x == "[" or x == "{":
            stack.append(x)
        # guard the "peek" with 'and stack' to verify there are contents
        elif x == ")" and stack and stack[-1] == "(":
            if len(stack) == 1:
                return True
            else:
                stack.pop()
        elif x == "]" and stack and stack[-1] == "[":
            if len(stack) == 1:
                return True
            else:
                stack.pop()
        elif x == "}" and stack and stack[-1] == "{":
            if len(stack) == 1:
                return True
            else:
                stack.pop()
        else: 
            # print("it's false")
            return False
    # else:
    return False


print(isValid(s0)) # False
print(isValid(s1)) # True
print(isValid(s2)) # True
print(isValid(s3)) # False
print(isValid(s4)) # True
print(isValid(s5)) # False
print(isValid(s6)) # True

# we need to put things on the stack

# we need to remove items from the stack

# we need to loop until stack is empty or condition not met

