### file handling

## * open()
# The open() function is used to open a file. It returns a file object, also called a handle, as it is used to read or modify the file.
# takes two parameters; filename, and mode.
# file = open("filename", "mode")

# There are four different methods (modes) for opening a file:
# "r" - Read - Default value. Opens a file for reading
# "a" - Append - Opens a file for appending, creates the file if it does not exist
# "w" - Write - Opens a file for writing, creates the file if it does not exist
# "x" - Create - Creates the specified file, returns an error if the file exists
# "+" - Open a file for reading and writing (can be added to other modes)

# In addition you can specify if the file should be handled as binary or text mode
# "t" - Text - Default value. Text mode
# "b" - Binary - Binary mode (e.g. images)

f = open("schemas/my_file.txt", "r+")  # --> open file in read and write mode

## * methods
# methods will be commented because you can only use one method at a time

# ? read()
# is used to read the content of a file.
# You can specify how many characters you want to return.
# If you don't specify, the whole content will be returned.

# print(f.read()) # --> read whole content
# print(f.read(5)) # --> read first 5 characters


# ? readline()
# is used to read the content of a file line by line.
# You can specify how many characters you want to return.
# If you don't specify, the whole line will be returned.

# print(f.readline())  # --> read first line

# print(f.readline(5)) # --> read first 5 characters of the first line


# ? readlines()
# is used to read the content of a file line by line.
# It returns a list of all the lines in the file.

# print(f.readlines()) # --> read all lines


# ? for loop
# You can also use a for loop to read the content of a file line by line.
# This is a simple and efficient way to read the content of a file.

# for line in f:
#     print(line) # --> read all lines


# ? close()
# is used to close a file.
# You should always close your files, in some cases, due to buffering, changes made to a file may not show until you close the file.

f.close()


## * write()
# is used to write content to a file.
# You can specify how many characters you want to write.
# If you don't specify, the whole content will be written.

with open(
    "schemas/my_file.txt", "w"
) as f:  # --> with statement to close the file automatically
    f.write("i love cats so much")

# open and read the file after the appending:
f = open("schemas/my_file.txt", "r")
print(f.read())
f.close()


## * append()
# is used to append content to a file.
# You can specify how many characters you want to append.
# If you don't specify, the whole content will be appended.

f = open("schemas/my_file.txt", "a")
f.write(
    """
Ruki is a 4 years old, black cat
Anya is a 2 years old, white cat
is miss Orion and Nyx, my two cats that passed away ...
"""
)
f.close()

# open and read the file after the appending:
f = open("schemas/my_file.txt", "r")
print(f.read())
f.close()


## * create()
# is used to create a new file.
# You can specify how many characters you want to create.
# If you don't specify, the whole content will be created.
# if the file already exists, the operation will fail.

f = open("schemas/my_file2.txt", "x")
print("file created successfully")
f.write("i love dogs")
f.close()

# open and read the file after the appending:
f = open("schemas/my_file2.txt", "r")
print(f.read())
f.close()


## * delete()
# To delete a file, you must import the OS module, and run its os.remove() function:
# import os --> import os module
# os.remove("filename") --> delete the file

import os

os.remove("schemas/my_file2.txt")
print("file deleted successfully")


# Note: You can only remove a file if it is not opened and if it exists.
# Note: You can use the os.rmdir() method to remove directories.


## ? json file
# JSON is a syntax for storing and exchanging data.
# JSON is text, written with JavaScript object notation.
# Python has a built-in package called json, which can be used to work with JSON data.

import json

json_file = open("schemas/my_data.json", "w+")
# fmt: off
json_data = {
    "name": "Ruki", 
    "age": 4, 
    "color": "black", 
    "nick": "el purris"
}
# fmt: on

# * json.dump()
# is used to write JSON data to a file.
# The json.dump() method can be used to write to a file.
# json.dump(data, file, indent=4)

json.dump(json_data, json_file, indent=4)

json_file.close()


## * json.dumps()
# is used to convert a Python object into a JSON string.
# The json.dumps() method can be used to convert a Python object into a JSON string.
# json.dumps(data)

json_string = json.dumps(json_data)
print("json dumps method:", json_string)


## * json.load()
# is used to read JSON data from a file.
# The json.load() method can be used to read from a file.
# json.load(file)

json_file = open("schemas/my_data.json", "r")
json_data = json.load(json_file)
print("json load method:", json_data)
json_file.close()


## ? csv file
# CSV stands for Comma Separated Values.
# CSV is a simple file format used to store tabular data, such as a spreadsheet or database.
# CSV file can be opened in Excel, Google Sheets, etc.

import csv

csv_file = open("schemas/my_data.csv", "w+")
# fmt: off
csv_data = [
    ["name", "age", "color", "favorite food"],
    ["Ruki", 4, "black", "chicken liver"],
    ["Anya", 2, "white", "meat"],
    ["Orion", 5, "black", "ham"],
    ["Nyx", 3, "black", "cat food"]
]
# fmt: on


# * csv.writer()
# is used to write to a CSV file.
# The csv.writer() method can be used to write to a file.
# csv.writer(file)

csv_writer = csv.writer(csv_file)
csv_writer.writerows(csv_data)

# write a single row
# csv_writer.writerow(["name", "age", "color", "favorite food"])

csv_file.close()


# * csv.reader()
# is used to read from a CSV file.
# The csv.reader() method can be used to read from a file.
# csv.reader(file)

csv_file = open("schemas/my_data.csv", "r")
csv_reader = csv.reader(csv_file)
for row in csv_reader:
    print("csv reader method:", row)

csv_file.close()
