#!./venv/bin/python

## ? openCV - Open Source Computer Vision Library
# OpenCV is a library of programming functions mainly aimed at real-time computer vision.


import cv2
import os

# * imread() - read an image
# * parameters: image path, flag
# * flag: 0 - grayscale, 1 - color, -1 - alpha channel
galaxy_img = cv2.imread("schemas/galaxy.jpg", 1)


# * what is the img?

print("galaxy_img_type:", type(galaxy_img))  # <class 'numpy.ndarray'>
print("galaxy_img:", "\n", galaxy_img)
print(
    "galaxy_img_shape:", galaxy_img.shape
)  # (1485, 990, 3) - 1485 rows, 990 columns, 3 channels (RGB)
print("galaxy_img_ndim:", galaxy_img.ndim)  # 3 - 3 channels (RGB)
print("galaxy_img_size:", galaxy_img.size)  # 4407300 - total number of pixels

# * resize() - resize an image
# * parameters: image, (width, height)
galaxy_resized_img = cv2.resize(
    galaxy_img, (int(galaxy_img.shape[1] / 2), int(galaxy_img.shape[0] / 2))
)


# * imshow() - display an image
# * parameters: window name, image
cv2.imshow("Galaxy", galaxy_resized_img)


# * imwrite() - write an image
# * parameters: image path, image
cv2.imwrite("schemas/galaxy_resized100.jpg", galaxy_resized_img)


# * waitKey() - wait for a key event
# * parameter: time in milliseconds (0 - infinite)
cv2.waitKey(0)


# * destroyAllWindows() - destroy all windows
cv2.destroyAllWindows()


# ! create a function to resize all images in a folder to 100x100
def resize_all_images_to_100x100(folder):

    for file in os.listdir(folder):
        img = cv2.imread(f"{folder}/{file}", 1)
        resized_img = cv2.resize(img, (100, 100))
        cv2.imwrite(f"{folder}/resized-{file}", resized_img)


# resize_all_images_to_100x100("schemas/sample_images")


# ! same function with glob to find all images in a folder
import glob

# ? glob - find all the pathnames matching a specified pattern according to the rules used by the Unix shell
# * glob.glob() - returns a list of pathnames matching the pattern
# * parameters: pattern
# * pattern: * - zero or more characters, ? - single character
# * pattern: [seq] - any character in seq, [!seq] - any character not in seq
# * pattern: {p,q} - p or q


def resize_all_images_to_100x100_glob(folder):
    # create a folder to store the resized images
    output_folder = os.path.join(folder, "resized")
    os.makedirs(output_folder, exist_ok=True)

    for file in glob.glob(f"{folder}/*.jpg"):
        try:
            # read the image
            img = cv2.imread(file, 1)
            if img is None:
                print(f"Error: image {file} not found.")
                continue

            # resize the image
            resized_img = cv2.resize(img, (100, 100))

            # save the resized image
            output_path = os.path.join(
                output_folder,
                f"resized-{os.path.basename(file)}",  # basename - return the base name of the file
            )
            cv2.imwrite(output_path, resized_img)
            print(f"Image {file} resized successfully.")
        except Exception as e:
            print(f"Error to resize image {file}: {e}")


# resize_all_images_to_100x100_glob("schemas/sample_images")


# ? face detection - haarcascades
# * haarcascades - pre-trained classifiers for detecting objects
# * haarcascades_frontalface_default.xml - pre-trained classifier for face detection
# * haarcascades_eye.xml - pre-trained classifier for eye detection


# * CascadeClassifier() - create a cascade classifier to detect objects
# * parameters: classifier path
# * classifier path: path to the pre-trained classifier
# * returns: cascade classifier object
face_cascade = cv2.CascadeClassifier(
    "schemas/face_detection/haarcascade_frontalface_default.xml"
)

# load the image
face_img = cv2.imread("schemas/face_detection/news.jpg")


# * cvtColor() - convert an image to another color space
# * parameters: image, color space
# * color space: cv2.COLOR_BGR2GRAY, cv2.COLOR_BGR2RGB, cv2.COLOR_BGR2HSV, cv2.COLOR_BGR2LAB, cv2.COLOR_BGR2YUV, cv2.COLOR_BGR2XYZ ...
face_gray_img = cv2.cvtColor(face_img, cv2.COLOR_BGR2GRAY)
#! passing 0 to imread() to read the image in grayscale improves the performance of the face detection


# * detectMultiScale() - detect objects in an image
# * parameters: image, scaleFactor, minNeighbors
# * scaleFactor: parameter specifying how much the image size is reduced at each image scale
# * minNeighbors: parameter specifying how many neighbors each candidate rectangle should have to retain it
faces = face_cascade.detectMultiScale(face_gray_img, scaleFactor=1.1, minNeighbors=5)

print("faces_obj:", faces)  # [(x, y, width, height), ...]
print("faces_obj_type:", type(faces))  # <class 'numpy.ndarray'>
print("faces_obj_ndim:", faces.ndim)  # 2
print("faces_obj_shape:", faces.shape)  # (1, 4) - 1 face, 4 coordinates


# * rectangle() - draw a rectangle on an image
# * parameters: image, start_point, end_point, color, thickness
# * start_point: top-left corner of the rectangle
# * end_point: bottom-right corner of the rectangle
# * color: rectangle color
# * thickness: rectangle thickness
for x, y, w, h in faces:
    face_img = cv2.rectangle(face_img, (x, y), (x + w, y + h), (0, 255, 0), 3)

resized_face_img = cv2.resize(
    face_img, (int(face_img.shape[1] / 2), int(face_img.shape[0] / 2))
)


cv2.imshow("Face Detection", resized_face_img)
cv2.waitKey(0)
cv2.destroyAllWindows()


# ? video capture

# * VideoCapture() - create a video capture object
# * parameters: video path
# * video path: path to the video file or camera index
# * video path: 0 - default camera, 1 - external camera
# * returns: video capture object
video = cv2.VideoCapture(0)  # 0 - default camera

while True:
    # * read() - read the next frame
    # * returns: boolean, frame
    check, frame = video.read()

    # * imshow() - display the frame
    # * parameters: window name, frame
    cv2.imshow("Video", frame)

    # wait for a key event
    key = cv2.waitKey(1)

    # * ord() - return the Unicode code point for a one-character string
    # * parameters: character
    # * character: a string of length 1
    # * returns: Unicode code point
    # break the loop if 'q' is pressed
    if key == ord("q"):
        break

# * release() - release the video capture object
video.release()
cv2.destroyAllWindows()
