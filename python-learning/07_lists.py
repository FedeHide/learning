#### Lists
# Lists are used to store multiple items in a single variable.
# Lists are created using square brackets.
# List items are ordered, changeable, and allow duplicate values.
# List items are indexed, the first item has index [0], the second item has index [1] etc.

my_list = list()
my_other_list = []

my_list = [1, 2, 3, 4, 5]

print(my_list, len(my_list))  # [1, 2, 3, 4, 5] 5

my_other_list = ["apple", 10, 5.6]


##### list destructuring
a, b, c = my_other_list

# list destructuring
a, b, c = my_other_list[0], my_other_list[1], my_other_list[2]

# list destructuring with *
a, *b, c = my_list  # a = 1, b = [2, 3, 4], c = 5

# list destructuring with * and _ (ignoring some values)
a, *_, c = my_list  # a = 1, c = 5


##### Accessing Items
print(my_list[0])  # First item

# Negative Indexing
print(my_list[-1])  # Last item

# Range of Indexes
print(my_list[1:3])  # [2, 3]

# Change Item Value
my_list[1] = 10
print(my_list)  # [1, 10, 3, 4, 5]

# delete item
del my_list[1]  # [1, 3, 4, 5]

# change an item
my_list[1] = 10  # [1, 10, 3, 4, 5]

# change multiple items (change the second and third items)
my_list[1:3] = [10, 20]  # [1, 10, 20, 4, 5]


#### List Methods
# append()	Adds an element at the end of the list
my_list.append(6)  # [1, 10, 3, 4, 5, 6]

# clear()	Removes all the elements from the list
my_list.clear()  # []

# copy()	Returns a copy of the list
my_list = [1, 2, 3, 4, 5]
my_other_list = my_list.copy()
print(my_other_list)  # [1, 2, 3, 4, 5]

# count()	Returns the number of elements with the specified value
print(my_list.count(3))  # 1

# extend()	Add the elements of a list (or any iterable), to the end of the current list
my_list.extend([6, 7, 8])  # [1, 2, 3, 4, 5, 6, 7, 8]

# index()	Returns the index of the first element with the specified value
print(my_list.index(3))  # 2

# insert()	Adds an element at the specified position
my_list.insert(1, 10)  # [1, 10, 2, 3, 4, 5, 6, 7, 8]

# pop()	Removes the element at the specified position
my_list.pop(1)  # [1, 2, 3, 4, 5, 6, 7, 8]

# remove()	Removes the item with the specified value (only the first occurrence)
my_list.remove(3)  # [1, 2, 4, 5, 6, 7, 8]

# reverse()	Reverses the order of the list
my_list.reverse()  # [8, 7, 6, 5, 4, 2, 1]

# other way to reverse a list
my_list = my_list[::-1]

# sort()	Sorts the list
my_new_list = [4, 22, 1, 50, 6, 7, 8]
my_new_list.sort()  # [1, 4, 6, 7, 8, 22, 50]

# List Comprehension
# List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.
new_list = [x for x in my_new_list if x > 5]
print(new_list)  # [6, 7, 8, 22, 50]

# Nested List Comprehension
matrix = [[1, 2], [3, 4], [5, 6]]
flattened = [num for row in matrix for num in row]
print(flattened)  # [1, 2, 3, 4, 5, 6]


## Concatenating Lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
list3 = list1 + list2  # [1, 2, 3, 4, 5, 6]
