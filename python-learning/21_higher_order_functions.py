### higher order functions
# A function that takes another function as an argument or returns a function as a result is called a higher order function.

## * receiving a function as an argument


def apply_function(func, value1, value2):
    return func(value1 + value2)


# define a function that doubles the number
def square(x):
    return x * x


result = apply_function(square, 5, 2)
print(result)  # 49


# in the above example, apply_function is a higher order function that takes a function as an argument.


## * returning a function


def make_multiplier(factor):
    def multiply(number):
        return number * factor

    return multiply


# use the make_multiplier function to create a function that doubles the number
double_number = make_multiplier(2)
result = double_number(10)

print(result)  # 20

# in the above example, make_multiplier is a higher order function that returns a function.


## * using functions as arguments with map, filter, and reduce

numbers = [1, 2, 3, 4, 5]

# map
# map applies a function to all the items in an input_list.
# map(function, iterable)

squared = map(lambda x: x**2, numbers)
print(list(squared))  # [1, 4, 9, 16, 25]

# filter
# filter creates a list of elements for which a function returns true.
# filter(function, iterable)

even = filter(lambda x: x % 2 == 0, numbers)
print(list(even))  # [2, 4]

# reduce
# reduce is used to apply a function that takes two arguments to the elements of an iterable. It returns a single value.
# The function is called with the first two elements from the iterable, then with the result and the next element, and so on.
# reduce(function, iterable[, initializer])

from functools import reduce

sum_numbers = reduce(lambda x, y: x + y, numbers)
print(sum_numbers)  # 15


## * closures
# A closure is a nested function that captures the environment in which it was defined.
# The closure 'remembers' the environment in which it was created.
# This means that the closure can access variables from the outer function even after the outer function has finished executing.


def outer_function():
    message = "Hello"

    def inner_function():
        print(message)

    return inner_function


my_func = outer_function()
my_func()  # Hello

# in the above example, the inner_function is a closure that captures the message variable from the outer_function.


# example 2


def make_multiplier(factor):
    def multiply(number):
        return number * factor

    return multiply


print(make_multiplier(2)(10))  # 20
print(make_multiplier(3)(10))  # 30

double_number = make_multiplier(2)
triple_number = make_multiplier(3)
print(double_number(10))  # 20
print(triple_number(10))  # 30

# in the above example, the multiply function is a closure that captures the factor variable from the make_multiplier function.


## * built-in higher order functions (like map, filter, reduce)

# sorted
# sorted is used to sort the elements of a list.
# sorted(iterable, key=None, reverse=False)

numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# max
# max returns the largest item in an iterable.
# max(iterable, *[, key, default])

max_number = max(numbers)
print(max_number)  # 9

# min
# min returns the smallest item in an iterable.
# min(iterable, *[, key, default])

min_number = min(numbers)
print(min_number)  # 1

# any
# any returns True if any element of an iterable is true.
# any(iterable)

print(any([False, False, True]))  # True

# all
# all returns True if all elements of an iterable are true.
# all(iterable)

print(all([True, True, True]))  # True

# enumerate
# enumerate adds a counter to an iterable and returns it.
# enumerate(iterable, start=0)

for index, value in enumerate(numbers):
    print(index, value)  # 0 3, 1 1, 2 4, 3 1, 4 5, 5 9, 6 2, 7 6, 8 5, 9 3, 10 5

# zip
# zip returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables.
# zip(*iterables)

letters = ["a", "b", "c"]
numbers2 = [1, 2, 3]
zipped = zip(letters, numbers2)
print(list(zipped))  # [('a', 1), ('b', 2), ('c', 3)]

# reversed
# reversed returns a reverse iterator.
# reversed(sequence)

reversed_numbers = reversed(numbers)
print(list(reversed_numbers))  # [5, 3, 5, 6, 2, 9, 5, 1, 4, 1, 3]

# sum
# sum adds the items of an iterable.
# sum(iterable, start=0)

total = sum(numbers)
print(total)  # 44

# len
# len returns the number of items in an object.
# len(s)

length = len(numbers)
print(length)  # 11


## * decorators
# A decorator is a function that takes another function as an argument and extends its behavior without modifying it.
# Decorators allow you to add functionality to an existing function without changing its structure.


def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")

    return wrapper


@my_decorator
def say_hello():
    print("Hello!")


say_hello()

# in the above example, the my_decorator function is a decorator that adds functionality to the say_hello function.


# example 2


def call_counter(func):
    count = 0  # initialize the counter

    def wrapper(*args, **kwargs):
        nonlocal count  # use the count variable from the outer function
        count += 1
        print(f"the function '{func.__name__}' has been called {count} times.")
        return func(*args, **kwargs)

    # ! *args and **kwargs are used to pass a variable number of arguments to the function.
    # ! *args is used to pass a variable number of non-keyword arguments to the function.
    # ! **kwargs is used to pass a variable number of keyword arguments to the function.

    # Add a method to reset the counter
    def reset_counter():
        nonlocal count
        count = 0
        print(f"the counter '{func.__name__}' has been reset.")

    # Assign the reset_counter method to the wrapper function
    wrapper.reset_counter = reset_counter

    return wrapper


@call_counter
def say_hello(name):
    print(f"Hello, {name}!")


# call the function multiple times
say_hello("Ruki")
say_hello("Ori")
say_hello.reset_counter()
say_hello("Nix")
say_hello("Anya")

# in the above example, the call_counter function is a decorator that counts the number of times a function is called.
