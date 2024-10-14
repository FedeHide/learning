### Dates
# Python has a module named datetime to work with dates and times.

# import datetime  # import datetime module
from datetime import datetime  # import date class from datetime module

# A date in Python is not a data type of its own, but we can import a module named datetime to work with dates as date objects.

### Get current date and time
now = datetime.now()  # get current date and time
print("now:", now)


# The date contains year, month, day, hour, minute, second, and microsecond.
# The datetime module has many methods to return information about the date object.

# Get the current year
year = now.year
print("year:", year)

# Get the current month
month = now.month
print("month:", month)

# Get the current day
day = now.day
print("day:", day)

# Get the current hour
hour = now.hour
print("hour:", hour)

# Get the current minute
minute = now.minute
print("minute:", minute)

# Get the current second
second = now.second
print("second:", second)

# Get the current microsecond
microsecond = now.microsecond
print("microsecond:", microsecond)


### Creating Date Objects
# To create a date, we can use the datetime() class (constructor) of the datetime module.
# The datetime() class requires three parameters to create a date: year, month, day.
# The datetime() class also takes parameters for time and timezone (hour, minute, second, microsecond, tzone), but they are optional, and has a default value of 0, (None for timezone).

# Create a date object
my_custom_date = datetime(2020, 5, 17)
print("my_custom_date:", my_custom_date)


### The timestamp is the number of seconds from the Unix epoch (January 1, 1970) to the time specified.
# The timestamp is a way to represent time independent of timezones.
# A Unix timestamp is the number of seconds between a particular date and the Unix epoch.
# This is important because it allows you to perform date calculations without worrying about timezones.

# Get the timestamp
timestamp = datetime.timestamp(now)
print("timestamp:", timestamp)


### Converting Timestamps
fromtimestamp = datetime.fromtimestamp(timestamp)
print("fromtimestamp:", fromtimestamp)


### Formatting Dates
# The date object has a method for formatting date objects into readable strings.

# Format date using strftime() method that formats date objects into readable strings.
strftime = now.strftime("%d-%m-%Y")
print("strftime:", strftime)

# A reference of all the legal format codes:
# %a	Weekday, short version	Wed
# %A	Weekday, full version	Wednesday
# %w	Weekday as a number 0-6, 0 is Sunday	3
# %d	Day of month 01-31	31
# %b	Month name, short version	Dec
# %B	Month name, full version	December
# %m	Month as a number 01-12	12
# %y	Year, short version, without century	18
# %Y	Year, full version	2018
# %H	Hour 00-23	17
# %I	Hour 00-12	05
# %p	AM/PM	PM
# %M	Minute 00-59	41
# %S	Second 00-59	08
# %f	Microsecond 000000-999999	548513
# %z	UTC offset	+0100
# %Z	Timezone	CST
# %j	Day number of year 001-366	365
# %U	Week number of year, Sunday as the first day of week, 00-53	52
# %W	Week number of year, Monday as the first day of week, 00-53	52
# %c	Local version of date and time	Mon Dec 31 17:41:00 2018
# %x	Local version of date	12/31/18
# %X	Local version of time	17:41:00
# %%	A % character	%

# Example
# Display the name of the month:
month_name = now.strftime("%B")
print("month_name:", month_name)


### Import time class from datetime module
from datetime import time

# Creating Time Objects
# To create a time, we can use the time() class (constructor) of the datetime module.
# The time() class requires three parameters to create a time: hour, minute, second.
# The time() class also takes parameters for timezone (hour, minute, second, microsecond, tzone),
# but they are optional, and has a default value of 0, (None for timezone).

# Create a time object with current time
current_time = datetime.now().time()
print("current_time:", current_time)

# Create a time object
my_custom_time = time(17, 41, 0)
print("my_custom_time:", my_custom_time)


### Import date class from datetime module
from datetime import date

# Creating Date Objects
# To create a date, we can use the date() class (constructor) of the datetime module.
# The date() class requires three parameters to create a date: year, month, day.

# Create a date object
my_custom_date = date(2020, 5, 17)
print("my_custom_date:", my_custom_date)


current_date = date.today()
print("current_date:", current_date)
print("current_date-year:", current_date.year)
print("current_date-month:", current_date.month)
print("current_date-day:", current_date.day)


### Import timedelta class from datetime module
from datetime import timedelta


# Timedelta is a duration expressing the difference between two dates.
# When we subtract one date from another, the result is a timedelta object.
# We can add or subtract a timedelta object from a date to get a date in the future or the past.

init_timedelta = timedelta(days=365, hours=8, minutes=15)
print("timedelta:", init_timedelta)


### Date and Time Arithmetic
# We can perform arithmetic on date objects to check for past and future dates.
# We can also calculate the difference between two dates.
# The result of the arithmetic will be a timedelta object.

# arithmetic on date objects
today = date.today()
print("today:", today)

# Calculate the difference between two dates
diff = today - my_custom_date
print(
    f"diff between today({today}) and my_custom_date ({my_custom_date}): {diff.days} days"
)

# Calculate with timedelta
future_date = today + init_timedelta
print("future_date:", future_date)
past_date = today - init_timedelta
print("past_date:", past_date)

## you can do arithmetic on equivalent time objects as well as datetime objects.
## Timedelta objects can be added or subtracted from date objects. The result will be a new date object.
