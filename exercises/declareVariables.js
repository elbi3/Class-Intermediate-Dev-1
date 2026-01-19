//Assignment: Replace `var` with `const` or `let` & explain

let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);
//Since we want to be able to declare and then reassign "fullName", we use `let`. If `const` is used, we get error "TypeError: Assignment to constant variable."

let age = 30;
if (age > 18) {
    let adult = true;
    console.log(adult);
}
//Using either let or const will not break this code, however extending the control flow statement could generate potential issues. In order to be able to reuse "adult", and to assign it the boolean `false`, we need to declare "adult" with `let`. While we *could* use `const` to declare "age", it does not make much sense since we are *checking* the age value- this variable is likely to change as well. Better to use `let`. It's pretty situational.

const loopArray = [];
for (let i = 0; i < 5; i++) {
    loopArray.push(i);
}
console.log(loopArray);
//We are mutating this array, however its declaration assignment is not changing, so use `const`. Within the loop header of the for loop control statement, use `let` since we will be reassigning the index number on every loop.

let MAXIMUM = 100;
MAXIMUM = 200;
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);
//Use `let` when reassigning declared variables. Use of `const` will prevent this reassignment.
 

