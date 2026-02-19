arr = [2, 4, 6, 8, 1, -1, -46]
#do something for x in array
squared = [x**2 for x in arr]

print("squared: ", squared)

result = sorted(squared) # returns a new list

print("result: ", result)

arr.sort() # modifies in place

print("result2: ", arr)

# Python uses Timesort, which is a hybrid of merge sort + insertion sort. it is O(nlogn)
# space is O(n), sorted() is new list, and .sort() uses auxiliary space internally (Timesort uses temporary arrays)
## note: range returns a range object, not a list, it's memory efficient