#### print()
# The print() function prints the specified message to the screen, or other standard output device.
print(f"print(): python!")  # python!

#### type()
# The type() function returns the type of the specified object.
x = 5
print(f"type(): {type(x)}")  # <class 'int'>

#### len()
# The len() function returns the number of items in an object.
my_list = [1, 2, 3, 4, 5]
print(f"len(): {len(my_list)}")  # 5

#### str()
# The str() function returns a string representation of the specified object.
x = 5
print(f"str(): {str(x)}, type: {type(str(x))}")  # 5

#### int()
# The int() function returns an integer object constructed from a number or string x, or return 0 if no arguments are given.
y = 5.5
print(f"int(): {int(y)}, type: {type(int(y))}")  # 5

#### float()
# The float() function returns a floating-point object constructed from a number or string x.
z = 5.5
print(f"float(): {float(z)}, type: {type(float(z))}")  # 5.5

#### bool()
# The bool() function returns a boolean value.
a = 5
print(f"bool(): {bool(a)}, type: {type(bool(a))}")  # True

#### input()
# The input() function reads a line from input, converts it to a string (stripping a trailing newline), and returns that.
name = input("Enter your name: ")
print(f"input(): {name}")  # input(): python
