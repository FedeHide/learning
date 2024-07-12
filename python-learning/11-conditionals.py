### Conditional Statements
# Conditional statements are used to perform different actions based on different conditions.
# Python supports the following conditional statements:

### if statement
# The if statement is used to execute a block of code only if a specified condition is true.
# Syntax:
# if condition:
#     block

# Example:
a = 33
b = 200
if b > a:
    print("b is greater than a")

### if...else statement
# The if...else statement is used to execute a block of code if the condition is true, and another block if the condition is false.
# Syntax:
# if condition:
#     block1
# else:
#     block2

# Example:
a = 200
b = 33
if b > a:
    print("b is greater than a")
else:
    print("b is not greater than a")

### if...elif...else statement
# The if...elif...else statement is used to execute a block of code if the first condition is true, and another block if the first condition is false but the second condition is true, and another block if both conditions are false.
# Syntax:
# if condition1:
#     block1
# elif condition2:
#     block2
# else:
#     block3

# Example:
a = 200
b = 33
if b > a:
    print("b is greater than a")
elif a == b:
    print("a and b are equal")
else:
    print("a is greater than b")

### Short Hand If
# If you have only one statement to execute, you can put it on the same line as the if statement.
# Syntax:
# if condition: block

# Example:
if a > b: print("a is greater than b")

### Short Hand If...Else
# If you have only one statement to execute, one for if, and one for else, you can put it all on the same line.
# Syntax:
# print("A") if a > b else print("B")

# Example:
print("a is greater than b") if a > b else print("a is not greater than b")

### And
# The and keyword is a logical operator, and is used to combine conditional statements.
# Syntax:
# if condition1 and condition2:
#     block

# Example:
a = 200
b = 33
c = 500
if a > b and c > a:
    print("Both conditions are True")

### Or
# The or keyword is a logical operator, and is used to combine conditional statements.
# Syntax:

# if condition1 or condition2:
#     block

# Example:
if a > b or a > c:
    print("At least one of the conditions is True")


### Nested If
# You can have if statements inside if statements, this is called nested if statements.
# Syntax:
# if condition1:
#     block1
#     if condition2:
#         block2

# Example:
x = 41
if x > 10:
    print("Above ten,")
    if x > 20:
        print("and also above 20!")
    else:
        print("but not above 20.")

### The pass Statement
# if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error.
# Syntax:
# if condition:
#     pass

# Example:
a = 33
b = 200
if b > a:
    pass
# having an empty if statement like this, would raise an error without the pass statement