# Cheat Sheet

QUEUE-FIFO
-line at a store-BFS traversal (breadth-first search)-task scheduling-streaming data
NECESSARY LIBRARY: `collections.deque`
"push, top, pop, empty" --> "enqueue, peek, dequeue, if not q"
```python
from collections import deque
q = deque()
#enqueue
q.append(x)
#dequeue
q.popleft()
#peek
q[0]
#check empty
if not q:
#size
len(q)
```
BIGO:`append()`->O(1), `popleft()`->O(1) --->lists are On for pop(0)

## 🔎 Language That Signals “Use a Queue”

Look for these keywords in problems:

🚩 Big Signals
"Shortest path in unweighted graph"
"Minimum number of steps"
"Level order traversal"
"Distance from..."
"Spread"
"Infect"
"Rot"
"Time until all..."
"Process in order"
"First come first serve"
"Streaming data"

🚩 Matrix Clues
2D grid
Movement in 4 directions
Multi-source starting points
Wave expansion

🚩 Graph Clues
BFS explicitly mentioned
Unweighted edges
Fewest operations
Transform word A to B

🧩 Grind75 Problems That Prefer Queue (BFS) --> Here are the major ones:
🌳 Trees
Binary Tree Level Order Traversal
Binary Tree Right Side View
Average of Levels in Binary Tree
Minimum Depth of Binary Tree
Maximum Depth (BFS alternative)

🌐 Graphs
Number of Islands (BFS version)
Clone Graph
Course Schedule (Topological Sort)
Word Ladder
Rotting Oranges
Pacific Atlantic Water Flow (BFS approach)

🧱 Matrix / Grid
01 Matrix
Rotting Oranges
Walls and Gates
Flood Fill (BFS alternative)

## stack vs queue
📝 Quick Comparison: Stack vs Queue
| Stack          | Queue          |
| -------------- | -------------- |
| DFS            | BFS            |
| LIFO           | FIFO           |
| Recursion-like | Level-by-level |
| Backtracking   | Shortest path  |

## Quiz Answers

1. What is a Queue in data structure?
- A queue is a linear data structure that follows a First In First Out (FIFO) order for the operations. Elements are added at the rear end and removed from the front end.

2. Which of the following operations is not a standard operation of a queue?
- Push is an operation associated with stacks, not queues. Enqueue is for adding an element, Dequeue is for removing an element, and Peek is for observing the front element without removing it.

3. Which of the following is a real-world example of a queue?
- A line of people waiting for a bus follows the FIFO principle, where the first person in line is the first one to board the bus, similar to a queue.

4. What does the 'Enqueue' operation do in a queue?
- Enqueue is the operation of adding an element to the rear end of the queue.

5. What does the 'Dequeue' operation do in a queue?
- Dequeue is the operation of removing the front element from the queue.

6. In a queue, which end is used for inserting elements?
- In a queue, elements are added at the rear end.

7. In a queue, which end is used for removing elements?
- In a queue, elements are removed from the front end.

8. Which of the following is not a type of queue?
- Circular Queue, Priority Queue, and Double-ended Queue are all types of queues. There is no standard queue type called a Random Queue.

9. What is a Circular Queue?
- A Circular Queue is a linear data structure that connects the last position back to the first position to make a circle, enabling efficient use of storage.

10. In the context of a queue, what does FIFO stand for?
- FIFO stands for First In First Out, indicating that the first element added to the queue will be the first one to be removed.

11. Which of the following scenarios is best implemented with a queue?
- A queue is suitable for scheduling tasks where the first task to arrive is the first to be executed, aligning with the FIFO principle.

12. What is a Priority Queue?
- A Priority Queue is a type of queue where each element has a priority, and elements are served based on their priority, not necessarily in their order of arrival.

## links
[scheduling](https://read.seas.harvard.edu/~kohler/class/05s-osp/notes/notes5.html)
[queue algo](https://www.cs.auckland.ac.nz/software/AlgAnim/queues.html)
[stacks & queues - gorgeous diagrams](https://introcs.cs.princeton.edu/java/43stack/)