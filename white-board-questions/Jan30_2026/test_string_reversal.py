import unittest
from string_reversal import stringReversal

class  TestStringReversal(unittest.TestCase):

# base case: "a" if input and output are identical, what does that mean for us?
    def test_reversal(self):
        self.assertEqual(stringReversal("a"), "a")

    def test_reversal(self):
        self.assertEqual(stringReversal("car"), "rac")
    
    def test_reversal(self):
        self.assertEqual(stringReversal("carcarcarcar"), "racracracrac")
        
# "a bc"   spaces? (keep in case we are reversing sentences)
    def test_reversal(self):
        self.assertEqual(stringReversal("a bc"), "cb a")

# "1 23bs" numbers? (pretend numbers are letters)
    def test_reversal(self):
        self.assertEqual(stringReversal("1 23bs"), "sb32 1")
    
# "abcba"  palidnrome?
    def test_reversal(self):
        self.assertEqual(stringReversal("abcba"), "abcba")

# edge case: ""
    def test_reversal(self):
        self.assertEqual(stringReversal(""), "")

# edge case: " "
    def test_reversal(self):
        self.assertEqual(stringReversal(" "), " ")

if __name__ == "__main__":
    unittest.main()