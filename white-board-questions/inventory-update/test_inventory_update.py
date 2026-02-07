import unittest
from inventory_update import inventoryUpdate
#self.assertEqual(actual.tolist(), expected.tolist())
class TestCalculations(unittest.TestCase):

    def test_inventoryUpdate1(self):
        arr1 = [4,0,1,3,0,2,5,0]
        actual = inventoryUpdate(arr1) 
        expected = [4,0,0,1,3,0,0,2]
        self.assertEqual(actual, expected, msg=f"Test 1: {actual} matches {expected}!")

    def test_inventoryUpdate2(self):
        arr2 = [3,2,1]
        self.assertEqual(inventoryUpdate(arr2), [3,2,1],  f"{arr2} It matches!")

    def test_inventoryUpdate3(self):
        arr3 = [3,0]
        self.assertEqual(inventoryUpdate(arr3), [3,0],  f"{arr3} It matches!")
# This^ seems like an edge case but also "normal". Demos the function is not thoughtful
    def test_inventoryUpdate4(self):
        arr4 = [0,0]
        self.assertEqual(inventoryUpdate(arr4), [0,0],  f"{arr4} It matches!")

    def test_inventoryUpdate5(self):
        arr5 = [0]
        self.assertEqual(inventoryUpdate(arr5), [0],  f"{arr5} It matches!")

    def test_inventoryUpdate6(self):
        arr6 = []
        self.assertEqual(inventoryUpdate(arr6), [], f"{arr6} It matches!")

if __name__ == "__main__":
    unittest.main()