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
else: # optional
    print("The code continued to run")
    # this else block will run if there is no exception
finally: # optional
    print("The code has finished running")
    # this finally block will always run


### except errors list:
# BaseException - Base class for all exceptions.
# Exception - Base class for all built-in exceptions except for system-exiting ones.
# ArithmeticError - Base class for math-related errors.
# BufferError - Raised when a buffer related operation cannot be performed.
# LookupError - Base class for errors raised when something can't be found.
# AssertionError - Raised when an assert statement fails.
# AttributeError - Raised when an attribute reference or assignment fails.
# EOFError - Raised when the input() function hits the end-of-file condition.
# FloatingPointError - Raised when a floating point operation fails.
# GeneratorExit - Raised when a generator's close() method is called.
# ImportError - Raised when an imported module is not found.
# ModuleNotFoundError - Raised when a module could not be found.
# IndexError - Raised when a sequence subscript is out of range.
# KeyError - Raised when a dictionary key is not found.
# KeyboardInterrupt - Raised when the user interrupts program execution, usually by pressing Ctrl+C.
# MemoryError - Raised when an operation runs out of memory.
# NameError - Raised when a variable is not found in local or global scope.
# NotImplementedError - Raised by abstract methods.
# OSError - Base class for operating system errors.
# BlockingIOError - Raised when a blocking operation is interrupted.
# ChildProcessError - Raised when a child process fails.
# ConnectionError - Raised for connection-related issues.
# BrokenPipeError - Raised when a pipe is broken.
# ConnectionAbortedError - Raised when a connection is aborted.
# ConnectionRefusedError - Raised when a connection is refused.
# ConnectionResetError - Raised when a connection is reset.
# FileExistsError - Raised when trying to create a file or directory that already exists.
# FileNotFoundError - Raised when a file or directory is requested but not found.
# InterruptedError - Raised when a system call is interrupted.
# IsADirectoryError - Raised when a file operation is requested on a directory.
# NotADirectoryError - Raised when a directory operation is requested on a non-directory.
# PermissionError - Raised when there is a permission issue.
# ProcessLookupError - Raised when a process is not found.
# TimeoutError - Raised when a system function times out.
# OverflowError - Raised when the result of an arithmetic operation is too large.
# RecursionError - Raised when the maximum recursion depth is exceeded.
# ReferenceError - Raised when a weak reference proxy is used to access a garbage collected referent.
# RuntimeError - Raised when an error does not fall under any other category.
# StopIteration - Raised by next() to signal that there are no further items.
# StopAsyncIteration - Raised by an asynchronous iterator's anext method to stop iteration.
# SyntaxError - Raised when the parser encounters a syntax error.
# IndentationError - Raised when there is incorrect indentation.
# TabError - Raised when indentation consists of inconsistent tabs and spaces.
# SystemError - Raised when the interpreter detects an internal error.
# SystemExit - Raised by the sys.exit() function.
# TypeError - Raised when an operation or function is applied to an object of inappropriate type.
# UnboundLocalError - Raised when a local variable is referenced before assignment.
# UnicodeError - Raised when a Unicode-related encoding or decoding error occurs.
# UnicodeEncodeError - Raised when a Unicode-related error occurs during encoding.
# UnicodeDecodeError - Raised when a Unicode-related error occurs during decoding.
# UnicodeTranslateError - Raised when a Unicode-related error occurs during translation.
# ValueError - Raised when a function receives an argument of the correct type but inappropriate value.
# ZeroDivisionError - Raised when the second operand of a division or modulo operation is zero.
# EnvironmentError - Base class for errors that come from the outside environment (deprecated in Python 3).
# IOError - Raised when an I/O operation fails (deprecated in Python 3).
# Warning - Base class for warning-related exceptions.
# DeprecationWarning - Raised for deprecated features.
# PendingDeprecationWarning - Raised for features which are soon-to-be deprecated.
# RuntimeWarning - Raised for runtime-specific warnings.
# SyntaxWarning - Raised for syntax-related warnings.
# UserWarning - Raised for user-defined warnings.
# FutureWarning - Raised for warnings about constructs that will change in the future.
# ImportWarning - Raised for warnings related to import statements.
# UnicodeWarning - Raised for warnings related to Unicode.
# BytesWarning - Raised for warnings related to bytes and bytearray.
# ResourceWarning - Raised for warnings about resource usage.
