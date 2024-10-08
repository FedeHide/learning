### Name Conventions in Python
# 1. Variable names are case-sensitive.
# 2. Variable names must start with a letter or an underscore.


## variables convention is to use snake_case
# Example:
my_int_variable = 5
my_float_variable = 5.5
my_str_variable = "Hello, World!"
my_bool_variable = True
my_list_variable = [1, 2, 3, 4, 5]
my_tuple_variable = (1, 2, 3, 4, 5)
my_set_variable = {1, 2, 3, 4, 5}
my_dict_variable = {"name": "John", "age": 30}


## class names convention is to use PascalCase
# Example:
class MyDog:
    # Class Attribute
    species = "Canis familiaris"

    ## method names convention is to use snake_case
    # Example:
    # Initializer / Instance Attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # instance method in snake_case
    def description(self):
        return "{} is {} years old".format(self.name, self.age)


## constants convention is to use UPPERCASE
# Example:
PI = 3.14
GRAVITY = 9.8


## module names convention is to use snake_case
# Example:
# 1. Create a module named my_module.py
# 2. Create a function named greeting
# 3. Add the following code to the my_module.py file:
def greeting(name):
    return "Hello, " + name


# 4. Import the module and use the greeting function:
# import my_module
# print(my_module.greeting("John")) # Hello, John


## function names convention is to use snake_case
# Example:
def greeting(name):
    return "Hello, " + name


## package names convention is to use snake_case
# Example:
# 1. Create a package named my_package
# 2. Create a module named my_module.py
# 3. Create a function named greeting
# 4. Add the following code to the my_module.py file:
def greeting(name):
    return "Hello, " + name


# 5. Import the module and use the greeting function:
# from my_package import my_module
# print(my_module.greeting("John")) # Hello, John
