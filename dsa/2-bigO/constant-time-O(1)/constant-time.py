import timeit

products_list = {
    "abc123": {"productName": "notebook", "price": 900},
    "def456": {"productName": "smartphone", "price": 700},
    "ghi789": {"productName": "tablet", "price": 500},
}


def get_product_by_id(id):
    # O(1) - Constant time complexity
    return products_list.get(id)


print(get_product_by_id("abc123"))


def get_product_by_id_2(id):
    # O(n) - Linear time complexity
    # This function iterates through the products_list dictionary
    for product_id, data in products_list.items():
        if product_id == id:
            return data
    return None


print(get_product_by_id_2("abc123"))


# Benchmarking the two functions

iterations = 1000000

time_o1 = timeit.timeit(
    'get_product_by_id("abc123")', globals=globals(), number=iterations
)
time_on = timeit.timeit(
    'get_product_by_id_2("abc123")', globals=globals(), number=iterations
)

print(
    f"get_product_by_id O(1) time: {time_o1 * 1000:.3f} ms for {iterations} iterations"
)
print(
    f"get_product_by_id_2 O(n) time: {time_on * 1000:.3f} ms for {iterations} iterations"
)
