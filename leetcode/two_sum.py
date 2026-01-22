# Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.
# each input has exactly one solution - only one valid answer exists
# use each element only once
# output can be in any order
nums = [2,7,11,15]
target = 9
def twoSum(nums, target):
    mydict = {}
    for num in nums:
        mydict[num] = 0

    for num in mydict:
        if num + num[i+1] == target
            return [num, num[i+1]
        else mydict[num] = 1
    return mydict

mydict = twoSum(nums, target)

print(mydict)


# “As I iterate, I want to remember information in a way that makes future checks cheap.”
# this is the hash map pattern

# tests = [
#     { Input: nums = [2,7,11,15], target = 9, Output: [0,1] },
#     { Input: nums = [3,2,4], target = 6, Output: [1,2] },
#     { Input: nums = [3,3], target = 6, Output: [0,1] }
# ]