#!./venv/bin/python
from bokeh.plotting import figure
from bokeh.io import output_file, show
import pandas

# you can prepare some data, this data must be the same length
# x = [1, 2, 3, 4, 5]
# y = [6, 7, 8, 9, 10]

# ? csv file example
# Read data from a csv file
df_bachelors = pandas.read_csv("schemas/bokeh_bachelors_data.csv")
bachelor_years_axis = df_bachelors["Year"]
architecture_bachelors_count = df_bachelors["Architecture"]

# Create a figure object
bachelors_figure = figure()

bachelors_figure.title.text = "Architecture Bachelors awarded each year"
bachelors_figure.title.text_color = "Gray"
bachelors_figure.title.text_font = "times"
bachelors_figure.title.text_font_style = "bold"
bachelors_figure.title.text_font_size = "20pt"
bachelors_figure.title.align = "center"
bachelors_figure.xaxis.axis_label = "Year"
bachelors_figure.yaxis.axis_label = "Number of Bachelors"

# create a line plot
bachelors_figure.line(bachelor_years_axis, architecture_bachelors_count)

# prepare the output file
output_file("bachelors.html")

# Write the plot in the figure object
show(bachelors_figure)


# ? excel file example
# Read data from an excel file
df_weather = pandas.read_excel("schemas/bokeh_weather_data.xlsx", sheet_name=0)
df_weather["Temperature"] = df_weather["Temperature"] / 10
df_weather["Pressure"] = df_weather["Pressure"] / 10

# Create a figure object
weather_figure = figure()

weather_figure.title.text = "Temperature and Air Pressure"
weather_figure.title.text_color = "Gray"
weather_figure.title.text_font = "times"
weather_figure.title.text_font_style = "bold"
weather_figure.title.text_font_size = "20pt"
weather_figure.title.align = "center"
weather_figure.xaxis.axis_label = "Temperature (°C)"
weather_figure.yaxis.axis_label = "Pressure (hPa)"

# create a circle plot
weather_figure.scatter(
    df_weather["Temperature"], df_weather["Pressure"], marker="circle", size=0.5
)

# prepare the output file
output_file("weather.html")

# Write the plot in the figure object
show(weather_figure)
