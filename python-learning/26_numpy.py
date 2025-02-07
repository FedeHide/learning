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


## ? cv2 - OpenCV is a popular computer vision library that provides support for image processing and computer vision tasks. It is widely used in the field of computer vision for tasks such as object detection, image segmentation, and image classification.
# pip install opencv-python

import cv2

# read an image
image = cv2.imread("schemas/smallgray.png", 0)  # 0 - grayscale, 1 - color
print("image:", "\n", image)
# [[187 158 104 121 143]
#  [198 125 255 255 147]
#  [209 134 255  97 182]]


# write an image
# create a new image , the second argument is the image data, it can be a numpy array or a list
cv2.imwrite("schemas/newsmallgray.png", image)


# slice an image
# get the first two rows and the last three columns
sliced_image = image[0:2, 2:5]
print("sliced_image:", "\n", sliced_image)
# [[104 121 143]
#  [255 255 147]]


# iterate over an image
# iterate over the rows
print("image_rows:", "\n")
for row in image:
    print(row)
# [187 158 104 121 143]
# [198 125 255 255 147]
# [209 134 255  97 182]


# iterate over the columns
print("image_columns:", "\n")
for column in image.T:
    print(column)
# [187 198 209]
# [158 125 134]
# [104 255 255]
# [121 255  97]
# [143 147 182]


# iterate over the values
print("image_values:", "\n")
for value in image.flat:
    print(value)
# 187 158 104 121 143 198 125 255 255 147 209 134 255 97 182


# stack images - combine two or more images with same dimensions
# stack two images horizontally
h_stacked_image = numpy.hstack(
    (image, image)
)  # arguments are a tuple or it will throw an error
print("h_stacked_image:", "\n", h_stacked_image)
# [[187 158 104 121 143 187 158 104 121 143]
#  [198 125 255 255 147 198 125 255 255 147]
#  [209 134 255 97 182 209 134 255 97 182]]

# stack two images vertically
v_stacked_image = numpy.vstack((image, image))
print("v_stacked_image:", "\n", v_stacked_image)
# [[187 158 104 121 143]
#  [198 125 255 255 147]
#  [209 134 255 97 182]
#  [187 158 104 121 143]
#  [198 125 255 255 147]
#  [209 134 255 97 182]]


# split an image
# split the image horizontally - arguments are the image and the number of splits
h_split_image = numpy.hsplit(image, 5)
print("h_split_image:", "\n", h_split_image)
# [array([[187], [198], [209]], dtype=uint8), array([[158], [125], [134]], dtype=uint8), array([[104], [255], [255]], dtype=uint8), array([[121], [255], [97]], dtype=uint8), array([[143], [147], [182]], dtype=uint8)]


# split the image vertically
v_split_image = numpy.vsplit(image, 3)
print("v_split_image:", "\n", v_split_image)
# [array([[187, 158, 104, 121, 143]], dtype=uint8), array([[198, 125, 255, 255, 147]], dtype=uint8), array([[209, 134, 255,  97, 182]], dtype=uint8)]
