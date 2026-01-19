// Objective: refactor JavaScript code by replacing var declarations with const or let for readability and reliability.

function checkAccess(loggedIn) {
    let accessLevel; //This is declared but unassigned - keep it as `let` to allow for future assignment
    //if we use `const` we receive the error "Missing initializer in const declaration"
    let userRole; //same as above, use `let` not `const`
    //note: declared but unassigned variables are usually an anti-pattern (just my opinion). 
    // I would refactor this code to have a default variable assignment for message and role. Only higher privileges require variable reassignment.

    if (loggedIn) {
        const message = "User is logged in.";//same as above. Also, why isn't "message" declared at the top of the function?
        // Using `const` here^ is fine, and does not prevent reassignment in the `else` block. 
        // But why reuse this variable? Why not simply have two variables like "loggedInMsg" & "defaultMsg"? Simpler, more readable
        console.log(message);
        if (userRole === "admin") {// how are we getting a value for userRole? Is it always `undefined` in this program?
            accessLevel = "full";// Whoever wrote this program wants to use Classes and OOP so badly. 
        } else {
            accessLevel = "limited";
        }
    } else {
        const message = "User not logged in."; //while it's fine to use `const` here, it seems so unreadable to handle "message" this way in the code. Again I think this should be split into two variabes or the code should indicate in some way that "message" is handling multiple values in the control flow statement.
        console.log(message);
        accessLevel = "none";
    }
    return accessLevel;
}

for (let i = 0; i < 3; i++) { //always use `let` in for loop header statements so that the iteration process can happen
    console.log("Attempt", i);
    const loggedIn = Math.random() >= 0.5;//okay to use `const` because this is redeclared on every loop.
    checkAccess(loggedIn);
    console.log("Access Level:", checkAccess(loggedIn));
}



