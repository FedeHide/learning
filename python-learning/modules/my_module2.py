def calculate_fibo(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
    return a


def calculate_factorial(n):
    if n == 0:
        return 1
    return n * calculate_factorial(n - 1)


def calculate_sum(n):
    return n * (n + 1) / 2
