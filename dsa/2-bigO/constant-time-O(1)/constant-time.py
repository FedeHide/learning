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
