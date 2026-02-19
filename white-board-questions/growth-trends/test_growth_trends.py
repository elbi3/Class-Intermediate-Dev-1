import unittest
from growth_trends import formatGrowthPercentages

class TestGrowthTrends(unittest.TestCase):

    def test_function_once(self):
        input1 = [-5, -2, 0, 3, 10]
        expected =  [0, 4, 9, 25, 100]
        actual = formatGrowthPercentages(input1)
        print('actual: ', actual, 'expected: ', expected)

        self.assertEqual(actual, expected)
    # squaredResult = [25, 4, 0, 9, 100]

    def test_function_twice(self):
        input2 = [-8, -3, 2, 4, 12]
        expected = [4, 9, 16, 64, 144]
        actual = formatGrowthPercentages(input2)
        print('actual: ', actual, 'expected: ', expected)
    
        self.assertEqual(actual, expected)

    def test_function_3(self):
        input3 = [2]
        expected = [4]
        actual = formatGrowthPercentages(input3)
        print('actual: ', actual, 'expected: ', expected)
    
        self.assertEqual(actual, expected)

    def test_function_4(self):
        input4 = [-8, -3, -3, 2, 2, 4, 12]
        expected = [4, 4, 9, 9, 16, 64, 144]
        actual = formatGrowthPercentages(input4)
        print('actual: ', actual, 'expected: ', expected)

        self.assertEqual(actual, expected)

    def test_function_5(self):
        input5 = [-8, -3, 0, 0, 0, 4, 12]
        expected = [0, 0, 0, 9, 16, 64, 144]
        actual = formatGrowthPercentages(input5)
        print('actual: ', actual, 'expected: ', expected)

        self.assertEqual(actual, expected)

    def test_function_6(self):
        input6 = [3, 3, 3, 3]
        expected = [9, 9, 9, 9]
        actual = formatGrowthPercentages(input6)
        print('actual: ', actual, 'expected: ', expected)

        self.assertEqual(actual, expected)

    def test_function_7(self):
        input7 = []
        expected = []
        actual = formatGrowthPercentages(input7)
        print('actual: ', actual, 'expected: ', expected)

        self.assertEqual(actual, expected)

    def test_function_8(self):
        input8 =[-4,-3,-2]
        expected = [4, 9, 16]
        actual = formatGrowthPercentages(input8)
        print('actual: ', actual, 'expected: ', expected)

        self.assertEqual(actual, expected)

if __name__ == "__main__":
    unittest.main()