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

sum_var, difference_var = add_subtract(5, 3)
print(sum_var)  # Output: 8
print(difference_var)  # Output: 2


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


## keyword arguments:
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")


print_info(name="Ruko", surname="ElPurro", age=30)
# Output:
# name: Ruko
# surname: ElPurro
# age: 30


## Generators: are a special type of function that can be paused and resumed.
# They use the yield keyword to return a value and pause the function's execution.
# When the generator is called again, it resumes from where it left off.
def count_up_to(max):
    count = 1
    while count <= max:
        yield count  # Yield the current count
        count += 1


# Using the generator
for number in count_up_to(5):
    print(number)  # Output: 1, 2, 3, 4, 5
