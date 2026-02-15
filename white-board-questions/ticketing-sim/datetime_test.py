from datetime import datetime

current_time = datetime.now().replace(microsecond=0).time()

print(current_time)