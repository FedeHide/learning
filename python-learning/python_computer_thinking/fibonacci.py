# **
# * function to calculate the fibonacci number
# ? @param n: the number to calculate the fibonacci number
# ? @return: the fibonacci number
# *#


def fibonacci(n):
    if n == 0 or n == 1:
        return 1

    return fibonacci(n - 1) + fibonacci(n - 2)
