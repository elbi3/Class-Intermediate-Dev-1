import unittest
from merge_customer_data import mergeCustomers

# to run, enter `python -m unittest`
class TestCalculations(unittest.TestCase):

    def test_1(self):
        customerData1 = [101,104,107,0,0,0]
        customerData2 = [102,105,108]
        m = 3
        n = 3
        self.assertEqual(mergeCustomers(customerData1, customerData2, m, n), [101,102,104,105,107,108])

    def test_2(self):
        customerData1 = [103]
        customerData2 = []
        m = 1
        n = 0
        self.assertEqual(mergeCustomers(customerData1, customerData2, m, n), [103])

    def test_3(self):
        cd1 = [0,0,0]
        cd2 = [0]
        m = 2
        n = 1
        self.assertEqual(mergeCustomers(cd1, cd2, m, n), [0,0,0,0]) # how are we handling an array of 0s?

# two empty arrays?
# duplicate ids?

