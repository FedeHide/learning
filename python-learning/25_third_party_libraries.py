#!./venv/bin/python
#! add shebang line to run the script directly code runner
#! or change the settings.json file to run the script directly

### third-party libraries
# There are tens of thousands of third-party Python libraries that can be installed and used in your programs. Some of the most popular ones are numpy, pandas, requests, and matplotlib.
# To install a library, you can use pip, a package manager for Python.

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
a = numpy.array([1, 2, 3])
print(a)  # [1 2 3]
