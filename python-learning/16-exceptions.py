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
    print("Example 1:", x + y) 
except:
    print("Example 1: An exception occurred")

# Output:
# An exception occurred


# Example 2:
try:
    print(x + y)
except TypeError: # TypeError is the type of exception that will be caught 
    print("Example 2: An exception occurred")
except NameError: # NameError is the type of exception that will be caught
    print("Example 2: Name Error occurred")
except:
    print("Example 2: Some other error occurred")

# typeError and NameError are the types of exceptions that will be caught and the difference between the two is that the NameError is not raised in the code

# Output:
# An exception occurred


# Example 3:
try:
    print(x + y)
    print("Example 3: No exception occurred")
except:
    print("Example 3: An exception occurred")
else: # optional
    print("Example 3: The code continued to run")
    # this else block will run if there is no exception
finally: # optional
    print("Example 3: The code has finished running")
    # this finally block will always run


### Except errors list:
# ArithmeticError - Base class for math-related errors.
# AssertionError - Raised when an assert statement fails.
# AttributeError - Raised when an attribute reference or assignment fails.
# BaseException - Base class for all exceptions.
# BlockingIOError - Raised when a blocking operation is interrupted.
# BrokenPipeError - Raised when a pipe is broken.
# BufferError - Raised when a buffer related operation cannot be performed.
# BytesWarning - Raised for warnings related to bytes and bytearray.
# ChildProcessError - Raised when a child process fails.
# ConnectionAbortedError - Raised when a connection is aborted.
# ConnectionError - Raised for connection-related issues.
# ConnectionRefusedError - Raised when a connection is refused.
# ConnectionResetError - Raised when a connection is reset.
# DeprecationWarning - Raised for deprecated features.
# EnvironmentError - Base class for errors that come from the outside environment (deprecated in Python 3).
# EOFError - Raised when the input() function hits the end-of-file condition.
# Exception - Base class for all built-in exceptions except for system-exiting ones.
# FileExistsError - Raised when trying to create a file or directory that already exists.
# FileNotFoundError - Raised when a file or directory is requested but not found.
# FloatingPointError - Raised when a floating point operation fails.
# FutureWarning - Raised for warnings about constructs that will change in the future.
# GeneratorExit - Raised when a generator's close() method is called.
# ImportError - Raised when an imported module is not found.
# ImportWarning - Raised for warnings related to import statements.
# IndentationError - Raised when there is incorrect indentation.
# IndexError - Raised when a sequence subscript is out of range.
# InterruptedError - Raised when a system call is interrupted.
# IOError - Raised when an I/O operation fails (deprecated in Python 3).
# IsADirectoryError - Raised when a file operation is requested on a directory.
# KeyboardInterrupt - Raised when the user interrupts program execution, usually by pressing Ctrl+C.
# KeyError - Raised when a dictionary key is not found.
# LookupError - Base class for errors raised when something can't be found.
# MemoryError - Raised when an operation runs out of memory.
# ModuleNotFoundError - Raised when a module could not be found.
# NameError - Raised when a variable is not found in local or global scope.
# NotADirectoryError - Raised when a directory operation is requested on a non-directory.
# NotImplementedError - Raised by abstract methods.
# OSError - Base class for operating system errors.
# OverflowError - Raised when the result of an arithmetic operation is too large.
# PendingDeprecationWarning - Raised for features which are soon-to-be deprecated.
# PermissionError - Raised when there is a permission issue.
# ProcessLookupError - Raised when a process is not found.
# RecursionError - Raised when the maximum recursion depth is exceeded.
# ReferenceError - Raised when a weak reference proxy is used to access a garbage collected referent.
# ResourceWarning - Raised for warnings about resource usage.
# RuntimeError - Raised when an error does not fall under any other category.
# RuntimeWarning - Raised for runtime-specific warnings.
# StopAsyncIteration - Raised by an asynchronous iterator's anext method to stop iteration.
# StopIteration - Raised by next() to signal that there are no further items.
# SyntaxError - Raised when the parser encounters a syntax error.
# SyntaxWarning - Raised for syntax-related warnings.
# SystemError - Raised when the interpreter detects an internal error.
# SystemExit - Raised by the sys.exit() function.
# TabError - Raised when indentation consists of inconsistent tabs and spaces.
# TimeoutError - Raised when a system function times out.
# TypeError - Raised when an operation or function is applied to an object of inappropriate type.
# UnboundLocalError - Raised when a local variable is referenced before assignment.
# UnicodeError - Raised when a Unicode-related encoding or decoding error occurs.
# UnicodeEncodeError - Raised when a Unicode-related error occurs during encoding.
# UnicodeDecodeError - Raised when a Unicode-related error occurs during decoding.
# UnicodeTranslateError - Raised when a Unicode-related error occurs during translation.
# UnicodeWarning - Raised for warnings related to Unicode.
# UserWarning - Raised for user-defined warnings.
# ValueError - Raised when a function receives an argument of the correct type but inappropriate value.
# Warning - Base class for warning-related exceptions.
# ZeroDivisionError - Raised when the second operand of a division or modulo operation is zero.


# Example 4:
try:
    print("Example 4:", x + y)
except TypeError as error:
    print("Example 4:", "An exception occurred ->", error)

# ValueError is the type of exception that will be caught and "as e" is used to store the exception in a variable called e
# that variable can be used to print the error message
