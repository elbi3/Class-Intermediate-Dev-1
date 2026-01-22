import unittest
from default_file import some_function

# to run, enter `python -m unittest`
class TestCalculations(unittest.TestCase):
    def test_1(self):
        # code
        self.assertEqual(some_function(), 2, "The sum is 2") #passes

    def test_2(self):
        self.assertEqual(some_function(), 3, "The sum is 2") #fails
        