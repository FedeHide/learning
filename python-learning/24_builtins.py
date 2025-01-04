### builtins
# The builtins module contains a list of built-in functions, exceptions, and other objects.
# The builtins module is automatically imported when Python starts up.

import builtins
import sys

builtins_list = sys.builtin_module_names  # list of built-in modules
print(builtins_list)

## ! TIP: standard library modules can be find in sys.prefix/Lib directory


# list all built-in functions
print(dir(builtins))
print(dir(str))


# ? Popular Built-in Functions in Python


## * 1. Data Manipulation Functions
len()  # Returns the length of an object.
max(), min()  # Returns the maximum or minimum value of an iterable.
sum()  # Calculates the sum of the elements in an iterable.
sorted()  # Returns a sorted list from an iterable.
reversed()  # Returns an iterator with the elements in reverse order.
round()  # Rounds a number to a specified number of decimals.


## * 2. Conversion Functions
int(), float(), str()  # Converts between basic data types.
list(), tuple(), dict(), set()  # Converts to specific collection types.
ord(), chr()  # Converts characters to Unicode values and vice versa.
bool()  # Converts a value to its boolean representation (True or False).
hex(), bin()  # Converts numbers to hexadecimal or binary representations.


## * 3. Iteration Functions
range()  # Creates a range of numbers.
enumerate()  # Returns an enumerator that adds indices to an iterable.
zip()  # Combines multiple iterables into one iterable of tuples.
map()  # Applies a function to each element in an iterable.
filter()  # Filters elements of an iterable based on a function.
any(), all()  # Checks if at least one or all elements in an iterable satisfy a condition.


## * 4. Input/Output Functions
print()  # Prints data to the console.
input()  # Reads input data from the console.
open()  # Opens a file and returns a file object.


## * 5. Object Inspection Functions
type()  # Returns the type of an object.
id()  # Returns the unique identifier of an object.
dir()  # Returns a list of attributes and methods of an object.
isinstance()  # Checks if an object is an instance of a specific type.
hasattr()  # Checks if an object has a specific attribute.
getattr(), setattr()  # Gets or sets the value of an object's attribute.


## * 6. Mathematical Functions
abs()  # Returns the absolute value of a number.
pow()  # Calculates the power of a number (base ** exponent).
divmod()  # Returns the quotient and remainder of a division.


## * 7. String Handling Functions
str()  # Converts an object to its string representation.
format()  # Returns a formatted string.
repr()  # Returns a readable representation of an object, useful for debugging.


## * 8. Advanced Functions
exec()  # Executes Python code from a string or code object.
eval()  # Evaluates a Python expression from a string.
staticmethod(), classmethod()  # Decorators to define static or class methods within a class.
help()  # Invokes the built-in help system.
