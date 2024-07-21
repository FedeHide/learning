### Exceptions
# Exceptions are errors that are detected during execution. They are not unconditionally fatal, and can be handled by the program.
# Exceptions are raised when the program encounters an error during its execution. They can be handled by the program, and can be used to prevent the program from crashing.

# The try block is used to test a block of code for errors.
# The except block is used to handle the error.
# The else block is used to execute code if no errors are raised.
# The finally block is used to execute code, regardless of the result of the try and except blocks.

# Syntax:
# try:
#     # run this code
# except:  --> may or may not have a condition
#     # run this code when there is an exception
# else:
#     # no exception? run this code
# finally:
#     # always run this code



# Example:
x = 10
y = 5
x = "10"

try:
    print(x + y) 
except:
    print("An exception occurred")

# Output:
# An exception occurred


# Example 2:
try:
    print(x + y)
except TypeError: # TypeError is the type of exception that will be caught 
    print("An exception occurred")
except NameError: # NameError is the type of exception that will be caught
    print("Name Error occurred")
except:
    print("Some other error occurred")

# typeError and NameError are the types of exceptions that will be caught and the difference between the two is that the NameError is not raised in the code

# Output:
# An exception occurred


# Example 3:
try:
    print(x + y)
    print("No exception occurred")
except:
    print("An exception occurred")
else:
    print("The code continued to run")
    # this else block will run if there is no exception
finally:
    print("The code has finished running")
    # this finally block will always run
