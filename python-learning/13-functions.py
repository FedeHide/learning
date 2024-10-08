### Functions
# Functions are a way to group code that belongs together. They are defined using the def keyword.
# Functions can take arguments, which are values you can pass to the function.
# Functions can return a value, which is the result of the function.


# Define a function that takes two arguments and returns their sum.
def add(a, b):
    return a + b


# Call the function with two arguments and print the result.
result = add(3, 5)
print(result)  # Output: 8


## other example:
# Define a function that takes a string and returns the length of the string.
def length(s):
    return len(s)


# Call the function with a string and print the result.
result = length("hello")
print(result)  # Output: 5


## other example:
def print_name(name, surname):
    print(f"Hello, {name} {surname}!")


print_name(surname="ElPurro", name="Ruko")  # Output: Hello, Ruko ElPurro!


## default arguments:
def print_name(name, surname="ElPurro"):
    print(f"Hello, {name} {surname}!")


print_name("Ruko")  # Output: Hello, Ruko ElPurro!
print_name("Ruko", "elGato")  # Output: Hello, Ruko elGato! (surname is overwritten)


## multiple return values:
def add_subtract(a, b):
    return a + b, a - b


result = add_subtract(5, 3)
print(result)  # Output: (8, 2)

sum, difference = add_subtract(5, 3)
print(sum)  # Output: 8
print(difference)  # Output: 2


## variable number of arguments:
def add(*args):
    return sum(args)


result = add(1, 2, 3, 4, 5)
print(result)  # Output: 15


# other example:


def print_upper_texts(*texts):
    for text in texts:
        print(text.upper())


print_upper_texts("Hello", "World", "Python")  # Output: HELLO, WORLD, PYTHON
