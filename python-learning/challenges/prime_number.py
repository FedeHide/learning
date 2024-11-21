## prime number challenge
# write a function that prints if a number is prime or not
# a prime number is a number that is only divisible by 1 and itself


def is_prime(n):
    if n < 2:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True


print(is_prime(2))  # True
print(is_prime(17))  # True
print(is_prime(21))  # False

for i in range(51):
    print(i, is_prime(i))
