#!./venv/bin/python
#! add shebang line to run the script directly code runner
#! or change the settings.json file to run the script directly

### third-party libraries
# There are tens of thousands of third-party Python libraries that can be installed and used in your programs. Some of the most popular ones are numpy, pandas, requests, and matplotlib.
# To install a library, you can use pip, a package manager for Python.

# * install a library
# pip install library_name

# * uninstall a library
# pip uninstall library_name

# * list all installed libraries
# pip freeze
# pip list

# the difference between pip freeze and pip list is that pip freeze saves all dependencies to a file, while pip list only displays the installed libraries.

# * show the version of a library
# pip show library_name

# * search for a library
# pip search library_name

# * show information about a library
# pip show library_name

# * update a library
# pip install --upgrade library_name

# * install a specific version of a library
# pip install library_name==version

# * install a library from a file
# pip install -r requirements.txt

# * save all dependencies to a file
# pip freeze > requirements.txt


##? venv - virtual environment
# It is recommended to install all third-party libraries in a virtual environment to avoid conflicts between different projects. You can create a virtual environment by running the following command:

# * create a virtual environment
# python -m venv name_of_virtual_environment (convention .venv)

# * activate the virtual environment
# source name_of_virtual_environment/bin/activate

# * check if the virtual environment is activated
# echo $VIRTUAL_ENV or which python3

# * install a library
# pip install library_name

# * list all installed libraries
# pip freeze

# * manage dependencies
# pip freeze > requirements.txt # save all dependencies to a file
# pip install -r requirements.txt # install all dependencies from a file

# * deactivate the virtual environment
# deactivate


## ? numpy - numerical computing library
# numpy is a popular library for numerical computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.

import numpy

# create an array
my_array = numpy.array([1, 2, 3])
print("numpy:", my_array)  # [1 2 3]
print("numpy:", type(my_array))  # <class 'numpy.ndarray'>


## ? pandas - data manipulation library
# pandas is a powerful library for data manipulation and analysis. It provides data structures like Series and DataFrame that allow you to work with structured data easily.

import pandas

# create a DataFrame
data = {"Name": ["Alice", "Bob", "Charlie"], "Age": [25, 30, 35]}

df = pandas.DataFrame(data)
print("pandas:", "\n", df)
#       Name  Age
# 0    Alice   25
# 1      Bob   30
# 2  Charlie   35

# get the column names
print("pandas:", df.columns)  # Index(['Name', 'Age'], dtype='object')

# get the row names
print("pandas:", df.index)  # RangeIndex(start=0, stop=3, step=1)


# other example with pandas and csv file

# read a CSV file
df = pandas.read_csv("schemas/temp_data.csv")
print(df.mean())  # calculate the mean of each column
print(df.mean()["st1"])  # calculate the mean of a specific column


## ? requests - HTTP library
# requests is a popular library for making HTTP requests in Python. It allows you to send HTTP requests and handle responses easily.

import requests

# make a GET request
response = requests.get("https://pokeapi.co/api/v2/pokemon?limit=9")
print("requests:", response.status_code)  # 200

# get the response content
print("requests content:", response.text)

print("\n")

# get the response JSON
print("requests json:", response.json())

# print pokemon names in a list
pokemon_names = [pokemon["name"] for pokemon in response.json()["results"]]
print("pokemon names:", pokemon_names)


## ? my package
# You can create your own packages and modules in Python. A package is a directory that contains a special file called __init__.py, which can be empty. A module is a Python file that contains functions, classes, and variables.

# my_package/
# ├── __init__.py
# ├── module1.py
# └── module2.py

# To use a module from a package, you can import it using the dot notation:

# import my_package.module1

# or import specific functions or classes from the module:
from my_package import arithmetics

print("my_package:", arithmetics.add(5, 3))  # 8
print("my_package:", arithmetics.subtract(5, 3))  # 2
print("my_package:", arithmetics.multiply(5, 3))  # 15
print("my_package:", arithmetics.divide(10, 2))  # 5.0
