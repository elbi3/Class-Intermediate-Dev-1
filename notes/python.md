# So what's idiosyncratic about Python?

```python
# variable assignment swap:
a, b = b, a
```

1. use `help()` to find out more about another function (pass the function name, don't call it)
```python
    help(round)
```
2. using built-in functions vs defining our own. functions start with a header using the `def` keyword. The indented block of code following the ":" is run when the function is called. Also uses `return` keyword (and exits function when that is called)
3. When Python encounters the `return` statement, it exits the function immediately and passes the return value to the calling context.
4. trailing commas in an arg list is okay
5. when you write a function you can also provide a description called a "docstring"
6. docstring is triple quoted string that comes immediately after the header of a function
7. there is a convention of including an example function call with ">>>"
8. if there is no `return` keyword in the function, python returns "none"
9. "sep" in a function call to add separation between items:
```python
print(1, 2, 3, sep=" <")
```
10. optional arguments with default value. how do we know it is optional?
11. functions that operate on other functions are called "higher-order functions"
12. `round` with an optional neg num as second arg adds zeroes to number in tens place: 1234, -2 -> 1200
13. to add an optional argument to a function header, assign a param to a default in the header
14. Python's boolean is "bool": `True` and `False`
```python
x = True
print(x)
print(type(x))
```
15. boolean operators:
```python
a == b
a < b
a > b
a != b
a >= b
a <=b
```
16. check if a number is odd:
```python
isOdd(num):
    return (num % 2) == 1
```
17. combine boolean values using and, or, not
```python
True or True and False
```
18. eww do people actually write like this
```python
prepared_for_weather = (
    have_umbrealla,
    or ((rain_level < 5) and have_hood)
    or (not (rain_level > 0 and is_workday))
)
```
19. "conditional statements" or "if-then" statements use if, elif, else
20. elif is a contraction of "else if". elif and else are optional
21. use colons and white space to separate blocks of code
22. indent is 4 spaces
23. some conversion functions: int(), float(), bool()
24. generally empty sequences are "falsey" and other stuff is "truthy"
25. you can use non-boolean objects in `if` conditions and places where booleans are evaluated. Python treates the other objects implicitly as their corresponding boolean value
26. `return and not a and not be and not c` can be return not(a or b or c)
27. calling `bool()` on an integer is False if 0 and True otherwise
28. boolean to integer conversion can make things simpler if it's just 0s and 1s
29. we don't need to use int() on arguments to get there, if we do addition on booleans Python implicitly does the integer conversion
30. lists in Python! represent ordered sequences of values
```python
primes = [ 2, 3, 5, 7]
## lists of lists
hands = [
    ["j", "q", "k"],
    ["2", "2", "2"],
    ["6", "a", "k"],
]
# one line is okay:
tables = [['a','b','c'],['c','e','f'],['2']]
# ok to mix values:
some = ["silly", 2, help]
```
31. python uses zero-based indexing like some[0]
32. access the end of a list with -1: planets[-1]
33. slicing: `planets[0:3]` start from 0, and up to but not including 3
34. you can leave out 0 and it will be assumed: `planets[:3]`
25. leave out the second number and it will be assumed as the full length
`planets[3:]`
26. all except first and last: `planets[1:-1]`
27. last 3: `planets[-3:]`
28. lists are mutable and can be modified in place
29. list functions: len(), sorted(), sum(), min(), max()
30. everything in Python is an object. can access with dot notation
31. a function attached to an object is called a method, non-function is attribute
32. access methods using dot notation
33. list methods: planets.append("pluto"), planets.pop(), planets.index("Earth") for search
34. determine if a list contains a value: "Earth" in planets
35. tuples use parens: t = (1,2,3) or t = 1, 2, 3
36. tuples cannot be modified (immutable)
37. tuples often used for functions that return multiple things
38. loops! 
```python
for planet in planets:
    #...
```
39. for "variable name to use" in "set of values to loop over"
40. use "in" to link them
41. you can also iterate over a tuple or over a string `for char in s`...
42. use range() in loops:
```python
for i in range(5):
    #do something
```
43. while loops
44. "list comprehensions" ?
45. newlist = [expression FOR item IN iterable IF condition == True]
46. the condition part is optional
47. the iterable for a list comprehension can be any iterable, like a list, tuple or set
48. you can use the range() function to create an iterable:
```python
newlist = [x for x in range(10)]
newlist2 = [x for x in range(10) if x < 5]
```
49. the "expression" is the current item in the iteration, but it is also the outcome, which you can manipulate before it ends up like a list item in the new list:
```python
newlist = [x.upper() for x in fruits]
```
50. the expression part can contain conditions as a way to manipulate the outcome (not a filter!):
```python
newlist = [x if x != "banana" else "orange" for x in fruits]
# return the item if it is not banana, if it is banana return orange
```

-w3 schools is less cringe-
python can be used in a procedural OOP or functional way
runs on an interpreter system
python uses new lines to complete a command (as opposed to semicolons or parentheses)
relies on indentation and whitespace to define scope (as opposed to curly brackets)
python has no command for declaring a variable
a computer program is a list of instructions to be executed by a computer
in python statements are executed one by one, in order
you can write multiple statements on one line using semicolons, but not best practice
