class EvilPony:
    def __init__(self, name, color, trait="evil"):
        self.name = name
        self.color = color
        self.trait = trait
        self.money = 10

    def cackle(self):
        print("Hah!")

    def stealMoney(self):
        self.money += 10
        print(f"{self.name} has {self.money} dollars.")


ep1 = EvilPony("Evander", "green")

print(ep1)
ep1.cackle()
ep1.stealMoney()
ep1.stealMoney()
ep1.stealMoney()
ep1.stealMoney()
ep1.stealMoney()

#self is the instance of the particular Class object
#with recursion, calling a method in an instance requires self.someMethod(), otherwise Python looks for a global function someMethod()
#self → the instruction manual
#root → the thing being operated on