#!./venv/bin/python

## ? numpy - numerical computing library
# numpy is a popular library for numerical computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.

import numpy

# create an array
my_array = numpy.array([1, 2, 3])
print("array:", my_array)  # [1 2 3]
print("array:", type(my_array))  # <class 'numpy.ndarray'>


# create a multi-dimensional array
my_multi_array = numpy.array([[1, 2, 3], [4, 5, 6]])
print("multi_array:", my_multi_array)
# [[1 2 3]
#  [4 5 6]]
print("multi_array:", type(my_multi_array))  # <class 'numpy.ndarray'>


# get the shape of an array
print("array shape:", my_array.shape)  # (3,)
print("M_array shape:", my_multi_array.shape)  # (2, 3)


# get the data type of an array
print("array dtype:", my_array.dtype)  # int64
print("M_array dtype:", my_multi_array.dtype)  # int64
