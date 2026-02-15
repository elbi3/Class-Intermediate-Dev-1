from ticketing_sim import Ticket, TicketQueue
from threading import Timer


# enqueue 10 tickets
tq = TicketQueue()
print(tq)

timer = Timer(2.0, tq.enqueue())
timer.start()
timer = Timer(3.0, tq.enqueue())
timer.start()
timer = Timer(4.0, tq.enqueue())
timer.start()
timer = Timer(1.0, tq.enqueue())
timer.start()
timer = Timer(2.0, tq.enqueue())
timer.start()

queueLength = tq.ticketCount

while queueLength > 0:
    tq.dequeue()
# tix = tq.enqueue()
# print(tix)