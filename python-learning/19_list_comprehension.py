### List comprehension
# List comprehension is a concise way to create lists.
# It consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses.
# The expressions can be anything, meaning you can put in all kinds of objects in lists.

# The result will be a new list resulting from evaluating the expression in the context of the for and if clauses which follow it.

# The list comprehension always returns a result list.

# Syntax:
# [expression for item in iterable if condition == True]

# Example:
# Create a list of squares of numbers from 0 to 9 using list comprehension
squares = [i**2 for i in range(10)]
print("sqaures: ", squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
new_list1 = [
    i for i in my_list if i % 2 == 0
]  # List comprehension to get even numbers from my_list
print("new_list: ", new_list1)  # Output: [2, 4, 6, 8, 10]

# List comprehension can be used to iterate over strings as well
my_string = "Hello, World!"
new_list2 = [
    i for i in my_string if i.isupper()
]  # List comprehension to get uppercase letters from my_string
print("new_list2: ", new_list2)  # Output: ['H', 'W']

# List comprehension can be used to iterate over dictionaries as well
my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
new_list3 = [k for k in my_dict.keys()]  # List comprehension to get keys from my_dict
print("new_list3: ", new_list3)  # Output: ['a', 'b', 'c', 'd']

new_list4 = [
    v for v in my_dict.values()
]  # List comprehension to get values from my_dict
print("new_list4: ", new_list4)  # Output: [1, 2, 3, 4]

new_list5 = [
    f"{k}: {v}" for k, v in my_dict.items()
]  # List comprehension to get key-value pairs from my_dict
print("new_list5: ", new_list5)  # Output: ['a: 1', 'b: 2', 'c: 3', 'd: 4']

# Nested list comprehension
# List comprehension can be nested inside another list comprehension
matrix1 = [[1, 2], [3, 4], [5, 6], [7, 8]]
flattened_matrix = [
    i for row in matrix1 for i in row
]  # List comprehension to flatten the matrix
print("flattened_matrix: ", flattened_matrix)  # Output: [1, 2, 3, 4, 5, 6, 7, 8]

# List comprehension can be used to create a list of lists
matrix2 = [
    [i for i in range(5)] for j in range(5)
]  # List comprehension to create a 5x5 matrix
print("matrix2: ", matrix2)
# Output: [[
# [0, 1, 2, 3, 4],
# [0, 1, 2, 3, 4],
# [0, 1, 2, 3, 4],
# [0, 1, 2, 3, 4],
# [0, 1, 2, 3, 4]
# ]


### other examples
list_example = [0, 1, 2, 3, 4, 5, 6, 7]
print([i for i in list_example])  # Output: [0, 1, 2, 3, 4, 5, 6, 7]

same_list = [[i for i in range(8)]]
print("same_list: ", same_list)  # Output: [[0, 1, 2, 3, 4, 5, 6, 7]]

same_list2 = range(8)
print("same_list2: ", list(same_list2))  # Output: [0, 1, 2, 3, 4, 5, 6, 7]


def sum_five(x):
    return x + 5


my_list_plus_five = [sum_five(i) for i in range(8)]
print("my_list_plus_five: ", my_list_plus_five)  # Output: [5, 6, 7, 8, 9, 10, 11, 12]
