# sorting options

## insertion sort
```py
def insertion_sort(arr):
    for i in range(1, len(arr)):
        current = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = current

    return arr
```
## merge sort - divide and conquer

- Big problems are easier if you split them into smaller problems.
Step1: divide (split array into smaller arrays)(until every piece has one element)
Step2: conquer:
    compare the elements, and sort them (1 less than 5)
    merge the small arrays [-2, 5], [1 , 8]

splitting happens logn time
merging takes n work each level, so **O(nlogn)**

PYTHON CONTROL FLOW:
*merge sort is usually recursive*
base case--> arrya is one element, so it's sorted/merged by definition, and you return that
```py
def
if
return
```
SLICING
```py
mid = len(arr) //2
left = arr[:mid]
right = arr[mid:]
```
WHILE LOOP (TO CONTROL 2 POINTERS)
compare elements from two lists
```py
i = 0
j = 0

while i <len(left) and j <len(right):
    if left[i] < right [j]:
        ...
    else:
        ...
```
```py
while
and
if/else
```
IF ONE LOOP FINISHES, APPEND THE REST
SQUARING:
```PY
for i in range(len(arr)):
    arr[i] = arr[i] ** 2
```

### use recursion!
🔁 The Golden Rule of Recursion
When writing a recursive function, always ask:
- What is the smallest version of this problem? (base case)
- If someone else solved smaller versions for me, could I combine them to solve the bigger one?
Instead of thinking:
“I’ll loop until it's sorted.”
You think:
“If smaller versions were solved, I could solve this.”
Recursion is basically: Assume the smaller problem works.
Think about just ONE layer.
Imagine this is the only call that exists:
`merge_sort([5, 2, 8, 1])`
What should it do?
- Split
- Call merge_sort on each half
- Merge results
Stop there.
Don’t think about what those calls do.
That’s not your job.
Each call only solves its own version.
You said:
I never recognize the optimal recursion solutions.
That’s because recursion is best when:
- The problem naturally splits into smaller identical subproblems.
- The solution to the big problem depends on solutions to smaller versions of itself.
Classic signs:
- Trees
- Divide-and-conquer
- “Split in half”
- “All subsets”
- “All paths”
- Problems that shrink toward a simple base case
When you see:
“Take the array, split it…”
Your recursion radar should ping.
🛠 A Practical Exercise To Train Your Brain
Before writing recursive code, force yourself to write:
- What is the base case?
- If I magically had answers for smaller inputs, how would I combine them?
If you can answer #2 clearly, recursion is likely correct.
🧘 A Huge Mindset Shift
Recursion is NOT:
Breaking the problem down until it's small.
Recursion is:
Defining a problem in terms of a smaller version of itself.
### TEMPLATE
```PY
def solve(problem):
    if smallest_case:
        return simple_answer

    smaller_1 = solve(part_1)
    smaller_2 = solve(part_2)

    return combine(smaller_1, smaller_2)
```

```PY
while both lists have items:
    compare
    append smaller
    move pointer

append leftovers
```

📊 Clean Comparison Table

| Algorithm          | Best Time  | Avg Time   | Worst Time | Space |
| ------------------ | ---------- | ---------- | ---------- | ----- |
| Built-in (Timsort) | O(n)       | O(n log n) | O(n log n) | O(n)  |
| Insertion Sort     | O(n)       | O(n²)      | O(n²)      | O(1)  |
| Merge Sort         | O(n log n) | O(n log n) | O(n log n) | O(n)  |

