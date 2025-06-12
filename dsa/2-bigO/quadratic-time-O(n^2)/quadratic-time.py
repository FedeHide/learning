import timeit

numbers = list(range(1, 101))


def find_pairs(arr):
    # O(n^2)
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            print(f"Pair: {arr[i]}, {arr[j]}")


# Benchmarking the function
iterations = 1
time_on2 = timeit.timeit("find_pairs(numbers)", globals=globals(), number=iterations)
print(f"find_pairs O(n^2) time: {time_on2 * 1000:.3f} ms for {iterations} iterations")
