### Loops
# Loops are used to iterate over a sequence of elements.
# Python has two primitive loop commands:

# 1. while loops
# 2. for loops

# The while Loop
# With the while loop we can execute a set of statements as long as a condition is true.
# Example:
i = 1
while i < 6:
    print(i)  # 1, 2, 3, 4, 5
    i += 1

# The break Statement
# With the break statement we can stop the loop even if the while condition is true.
# Example:
i = 1
while i < 6:
    print(i)  # 1, 2, 3
    if i == 3:
        break
    i += 1

# The continue Statement
# With the continue statement we can stop the current iteration, and continue with the next.
# Example:
i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)  # 1, 2, 4, 5, 6

# The else Statement
# With the else statement we can run a block of code once when the condition no longer is true.
# Example:
i = 1
while i < 6:
    print(i)  # 1, 2, 3, 4, 5
    i += 1
else:
    print("i is no longer less than 6")  # i is no longer less than 6

# The for Loop
# A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
# Example:
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)  # apple, banana, cherry

# Looping Through a String
# Even strings are iterable objects, they contain a sequence of characters.
# Example:
for x in "banana":
    print(x)  # b, a, n, a, n, a

# The break Statement
# With the break statement we can stop the loop before it has looped through all the items.
# Example:
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)  # apple, banana
    if x == "banana":
        break

# The continue Statement
# With the continue statement we can stop the current iteration of the loop, and continue with the next.
# Example:
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)  # apple, cherry

# The range() Function
# To loop through a set of code a specified number of times, we can use the range() function,
# The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default),
# and ends at a specified number.
# Example:
for x in range(6):
    print(x)  # 0, 1, 2, 3, 4, 5

# The range() function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: range(2, 6),
# which means values from 2 to 6 (but not including 6):
# Example:
for x in range(2, 6):
    print(x)  # 2, 3, 4, 5

# The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3):
# Example:
for x in range(2, 30, 3):
    print(x)  # 2, 5, 8, 11, 14, 17, 20, 23, 26, 29

# Else in For Loop
# The else keyword in a for loop specifies a block of code to be executed when the loop is finished.
# Example:
for x in range(6):
    print(x)  # 0, 1, 2, 3, 4, 5
else:
    print("Finally finished!")  # Finally finished!

# Nested Loops
# A nested loop is a loop inside a loop.
# The "inner loop" will be executed one time for each iteration of the "outer loop":
# Example:
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
    for y in fruits:
        print(
            x, y
        )  # red apple, red banana, red cherry, big apple, big banana, big cherry, tasty apple, tasty banana, tasty cherry

# The pass Statement
# for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.
# Example:
for x in [0, 1, 2]:
    pass  # having an empty for loop like this, would raise an error without the pass statement
