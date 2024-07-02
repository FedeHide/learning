#### Strings

# Creating Strings
my_string = "python"

# Multiline Strings
my_string = """Hello
World"""

# \n is used to create a new line
my_string = "Hello\nWorld"

# escape characters
# \'   # Single Quote
# \"   # Double Quote
# \\   # Backslash
# \n   # New Line
# \r   # Carriage Return
# \t   # Tab
# \b   # Backspace
# \f   # Form Feed
# \ooo # Octal value
# \xhh # Hex value


#### String Formatting  (Old Style) 
# %s   # String
# %d   # Integer
# %f   # Float
# %o   # Octal
# %x   # Hexadecimal
# %e   # Exponential
# %c   # Character
# %r   # Repr
# %g   # General
name = "John"
age = 25
print("My name is %s and I am %d years old" % (name, age))


#### String Formatting  (New Style)
# {}   # Placeholder
name = "John"
age = 25
print("My name is {} and I am {} years old".format(name, age))


#### unpacking characters
name = "John"
a, b, c, d = name
print(a) # J
print(b) # o
print(c) # h
print(d) # n

#### Indexing
# Syntax: [index]
print(my_string[0]) # p

#### Slicing
# Syntax: [start:stop:step]
print(my_string[1:]) # ython   
print(my_string[:3]) # pyt
print(my_string[1:4]) # yth
print(my_string[::2]) # pto

# Negative Indexing
print(my_string[-1]) # n

# Reverse a string
print(my_string[::-1]) # nohtyp


#### Concatenation
# Syntax: string1 + string2
string1 = "Hello"
string2 = "World"
print(string1 + " " + string2) # Hello World

#### Multiplication
# Syntax: string * number
print(string1 * 3) # HelloHelloHello

#### String Properties
# Strings are immutable
# Syntax: string[index] = "new value"
# This will throw an error

#### String Methods
# upper()   # Converts a string into upper case
print(my_string.upper()) # PYTHON

# lower()   # Converts a string into lower case
print(my_string.lower()) # python

# split()   # Splits the string at the specified separator, and returns a list
my_string = "Hello World"
print(my_string.split()) # ['Hello', 'World']

# find()    # Searches the string for a specified value and returns the position of where it was found
print(my_string.find('o')) # 4

# replace() # Replaces a string with another string
print(my_string.replace('World', 'Universe')) # Hello Universe

# count()   # Returns the number of times a specified value occurs in a string
print(my_string.count('o')) # 2

# capitalize()  # Converts the first character to upper case
print(my_string.capitalize()) # Hello world

# endswith()    # Returns True if the string ends with the specified value
print(my_string.endswith('World')) # True

# startswith()  # Returns True if the string starts with the specified value
print(my_string.startswith('Hello')) # True

# isalnum() # Returns True if all characters in the string are alphanumeric
print(my_string.isalnum()) # False

# isalpha() # Returns True if all characters in the string are alphabetic
print(my_string.isalpha()) # False

# islower() # Returns True if all characters in the string are lower case
print(my_string.islower()) # False

# isupper()  # Returns True if all characters in the string are upper case
print(my_string.isupper()) # False

# isspace()   # Returns True if the string only contains whitespace
print(my_string.isspace()) # False

# istitle()   # Returns True if the string follows the rules of a title
print(my_string.istitle()) # True

# join()    # Joins the elements of an iterable to the end of the string
my_list = ['Hello', 'World']
print(' '.join(my_list)) # Hello World

# swapcase()    # Swaps the case of the string
print(my_string.swapcase()) # hELLO wORLD

# title()   # Capitalizes the first letter of each word
print(my_string.title()) # Hello World

# zfill()   # Adds zeros to the left of the string
print(my_string.zfill(20)) # 000000000Hello World

# strip()   # Removes any leading (spaces at the beginning) and trailing (spaces at the end) characters
my_string = "    Hello World    "
print(my_string.strip()) # Hello World

# lstrip()  # Removes any leading (spaces at the beginning) characters
print(my_string.lstrip()) # Hello World

# rstrip()  # Removes any trailing (spaces at the end) characters
print(my_string.rstrip()) #     Hello World

# rjust()   # Returns a right justified version of the string
print(my_string.rjust(20)) #         Hello World

# ljust()   # Returns a left justified version of the string
print(my_string.ljust(20)) # Hello World

# center()  # Returns a centered string
print(my_string.center(20)) #    Hello World

# encode()  # Returns an encoded version of the string
print(my_string.encode()) # b'    Hello World    '

# expandtabs()   # Sets the tab size of the string
my_string = "Hello\tWorld"
print(my_string.expandtabs(2)) # Hello World

# format()  # Formats specified values in a string
print("Hello, my name is {}".format("John")) # Hello, my name is John

# format_map()   # Formats specified values in a string
my_dict = {'name': 'John'}
print("Hello, my name is {name}".format_map(my_dict)) # Hello, my name is John

# isascii() # Returns True if all characters in the string are ASCII characters
print(my_string.isascii()) # True

# isdecimal()   # Returns True if all characters in the string are decimals
print(my_string.isdecimal()) # False

# isdigit() # Returns True if all characters in the string are digits
print(my_string.isdigit()) # False

# isidentifier()    # Returns True if the string is an identifier
print(my_string.isidentifier()) # False

# isnumeric()   # Returns True if all characters in the string are numeric
print(my_string.isnumeric()) # False

# isprintable() # Returns True if all characters in the string are printable
print(my_string.isprintable()) # True

# translate()   # Returns a translated string
print(my_string.translate(my_string)) # Hello World

