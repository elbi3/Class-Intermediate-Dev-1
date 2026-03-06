from text_operation import  TextOperation 
import unittest

class TestTextOperations(unittest.TestCase):

    def test_add_method(self):
        te = TextOperation()
        te.add_text("a")
        te.add_text("s")
        te.add_text("d")
        te.add_text("f")
        self.assertEqual(te.output, "asdf")

    def test_remove_method(self):
        te = TextOperation()
        te.output = "asdf"
        te.remove_text()
        self.assertEqual(te.output, "asd")
        te.remove_text()
        self.assertEqual(te.output, "as")
        te.remove_text()
        self.assertEqual(te.output, "a")

# edge case: there's nothing to remove
    def test_undo_method(self):
        my_stack = [{'action': 'add', 'element': 'a'}, 
                    {'action': 'add', 'element': 's'}, 
                    {'action': 'add', 'element': 'd'}, 
                    {'action': 'add', 'element': 'f'}, 
                    {'action': 'remove', 'element': 'f'}, 
                    {'action': 'add', 'element': 'g'}, 
                    {'action': 'remove', 'element': 'g'}, 
                    {'action': 'add', 'element': 'h'}]

        te = TextOperation()
        te.add_text("a")
        te.add_text("s")
        te.add_text("d")
        te.add_text("f")
        te.remove_text()
        te.add_text("g")
        te.remove_text()
        te.add_text("h") 

        self.assertEqual(my_stack[0], {'action': 'add', 'element': 'a'})  
        # I added a few more asserts to actually test items getting popped off the stack:  
        te.print_stack()  
        print(te.stack[-1])    
        self.assertEqual(my_stack[-1], te.stack[-1])
        te.undo_action()
        self.assertEqual(my_stack[-2], te.stack[-1])
        te.undo_action()
        self.assertEqual(my_stack[-3], te.stack[-1])

if __name__ == "__main__":
    unittest.main()