#!./venv/bin/python

## ? openCV - Open Source Computer Vision Library
# OpenCV is a library of programming functions mainly aimed at real-time computer vision.


import cv2

# * imread() - read an image
# * parameters: image path, flag
# * flag: 0 - grayscale, 1 - color, -1 - alpha channel
img = cv2.imread(
    "schemas/galaxy.jpg", 1
)  # parameters: 0 - grayscale, 1 - color, -1 - alpha channel


# * what is the img?

print(type(img))  # <class 'numpy.ndarray'>
print(img)
print(img.shape)  # (1485, 990, 3) - 1485 rows, 990 columns, 3 channels (RGB)
print(img.ndim)  # 3 - 3 channels (RGB)
print(img.size)  # 4407300 - total number of pixels


# * resize() - resize an image
# * parameters: image, (width, height)
resized_img = cv2.resize(
    img, (int(img.shape[1] / 2), int(img.shape[0] / 2))
)  # parameters: image, (width, height)


# * imshow() - display an image
# * parameters: window name, image
cv2.imshow("Galaxy", resized_img)  # parameters: window name, image


# * waitKey() - wait for a key event
# * parameter: time in milliseconds (0 - infinite)
cv2.waitKey(0)  # parameter: time in milliseconds (0 - infinite)


# * destroyAllWindows() - destroy all windows
cv2.destroyAllWindows()
