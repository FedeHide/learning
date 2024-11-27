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
# python3 -m venv name_of_virtual_environment

# * activate the virtual environment
# source name_of_virtual_environment/bin/activate

# * check if the virtual environment is activated
# echo $VIRTUAL_ENV

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
