from datetime import datetime
from threading import Timer
import random
import time

class TicketQueue:
    def __init__(self):
        self.queue = []
        self.numTickets = 0
        self.makeCount = 0

    def runDequeue(self):
        # make sure there are tickets to run this
        queueLength = self.numTickets
        while queueLength > 0:
            self.dequeue()

    # def runQueueTickets(self, makeCount):
    #     self.makeCount = makeCount

    #     while self.makeCount > 0:
    #         randNum = random.randint(0, 10)
    #         timer = Timer(randNum, self.enqueue())
    #         tic = self.enqueue()
    #         # print("starting timer for ticket number: ", tic.getNum())
    #         timer.start()
    #         # time.sleep(num)
    #         num -= 1

    def enqueue(self):
        self.ticketCount()
        print("numTickets: ", self.numTickets)
        ticket = Ticket(self.numTickets)
        self.queue.append(ticket)
        return ticket

    def dequeue(self):
        if self.isEmpty():
            return "Queue is empty"
        popTicket = self.queue.pop(0)
        print("Ticket number: ", popTicket.getNum(), "Ticket timestamp: ", popTicket.getTimeStamp())
        # return popTicket

    def peek(self):
        return self.queue[0]

    def isEmpty(self):
        return len(self.queue) == 0

    def ticketCount(self):
        self.numTickets += 1

    # def isFull(self):


class Ticket:
    def __init__(self, num):
        self.ticketNo = num
        self.timeStamp = datetime.now().replace(microsecond=0).time() # define better?

    def getNum(self):
        return self.ticketNo

    def getTimeStamp(self):
        return self.timeStamp

tq = TicketQueue()
tq.runQueueTickets(10)
# t1 = tq.enqueue()
# t2 = tq.enqueue()

# print(t1)
# print(t2)
# print("tq.queue: ", tq.queue)
# print(t1.getNum())
# print("timestamp: ", t2.getTimeStamp())

# print(tq.dequeue())
# print(tq.dequeue())
# print("tq.queue: ", tq.queue)
