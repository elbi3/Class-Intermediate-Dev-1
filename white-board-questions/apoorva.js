// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
let s1 = "()"
// Output: true
// Example 2:
let s2 = "()[]{}"
// Output: true
// Example 3:
let s3 = "(]"
// Output: false
// Example 4:
let s4 = "([])"
// Output: true
// Example 5
let s5 = "([)]"
// Output: false

// let pattern = "({})([])"
// Constraints:
// 1 <= s.length <= 104
// // s consists of parentheses only '()[]{}'.
// let sss = "()";

function parenthesesChecker(s){
    let stack = [];

    let answer;
    for (let i = 0; i < s.length; i++) {
        let item = s.at(i);

        console.log('item:', item);
        //check if item is an opening bracket, 
        //if yes push
        if((item === "(") || (item === "[") ||(item === "{")) {
            console.log("stack: ", stack);
            stack.push(item);
            console.log("stack: ", stack);
        } else {
            let peek = stack[0];
            console.log("peek: ", peek);
            if((item === ")") && (peek === "(")){
                //pop
                stack.pop()
                answer = true;
            } else if((item === "]") && (peek === "[")){
                //pop
                stack.pop()
                answer = true;
            } else if((item === "}") && (peek === "{")){
                //pop
                stack.pop()
                answer = true;
            } else {
                answer = false;
            }
        };
        console.log("answer: ", answer);
    }
    return answer;


    //push
    //pop
    //peek
    //isEmpty
};

parenthesesChecker(s1); //true
parenthesesChecker(s2); //true
parenthesesChecker(s3); //false
parenthesesChecker(s4); //true 
parenthesesChecker(s5); //false

// string = "{}()"
// s = 0  item = {
// stack = {
// s = 1 item = }
// stack = ""
// s = 2 item = (
// Apoorva Mittal
// 4:30 PM
// "}"
