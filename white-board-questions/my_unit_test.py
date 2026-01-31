import unittest
from default_file import some_function

class TestSomeFunction(unittest.TestCase):
    def test_something(self):
        self.assertEqual(some_function(), 2)
# test method names must start with test_
# self = the current test case object
# assertEqual is a method *on* that object
    print("pass!")

    def test_something_else(self):
        self.assertIsNot(some_function(), 3)

if __name__ == "__main__":
    unittest.main()

# unittest.main() is what actually runs the tests
# “self refers to the current instance of the class and lets methods access data and other methods on that object.”
# double understore -> "dunder" 
# “Only run this code if this file is executed directly.” 
# Running the file → tests run
# Importing the file → tests do NOT run
# “__name__ is a special variable Python sets to tell whether a file is being run directly or imported.”
#class TestAdd → a test object
#self → the current test instance
#assertEqual → a method on that instance
#__name__ check → only run tests when appropriate
#If you blank in an interview, remember:
#self = “this object”
#_ = “ignore this”
#__name__ == "__main__" = “run this file directly”