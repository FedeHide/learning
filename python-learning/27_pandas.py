#!./venv/bin/python

## ? pandas - data manipulation library
# pandas is a powerful library for data manipulation and analysis. It provides data structures like Series and DataFrame that allow you to work with structured data easily.

import pandas

# create a DataFrame
data_example = {"Name": ["Alice", "Bob", "Charlie"], "Age": [25, 30, 35]}

df_data_example = pandas.DataFrame(data_example)
print("df_data_example:", "\n", df_data_example)
#       Name  Age
# 0    Alice   25
# 1      Bob   30
# 2  Charlie   35

# get the column names
print(
    "df_data_example:", df_data_example.columns
)  # Index(['Name', 'Age'], dtype='object')

# get the row names
print("df_data_example:", df_data_example.index)  # RangeIndex(start=0, stop=3, step=1)


## * other way to create a DataFrame
df_example_2 = pandas.DataFrame(
    [[1, 2], [3, 4]], columns=["A", "B"], index=["X", "Y"]
)  # create a DataFrame with custom column names
print("df_example_2:", "\n", df_example_2)
#    A  B
# X  1  2
# Y  3  4


## * other example with pandas and csv file

# read a CSV file
df_csv = pandas.read_csv("schemas/temp_data.csv")
print("df_csv_mean:", "\n", df_csv.mean())  # calculate the mean of each column
print(
    "df_csv_mean_col(st1):", df_csv.mean()["st1"]
)  # calculate the mean of a specific column


## * other example with pandas and json file

# read a JSON file
df_json = pandas.read_json("schemas/supermarkets.json")
print("df_json:", "\n", df_json)


## * other example with pandas and excel file

# read an Excel file
df_excel = pandas.read_excel("schemas/supermarkets.xlsx")
print("df_excel:", "\n", df_excel)


## * some methods to manipulate data

# get the first n rows
print("df_csv_head:", "\n", df_csv.head(2))

# get the last n rows
print("df_csv_tail:", "\n", df_csv.tail(2))

# get the shape of the DataFrame
print("df_csv_shape:", "\n", df_csv.shape)

# get the data types of each column
print("df_csv_dtypes:", "\n", df_csv.dtypes)

# get the summary statistics of the DataFrame
print("df_csv_describe:", "\n", df_csv.describe())

# get the unique values of a column
print("df_csv_unique:", "\n", df_csv["st1"].unique())

# set index of the DataFrame
df_csv.set_index("st1", inplace=True)

# filter rows based on a condition
print("df_csv_filtered:", "\n", df_csv[df_csv["st2"] > 2])
