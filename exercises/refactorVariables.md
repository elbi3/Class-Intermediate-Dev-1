# README (refactor variables)

I would rewrite this entirely. Its brevity does not contribute to simplicity or readability in any way.

The use of `var` means that the following four variables "loggedIn", "accessLevel", "userRole", "message" are accessible to the entire file.
Adding any more functions to this file will increase complexity and probably break the existing code.

This is a good candidate for OOP. When you have a bunch of declared variables at the top of a function, they may as well be keys. These variables are not in and out of multiple code blocks and it is not handled elegantly. 

What is going on with "loggedIn"? It is not declared anywhere and yet there is code logic for `!loggedIn`. I am also not sure how we are getting our "admin" variable assignment. Since some of the code functionality is missing, it is only possible to give a limited analysis.

