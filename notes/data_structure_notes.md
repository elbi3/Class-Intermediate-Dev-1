
# Sites
https://www.techinterviewhandbook.org/algorithms/recursion/

## Recursion
"the solution depends on solutions to smaller instances of the same problem"

It's a method of solving problems by breaking them down into smaller instances of the same problem
A base case in a recursive algorithm: The smallest problem to solve
A Tree: a data structure that can be naturally represented using recursion

Don't use recursion when stack memory is limited
(When stack memory is limited, recursion might not be the best choice since each recursive call consumes some stack memory, and excessive recursion can lead to a stack overflow error.)

-> Main advantage of recursion? memory usage

"Tail Recursion": Tail recursion is a special case of recursion where the recursive call is the last operation performed in the function, allowing some compilers to optimize the recursion and save stack space.

A recursive function solves a problem by calling itself with modified arguments, whereas an iterative function uses loops to repeat operations until a condition is met

A recursive function without a base case will do infinite loop
A recursive function without a base case will result in an infinite loop (or recursive calls), as it will never reach a condition that stops the recursion, potentially leading to a stack overflow.

In recursion, memoization stores the results of expensive function calls
Memoization is used in recursive algorithms to store the results of expensive function calls, preventing the need for repeated calculations and thus improving efficiency.

The divide and conquer approach involves breaking down a problem into simpler versions of the same problem, solving each part independently, and then combining the solutions, often implemented recursively.

BINARY SEARCH * MERGE SORT * TREE TRAVERSAL * DEPTH-FIRST SEARCH

-> always define a base case so the recursion ends!
-> permutation. generates all combinations and tree-based questions
-> implicitly uses a stack. Recursive approaches can be rewritten iteratively using a stack
-> tail-call optimization "TCO"
-> number of base cases?
-> corner cases?
-> use memoization if things are being called twice. Can get to O(n) this way

thinking procedurally instead of structurally!
traversal is a side effect of recursive calls
recursion doesn't branch on cases, it delegates

recursion doesn't happen in your code, it happens in time
it happens in the call stack and in the pause/resume of function calls
“I solve the problem by assuming the problem is already solved for smaller inputs.”
recursion feels invisible because the stack is implicit, the state is hidden, the movement is temporal
recursion *is* a stack, just not one you manage
“Each recursive call explores one path fully, reports a result, and disappears.”

base case: immediate return, no recursion, dead end found
base case: stopping condigion, no further work found, we perform no further operation
```js
maxDepth(A)
 ├─ maxDepth(B)
 │   ├─ maxDepth(None) → 0
 │   ├─ maxDepth(None) → 0
 │   └─ return 1
 ├─ maxDepth(C)
 │   ├─ maxDepth(None) → 0
 │   ├─ maxDepth(D)
 │   │   ├─ maxDepth(None) → 0
 │   │   ├─ maxDepth(None) → 0
 │   │   └─ return 1
 │   └─ return 2
 └─ return 3
```

Because this rule is always true:
Depth at a node
= 1 + max(depth of children)
Stop thinking:
“How do I traverse the tree?”
Start thinking:
“What answer does this node owe its parent?”
That’s recursion.

keywords: DEPTH search

Because in recursion, you always recurse past the leaves.
recursion always walks past the leaves into None. "There is no subtree here"


## OOP
[from mentor](https://bytebytego.com/courses/object-oriented-design-interview/design-a-parking-lot)

🧠 Why This Feels So Overwhelming
Look at what that assignment actually combines:
OOP (class design)
Queue data structure
Randomness
Time simulation
Separation of phases
Unit testing
Complexity analysis
Diagramming
Video explanation
Communication strategy

That is not one skill. It's systems thinking + data structures + clean code + interview simulation.
You’re being evaluated on orchestration, not just implementation.
When you sit down and freeze, it’s usually because:
You’re trying to solve the whole system at once.
But interviews are not solved that way.
Strong candidates don’t think:
“I must implement everything.”
They think:
“Let me isolate pieces.”