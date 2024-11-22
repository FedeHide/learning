### higher order functions
# A function that takes another function as an argument
# or returns a function as a result is called a higher order function.

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

squared = map(lambda x: x**2, numbers)
print(list(squared))  # [1, 4, 9, 16, 25]

# filter
# filter creates a list of elements for which a function returns true.

even = filter(lambda x: x % 2 == 0, numbers)
print(list(even))  # [2, 4]

# reduce
# reduce is used to apply a function to all the elements in the list.

from functools import reduce

sum = reduce(lambda x, y: x + y, numbers)
print(sum)  # 15
