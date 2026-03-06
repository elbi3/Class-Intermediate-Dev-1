class TextOperation:
    def __init__(self):
        self.output = ""
        self.stack = []

    def print_stack(self):
        print("stack output: ", self.stack)

    def print_output(self):
        print("text output: ", self.output)

    def implement_stack(self, action, item):
        stack_item = {"action": action, "element": item}
        self.stack.append(stack_item)

    def add_text(self, ch):
        self.output += ch
        self.implement_stack("add", ch)
        self.print_output()
    
    def remove_text(self):
        if(len(self.output) >= 1):
            ch = self.output[-1]
        else:
            return

        self.output = self.output[:-1]
        self.implement_stack("remove", ch)
        self.print_output()
    
    def undo_action(self):
        peek = self.stack[-1] 
        print("peek['action']: ", peek["action"], "element: ", peek["element"])
        self.stack.pop()
        if peek["action"] == "remove":
            ch = peek["element"]
            self.output += ch
            self.print_output()
        elif peek["action"] == "add":
            ch = peek["element"]
            self.output = self.output[:-1]
            self.print_output()
        else:
            pass   

