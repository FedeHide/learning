#### Dictionaries
# A dictionary is a collection which is unordered, changeable and indexed. 
# In Python dictionaries are written with curly brackets, and they have keys and values.
# Dictionaries are used to store data values in key:value pairs.

my_dict = {} # Empty dictionary
my_other_dict = dict() # Empty dictionary

my_dict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

my_other_dict = {
    "name": "Orion",
    "age": 30,
    "city": "Buenos Aires",
    "country": "Argentina",
    "is_student": False
}

print(len(my_dict)) # 3

### check if item exists
# You can check if a specified key exists in a dictionary by using the in keyword:
print("brand" in my_dict) # True


### Accessing Items
# You can access the items of a dictionary by referring to its key name, inside square brackets:
print(my_dict["brand"]) # Ford

# There is also a method called get() that will give you the same result:
print(my_dict.get("model")) # Mustang


### Change Values
# You can change the value of a specific item by referring to its key name:
my_dict["year"] = 2018
print(my_dict) # {'brand': 'Ford', 'model': 'Mustang', 'year': 2018}

# Adding Items
# Adding an item to the dictionary is done by using a new index key and assigning a value to it:
my_dict["color"] = "red"
print(my_dict) # {'brand': 'Ford', 'model': 'Mustang', 'year': 2018, 'color': 'red'}


# Removing Items
# There are several methods to remove items from a dictionary:
# The pop() method removes the item with the specified key name:
my_dict.pop("model")
print(my_dict) # {'brand': 'Ford', 'year': 2018, 'color': 'red'}


### Methods
# clear() Removes all the elements from the dictionary
my_other_dict.clear() 
print(my_other_dict) # {}

# copy() Returns a copy of the dictionary
my_other_dict = my_dict.copy()
print(my_other_dict) # {'brand': 'Ford', 'year': 2018, 'color': 'red'}

# fromkeys() Returns a dictionary with the specified keys and value
x = ('key1', 'key2', 'key3')
y = 0
my_new_dict = dict.fromkeys(x, y)
print(my_new_dict) # {'key1': 0, 'key2': 0, 'key3': 0}

# get() Returns the value of the specified key
print(my_dict.get("brand")) # Ford

# items() Returns a list containing a tuple for each key value pair
print(my_dict.items()) # dict_items([('brand', 'Ford'), ('year', 2018), ('color', 'red')])

# keys() Returns a list containing the dictionary's keys
print(my_dict.keys()) # dict_keys(['brand', 'year', 'color'])

# popitem() Removes the last inserted key-value pair
my_dict.popitem()
print(my_dict) # {'brand': 'Ford', 'year': 2018}

# setdefault() Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
print(my_dict.setdefault("brand", "Toyota")) # Ford

# update() Updates the dictionary with the specified key-value pairs
my_dict.update({"year": 2020})
print(my_dict) # {'brand': 'Ford', 'year': 2020}

# values() Returns a list of all the values in the dictionary
print(my_dict.values()) # dict_values(['Ford', 2020])+

# del keyword removes the item with the specified key name:
del my_dict["brand"]
print(my_dict) # {'year': 2020}

# del keyword can also delete the dictionary completely:
del my_dict
# print(my_dict) # NameError: name 'my_dict' is not defined



### Nested Dictionaries
# A dictionary can also contain many dictionaries, this is called nested dictionaries.

my_family = {
    "child1": {
        "name": "Emil",
        "year": 2004
    },
    "child2": {
        "name": "Tobias",
        "year": 2007
    },
    "child3": {
        "name": "Linus",
        "year": 2011
    }
}

# Or, if you want to nest three dictionaries that already exists as dictionaries:
child1 = {
    "name": "Emil",
    "year": 2004
}
child2 = {
    "name": "Tobias",
    "year": 2007
}
child3 = {
    "name": "Linus",
    "year": 2011
}

my_family = {
    "child1": child1,
    "child2": child2,
    "child3": child3
}

