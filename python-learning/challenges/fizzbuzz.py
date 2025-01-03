## FizzBuzz challenge
# write a program that prints the numbers from 1 to 100
# but for multiples of three print "fizz" instead of the number
# and for the multiples of five print "buzz"
# for numbers which are multiples of both three and five print "fizzbuzz"
# otherwise print the number


# **
# this function prints fizz if the number is divisible by 3
# prints buzz if the number is divisible by 5
# prints fizzbuzz if the number is divisible by 3 and 5
# prints the number otherwise
#! @param n: the number to be checked
# * @return: void
# * @complexity: O(n)
# ! recursion is not the best way to solve this problem
# ? using a loop would be better in terms of space complexity and time complexity
# *#


def fizzbuzz(n):
    if n <= 0 or n >= 101:
        return 1

    if n % 3 == 0 and n % 5 == 0:
        print("fizzbuzz")
    elif n % 5 == 0:
        print("buzz")
    elif n % 3 == 0:
        print("fizz")
    else:
        print(n)

    fizzbuzz(n + 1)


fizzbuzz(1)

print("**********")

# better solution


def better_fizzbuzz(limit=100):
    if not (1 <= limit <= 100):
        raise ValueError("limit must be between 1 and 100")

    for n in range(1, limit + 1):
        output = ""
        if n % 3 == 0:
            output += "fizz"
        if n % 5 == 0:
            output += "buzz"

        print(output or n)


better_fizzbuzz()
