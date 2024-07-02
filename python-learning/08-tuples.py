#### Tuples
# A tuple is a collection which is ordered and unchangeable. In Python tuples are written with round brackets.
# Tuple items are ordered, unchangeable, and allow duplicate values.
# Tuple items are indexed, the first item has index [0], the second item has index [1] etc.

my_tuple = tuple() # Empty tuple 
my_other_tuple = () # Empty tuple 

my_tuple = (34, 1.84, 'ruki', 'anya') 
my_other_tuple = False, 'orion', 'nix' # parentheses are optional beecause the tuple is already defined
print(my_tuple)  # (34, 1.84, 'ruki', 'anya')
print(type(my_tuple))  # <class 'tuple'>

# Accessing tuple elements
print(my_tuple[0])  # 34
print(my_tuple[-1])  # 'anya'
print(my_tuple[1:3])  # (1.84, 'ruki')


#### methods 

# count()	Returns the number of times a specified value occurs in a tuple
print(my_tuple.count('ruki'))  # 1

# index()	Searches the tuple for the first occurrence of a specified value and returns the position of where it was found 
print(my_tuple.index('anya'))  # 3


#### Tuple unpacking
# Tuple unpacking allows you to assign each item in a tuple to a variable.
# You can also use the * operator to grab excess items.

my_tuple = (34, 1.84, 'ruki', 'anya')
age, height, *names = my_tuple
print(age)  # 34
print(height)  # 1.84
print(names)  # ['ruki', 'anya']


# Concatenating tuples
my_sum_tuple = my_tuple + my_other_tuple
print(my_sum_tuple)  # (34, 1.84, 'ruki', 'anya', False, 'orion', 'nix')


# Deleting a tuple
del my_tuple 

# converting a tuple to a list
my_list = list(my_other_tuple) # [False, 'orion', 'nix']
