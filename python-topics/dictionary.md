1. A Python dictionary (dict) is a collection of key → value pairs.
```python
ages = {
    "alice": 30,
    "bob": 25,
    "charlie": 35
}
```
You look things up by key, not by position:
```py
ages["alice"]   # 30
```
If you come from JavaScript: 👉 A Python `dict` is basically a plain JS object (POJO) or a `Map`.
so dict[key] is like obj[key]
So yes—this concept definitely exists in JS, it’s just less hyped there because JS objects are already everywhere.
2. Why dictionaries are “fast” (the big deal)

Dictionaries are backed by a hash table.
That gives you (on average):
- Insert → O(1)
- Lookup → O(1)
- Update → O(1)
Compare that to a list/array:
- Search in a list → O(n)
That’s the entire reason dictionaries are such a big deal.

Say you want to check if "apple" exists in a *list*:
```py
words = ["apple", "banana", "cherry"]
"apple" in words   # O(n)
```
Versus a *dictionary*:
```python
words = {"apple": True, "banana": True, "cherry": True}
"apple" in words   # O(1)
```
3. Basic dictionary operations you should know
Create one:
```py
d = {}
d = dict()
```
Insert/Update functionality:
```py
d["a"] = 1
d["a"] = 2   # overwrites
```
Perform lookup:
```py
value = d["a"]        # KeyError if missing
value = d.get("a")    # None if missing
value = d.get("a", 0) # default value
```
Check if exists:
```py
if "a" in d:
    ...
```
Iterate:
```py
for key in d:
    print(key, d[key])

for key, value in d.items():
    print(key, value)
```
4. Uses
Dictionaries as counters:
```py
s = "banana"
counts = {}

for c in s:
    if c not in counts:
        counts[c] = 0
    counts[c] += 1
# returns:
{'b': 1, 'a': 3, 'n': 2}
```
shortcut:
```py
from collections import defaultdict

counts = defaultdict(int)
for c in s:
    counts[c] += 1
```
or:
```py
from collections import Counter
counts = Counter(s)
```

5. When should you reach for a dictionary in LeetCode?

Reach for a dictionary when you see:
1️⃣ “Check if something exists” repeatedly
Two Sum
Contains Duplicate
Happy Number

If you’re scanning a list and repeatedly asking:
“Have I seen this before?”
→ dictionary or set
2️⃣ “Count frequency”

Anagram problems
Majority Element
Top K Frequent Elements

Any time the problem mentions:
“frequency”
“how many times”
“most common”

→ dictionary
3️⃣ “Group things by something”

Group Anagrams
Group by category / value / key
```py
groups[key].append(item)

```
This is a dictionary mapping → list.

4️⃣ Replace nested loops
If you’re about to write:
```py
for i in range(n):
    for j in range(n):
        ...
```
Ask yourself: “Can I store something in a dictionary so I only loop once?”
This is how you go from O(n²) to O(n).

6. TL;DR intuition to build

Think of a dictionary as:
“A super-fast notebook where I can instantly look up information by label instead of scanning everything.”
If your brain says:
“I need to remember something”
“I need to count something”
“I need to check if I’ve seen this”
👉 Reach for a dictionary.

## twoSum
Key takeaways (these matter more than the solution):

Dictionaries are memory
“What have I seen so far?”
Lookup is not iteration
`if x in d:` is constant time
For Two Sum, dict values should be indices--not complements, booleans, or relationships
Check before insert: this avoids using the same element twice

People want to see if you recognize:
“This problem can be reduced from O(n²) to O(n) by trading memory for speed.”

## What does this have to do with 'hash map pattern'?
When someone says “hash map”, they are talking about the concept.
When they say “dictionary”, they’re talking about Python’s implementation of that concept.
👉 Your Python dictionary is a hash map.
“There is a common problem-solving strategy where you use a hash map (dictionary) to store information so you can look it up fast later.”
The core hash map pattern (the one to memorize)

Here’s the pattern in plain English:
1. Loop through your data once
2. Use a hash map to remember something
3. On each step:
    - Check if the thing you need already exists
    - If yes → solve
    - If no → store current info
That’s it. That’s the pattern.