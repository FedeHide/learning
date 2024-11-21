### Modules
# A module is a file containing Python definitions and statements.
# The file name is the module name with the suffix .py appended.
# Within a module, the module’s name (as a string) is available as the value of the global variable __name__.
# A module can contain executable statements as well as function definitions.

import my_module  # import module
from modules.my_module2 import (
    calculate_factorial,
    calculate_fibo,
)  # import function from module

result1 = my_module.calculate_power(50, 10)
print(result1)  # 97656250000000000

result2 = calculate_factorial(10)
print(result2)  # 3628800

result3 = calculate_fibo(10)
print(result3)  # 55


###* there are many built-in modules in python
import math  # math module provides mathematical functions

result4 = math.sqrt(16)
print(result4)  # 4.0

result5 = math.factorial(5)
print(result5)  # 120

result6 = math.pi
print(result6)  # 3.141592653589793

result7 = math.pow(2, 3)
print(result7)  # 8.0


import random  # random module provides random number generator

result8 = random.randint(1, 10)
print(result8)  # random number between 1 and 10


from math import (
    pi as PI_VALUE,
)  # import specific function from module and give it an alias

result9 = PI_VALUE
print(result9)  # 3.141592653589793
