
class MyQueue:
    def __init__(self):
        self.queue = []

    def enqueue(self, item):
        self.queue.append(item)

    def dequeue(self):
        if self.isEmpty():
            return "Queue is empty"
        self.queue.pop(0)

    def peek(self):
        if self.isEmpty():
            return "Queue is empty"
        return self.queue[0]

    def isEmpty(self):
        return len(self.queue) == 0
            
    def queueSize(self):
        return len(self.queue)

q = MyQueue()

q.enqueue(1)
q.enqueue(2)
q.enqueue([3, 4, 5])
print(q.queue[0], q.queue[1], q.queue[2])
print(q.queue)
q.dequeue()
print(q.queue)
print("queue size: ", q.queueSize())
print("isEmpty: ", q.isEmpty())
print("peek: ", q.peek())