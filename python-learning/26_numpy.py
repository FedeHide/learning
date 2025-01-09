#!./venv/bin/python

### ? numpy - numerical computing library
# numpy is a popular library for numerical computing. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.

import numpy

# create an array
my_array = numpy.array([1, 2, 3])
print("array:", my_array)  # [1 2 3]

# create a multi-dimensional array
my_multi_array = numpy.array([[1, 2, 3], [4, 5, 6]])
print("multi_array:", "\n", my_multi_array)
# [[1 2 3]
#  [4 5 6]]

# get the type of an array, type() function returns the type of an object
print("array_type:", type(my_array))  # <class 'numpy.ndarray'>
print("multi_array_type:", type(my_multi_array))  # <class 'numpy.ndarray'>

# get the shape of an array, shape is a tuple that contains the number of elements in each dimension
print("array shape:", my_array.shape)  # (3,)
print("M_array shape:", my_multi_array.shape)  # (2, 3)


# get the data type of an array
print("array dtype:", my_array.dtype)  # int64
print("M_array dtype:", my_multi_array.dtype)  # int64


## * numpy functions

# arange - create an array with a range of values
my_range = numpy.arange(0, 24, 2)
print("range:", my_range)  # [ 0  2  4  6  8 10 12 14 16 18 20 22]


# reshape - change the shape of an array
my_reshape_2d = my_range.reshape(3, 4)  # 3 rows, 4 columns - two-dimensional array
print("reshape_2d:", "\n", my_reshape_2d)
# [[ 0  2  4  6]
#  [ 8 10 12 14]
#  [16 18 20 22]]

my_reshape_3d = my_range.reshape(
    2, 3, 2
)  # 2 rows, 3 columns, 2 depth - three-dimensional array
print("reshape_3d:", "\n", my_reshape_3d)
# [[[ 0  2]
#   [ 4  6]
#   [ 8 10]]
#
#  [[12 14]
#   [16 18]
#   [20 22]]]


# linspace - create an array with a range of values
my_linspace = numpy.linspace(0, 10, 5)  # 5 values between 0 and 10
print("linspace:", my_linspace)  # [ 0.   2.5  5.   7.5 10. ]


# asarray - convert a list to an array
my_list = [1, 2, 3]
my_asarray = numpy.asarray(my_list)
print("asarray:", my_asarray)  # [1 2 3]

#! this is useful because arrays support mathematical operations, while lists do not
