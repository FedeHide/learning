def calculateFibo(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
    return a


def calculateFactorial(n):
    if n == 0:
        return 1
    return n * calculateFactorial(n - 1)


def calculatesum(n):
    return n * (n + 1) / 2
