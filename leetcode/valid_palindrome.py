# Notes:
# I was thinking in terms of transformations instead of traversal
# That [::-1] slice is doing what split('').reverse().join('') does in JS.
# “Can you do this without creating a new string?”
# if you see "palindrome" "sorted array" "two ends" "in place" whisper "two pointers"
# This is stateful traversal, and while is Python’s tool for that.

def isPalindrome(s):
# since this is traversal, and we are not returning the string, we don't have to technically clean the string, just validate that correct characters are a palindrome - just hop over the junk
# two pointers --> in python two indices
    l = 0
    r = len(s) - 1
    while l < r:
        if not s[l].isalnum():
            l += 1
            continue

        #continue jumps back to the top of the while loop
        if not s[r].isalnum():
            r -= 1
            continue 

        if s[l].lower() != s[r].lower():
            return False

        l += 1
        r -= 1

    
    return True






s1 = "A man, a plan, a canal: Panama" #True
s2 = "race a car" #False
s3 = " " #True - empty string reads the same forward and backward
s4 = ":::" #True - empty string after cleaning? so True based on s3
s5 = "hello world" #False
s6 = "0 0 0 0 0" #True
s7 = "1 2 3 2 1" #True
s8 = "car" #False

s9 = "arcra" #True
s10 = "arccra" #True
s11 = "ra  ce |a c**ar" #True

# tests
print("expect True: ", isPalindrome(s1)) #True
print("expect True: ", isPalindrome(s2)) #False
print("expect True: ", isPalindrome(s3)) #True
print("expect True: ", isPalindrome(s4)) #True
print("expect False: ", isPalindrome(s5)) #False
print("expect True: ", isPalindrome(s6)) #True
print("expect True: ", isPalindrome(s7)) #True
print("expect False: ", isPalindrome(s8)) #False
print("expect True: ", isPalindrome(s9)) #True
print("expect True: ", isPalindrome(s10)) #True
print("expect True: ", isPalindrome(s11)) #False

# ask yourself:
# 1. Do I need all elements?
# Yes → maybe preprocess
# No → pointers
# 2. Can I decide locally?
# If I can compare just two positions at a time → pointers
# 3. Am I allowed extra memory?
# If not → pointers almost always