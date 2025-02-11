#!./venv/bin/python

## ? pandas - data manipulation library
# pandas is a powerful library for data manipulation and analysis. It provides data structures like Series and DataFrame that allow you to work with structured data easily.

import pandas
import matplotlib.pyplot as plt


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
print("df_csv_head:", "\n", df_csv.head(1))  # get the first row

# get the last n rows
print("df_csv_tail:", "\n", df_csv.tail(1))  # get the last row

# get the shape of the DataFrame
print("df_csv_shape:", df_csv.shape)  # get the shape of the DataFrame

# get the data types of each column
print("df_csv_dtypes:", "\n", df_csv.dtypes)  # get the data types of each column

# get the summary statistics of the DataFrame
print(
    "df_csv_describe:", "\n", df_csv.describe()
)  # get the summary statistics of the DataFrame

# hist
df_csv["st2"].hist()  # plot a histogram of st2
plt.show()

# get the unique values of a column
print("df_csv_unique:", df_csv["st1"].unique())  # get unique values of st1

# filter rows based on a condition
print("df_csv_filtered:", "\n", df_csv[df_csv["st2"] > 2])  # filter by st2 > 2

# filter specific rows and columns
print(
    "df_json_filtered2:",
    "\n",
    df_json.loc[
        "735 Dolores St":"332 Hill St", "Country":"ID"
    ],  # filter by index and column
)

# sort the DataFrame by a column
print("df_csv_sorted:", "\n", df_csv.sort_values("st2"))  # sort by st2

# select specific rows and columns
print(
    "df_json_filtered_by_rows_and_colums", "\n", df_json.iloc[1:3, 1:3]
)  # select rows 1 and 2 and columns 1 and 2


# add columns
len(df_csv.index)  # get the number of rows
df_csv["new_column"] = df_csv.shape[0] * [
    "new_value"
]  # add a new column populated with "new_value"
print("df_csv_added_column:", "\n", df_csv)


# update values
df_csv["new_column"] = (
    df_csv["st1"].astype(str) + " " + df_csv["st3"].astype(str)
)  # update the new column
print("df_csv_updated_column:", "\n", df_csv)


# add a row
df_csv.loc["new_row"] = ["new_value"] * df_csv.shape[1]  # add a new row
print("df_csv_added_row:", "\n", df_csv)

# apply a function to a column
df_csv["st1"] = (
    df_csv["st1"].astype(str).apply(lambda x: x.upper())
)  # apply a function to st1
print("df_csv_upper:", "\n", df_csv)

# set index of the DataFrame
df_csv.set_index("st1", inplace=True)  # set st1 as the index

# delete a column or row
df_csv.drop(
    "st2", axis=1, inplace=True
)  # axis=1 means column and axis=0 means row // inplace=True means that the changes are applied to the DataFrame
print("df_csv_deleted_column:", "\n", df_csv)

# delete by index
df_csv.drop(
    df_csv.index[0:3], axis=0, inplace=True
)  # delete the first 3 rows, 0 means row
print("df_csv_deleted_rows:", "\n", df_csv)
