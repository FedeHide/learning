#!./venv/bin/python

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


## * other way to create a DataFrame
df2 = pandas.DataFrame(
    [[1, 2], [3, 4]], columns=["A", "B"], index=["X", "Y"]
)  # create a DataFrame with custom column names
print("pandas:", "\n", df2)
#    A  B
# X  1  2
# Y  3  4


## * other example with pandas and csv file

# read a CSV file
df = pandas.read_csv("schemas/temp_data.csv")
print(df.mean())  # calculate the mean of each column
print(df.mean()["st1"])  # calculate the mean of a specific column


## * other example with pandas and json file

# read a JSON file
df = pandas.read_json("schemas/my_data.json")
print(df)
