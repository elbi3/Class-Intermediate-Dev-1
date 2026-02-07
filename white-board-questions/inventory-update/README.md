Background:
You are in a coding interview with a retail company that is looking to enhance its inventory management system. The company has a unique requirement due to the nature of its products.

Objective:
Your task is to write a program for their inventory management system that handles a specific case in product stocking. Specifically, for every product with a stock count of zero, the system needs to duplicate this entry (representing an order to restock), shifting the subsequent product entries to the right in the inventory list. This operation must be performed in place within the existing inventory array.

Questions:
Clarification: Is it no output since we are modifying the input array, or do we return the `inventory` array?
Clarifiaction: Does it matter that our output is technically not updating all "0"s? Our inventory is frequently *not* updated. In some cases, arrays are "mutated" with updated inventories but are still identical, like [0,0] returns [0,0], even though in theory we mutated this by adding a 0 and popping off the final element.
Reflection: This tool is not robust, only adjusts inventory as limited array space allows. The company is going to miss a lot inventory updates.