#### variables
# name variables in python are case-sensitive and must start with a letter or an underscore. 
# The convention is to use snake_case for naming variables.

my_int_variable = 5
my_float_variable = 5.5
my_str_variable = "Hello, World!"
my_bool_variable = True
my_list_variable = [1, 2, 3, 4, 5]
my_tuple_variable = (1, 2, 3, 4, 5)
my_set_variable = {1, 2, 3, 4, 5}
my_dict_variable = {"name": "John", "age": 30}

print(my_dict_variable, my_set_variable) # {'name': 'John', 'age': 30} {1, 2, 3, 4, 5}
print(f"my_int_variable: {my_int_variable}, type: {type(my_int_variable)}") # my_int_variable: 5, type: <class 'int'>

#### One line multiple assignment
a, b, c = 5, 5.5, "Hello, World!"
print(f"a: {a}, b: {b}, c: {c}") # a: 5, b: 5.5, c: Hello, World!

#### Constants
# Constants are usually declared and assigned on a module.
PI = 3.14
GRAVITY = 9.8
print(f"PI: {PI}, GRAVITY: {GRAVITY}") # PI: 3.14, GRAVITY: 9.8




