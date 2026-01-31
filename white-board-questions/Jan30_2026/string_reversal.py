
# Clarification: what, practically speaking, is a string? 

def stringReversal(s):

    # how do we look at a letter, and see what is after it?
    size = len(s)
    # given s[0], is there s[1]?
    # given s[-1], is there s[-2]?
    if s[-1] and s[-2]:
        print(s[-1] + s[-2])
        return s[-1] and s[-2]

    # base case? nothing after "a"
    print(s, size)
    return s

stringReversal("hi")