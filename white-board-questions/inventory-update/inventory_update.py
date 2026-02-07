# print output, don't return output - modifying input array, not returning it

def inventoryUpdate(inventory):
    #check length > 1
    #ignore last position
    #check for 0's

    if(len(inventory) <= 1): return inventory

    for x in inventory:
        # print("x: ", x)
        # if(inventory[x] < len(inventory - 2): 
        if x == 0:
            inventory.insert(inventory[x + 1], 0)
            # print("inventory: ", inventory)
            inventory.pop(-1)
            # print("inventory: ", inventory)
            # inventory[x + 1]

    return inventory

print(inventoryUpdate([4,0,1,3,0,2,5,0])) 
print("expected: [4,0,0,1,3,0,0,2]")

print(inventoryUpdate([0]))
print("expected: [0]")
print(inventoryUpdate([0,0]))
print("expected: [0, 0]")
print(inventoryUpdate([1, 2, 0]))
print("expected: [1, 2, 0]")
print(inventoryUpdate([]))
print("expected: []")
print(inventoryUpdate([3,2,1]))
print("expected: [3,2,1]")
