# use Python's built-in 'TimeSort' algorithm

def formatGrowthPercentages(arr):
    # square each element
    squared = [x**2 for x in arr]
    print("squared elements: ", squared)
    # sort each element
    result = sorted(squared)
    print(result)
    return result
