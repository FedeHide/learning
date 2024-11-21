## fibonacci challenge
# write a function that print the first 50 fibonacci numbers
# starting from 0
# the fibonacci sequence is a series of numbers in which each number
# is the sum of the two preceding ones, usually starting with 0 and 1


def fibonacci_sequence(n):
    a, b = 0, 1
    for _ in range(n):  # _ is a throwaway variable
        print(a)
        a, b = b, a + b


fibonacci_sequence(50)
