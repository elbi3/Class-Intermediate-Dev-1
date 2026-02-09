# Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.
# each input has exactly one solution - only one valid answer exists
# use each element only once
# output can be in any order
nums = [2,7,11,15]
target = 9
# ---------->this function is about lookup--->"Check if something exists"
# ---------->a dictionary gives us 0(1) for lookup (constant time)
#“Have I seen the complement already, and where?”
def twoSum(nums, target):
    d = {}
    for index, val in enumerate(nums): #------>O(n)
        other = target - val
        
        #lookup: look for "other" needed num ---->O(1) lookups
        if other in d:
            print("index: ", index, "other: ", d[other])
            return [index, d[other]]
        
        #otherwise save it in dictionary:
        d[val] = index

        
    print("d: ", d)

