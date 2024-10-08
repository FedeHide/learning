#### Sets
# A set is a collection which is unordered and unindexed. In Python sets are written with curly brackets.
# Set items are unordered, unchangeable, and do not allow duplicate values.
# Set items do not have a defined order, so you cannot refer to an item by using an index.

my_set = set()  # Empty set
my_other_set = {}  # Empty dictionary

my_set = {"apple", "banana", "cherry"}

my_other_set = {"orion", "nix", "ruki", "anya", 10}  # now is a set not a dictionary

# difference between set and dictionary is that set uses curly brackets and dictionary uses curly brackets and key value pairs


### Access Items
# You cannot access items in a set by referring to an index, since sets are unordered the items has no index.
# But you can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.


### Change Items
# Once a set is created, you cannot change its items, but you can add new items.

### Manipulate items
# To add one item to a set use the add() method.
my_set.add("orange")
print(my_set)  # {'apple', 'banana', 'cherry', 'orange'}

# To add more than one item to a set use the update() method, you can add a iterable or individual items
my_set.update(["mango", "grapes"])  # is in brackets because is a list
my_set.update(("sandia", "onion"))  # is in parentheses because is a tuple
my_set.update({"tomato", "potato"})  # is in curly brackets because is a set
print(
    my_set
)  # {'apple', 'banana', 'cherry', 'grapes', 'mango', 'orange', 'sandia', 'onion', 'potato', 'tomato'}

### Remove Items
# To remove an item in a set, use the remove(), or the discard() method.
my_set.remove("banana")
print(my_set)  # {'apple', 'cherry', 'grapes', 'mango', 'orange'}

my_set.discard("apple")
print(my_set)  # {'cherry', 'grapes', 'mango', 'orange'}

# You can also use the pop(), method to remove an item, but this method will remove the last item. Remember that sets are unordered, so you will not know what item that gets removed.
my_set.pop()
print(my_set)  # {'grapes', 'mango', 'orange'}

# The clear() method empties the set
my_set.clear()
print(my_set)  # set()

# The del keyword will delete the set completely
del my_set
# print(my_set) # NameError: name 'my_set' is not defined


### check if item exists
my_set = {"apple", "banana", "cherry"}
print("banana" in my_set)  # True
print("orange" in my_set)  # False


### methods

# len()	Returns the number of elements in the set
my_set = {"apple", "banana", "cherry"}
print(len(my_set))  # 3

# copy()	Returns a copy of the set
my_set = {"apple", "banana", "cherry"}
my_copy_set = my_set.copy()
print(my_copy_set)  # {'apple', 'banana', 'cherry'}

# union()	Return a set containing the union of sets
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_union = my_set.union(my_other_set)
print(my_union)  # {'apple', 'banana', 'cherry', 'google', 'microsoft'}

# difference()	Returns a set containing the difference between two or more sets
my_set = {"apple", "banana", "cherry"}
my_other_set = {"cherry", "microsoft", "apple"}
my_difference = my_set.difference(my_other_set)
print(my_difference)  # {'banana'}

# difference_update()	Removes the items in this set that are also included in another, specified set
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_set.difference_update(my_other_set)
print(my_set)  # {'banana', 'cherry'}

# intersection()	Returns a set, that is the intersection of two other sets
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_intersection = my_set.intersection(my_other_set)
print(my_intersection)  # {'apple'}

# intersection_update()	Removes the items in this set that are not present in other, specified set(s)
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_set.intersection_update(my_other_set)
print(my_set)  # {'apple'}

# isdisjoint()	Returns whether two sets have a intersection or not
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_isdisjoint = my_set.isdisjoint(my_other_set)
print(my_isdisjoint)  # False

# issubset()	Returns whether another set contains this set or not
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_issubset = my_set.issubset(my_other_set)
print(my_issubset)  # False

# issuperset()	Returns whether this set contains another set or not
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_issuperset = my_set.issuperset(my_other_set)
print(my_issuperset)  # False

# symmetric_difference()	Returns a set with the symmetric differences of two sets
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_symmetric_difference = my_set.symmetric_difference(my_other_set)
print(my_symmetric_difference)  # {'banana', 'cherry', 'google', 'microsoft'}

# symmetric_difference_update()	inserts the symmetric differences from this set and another
my_set = {"apple", "banana", "cherry"}
my_other_set = {"google", "microsoft", "apple"}
my_set.symmetric_difference_update(my_other_set)
print(my_set)  # {'banana', 'cherry', 'google', 'microsoft'}
