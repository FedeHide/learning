### Lambdas
# Lambdas are a way to create small anonymous functions, i.e. functions without a name.
# They are temporary functions that are needed only once.
# a lambda function can take any number of arguments, but can only have one expression.

# Syntax:
# lambda arguments : expression

# Example:
x = lambda a: a + 10
print(x(5))  # Output: 15

# Example 2:
y = lambda a, b: a * b
print(y(5, 6))  # Output: 30

# Example 3:
z = lambda a, b, c: print(a + b + c)
z(5, 6, 7)  # Output: 18
