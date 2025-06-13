class MyArray:
    def __init__(self):
        self.length = 0
        self.data = {}

    def push(self, item):
        self.data[self.length] = item
        self.length += 1

    def get(self, id):
        return self.data[id]

    def pop(self):
        if self.length == 0:
            raise ValueError("Array is empty")
        self.data.pop(self.length - 1)
        self.length -= 1

    def shift(self):
        if self.length == 0:
            raise ValueError("Array is empty")

        for i in range(1, self.length):
            self.data[i - 1] = self.data[i]

        del self.data[self.length - 1]
        self.length -= 1

    def delete_by_index(self, index):
        if self.length == 0:
            raise ValueError("Array is empty")

        if index < 0 or index >= self.length:
            raise IndexError("Index out of bounds")

        for i in range(index, self.length - 1):
            self.data[i] = self.data[i + 1]

        del self.data[self.length - 1]
        self.length -= 1

    def __repr__(self):
        return f"MyArray(length={self.length}, data={self.data})"


my_new_array = MyArray()
my_new_array.push("ruki")
my_new_array.push("anya")
my_new_array.push("orion")
my_new_array.push("nyx")
my_new_array.push("luly")
print(my_new_array, "\n")

print(f"Getting selected element: {my_new_array.get(1)}")

my_new_array.pop()
print(f"Remove last element: {my_new_array}")

my_new_array.shift()
print(f"Remove first element: {my_new_array}")

my_new_array.delete_by_index(1)
print(f"Remove element by index: {my_new_array}")
