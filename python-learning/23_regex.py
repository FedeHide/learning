### regex - Regular Expressions
# Regular expressions are used to identify whether a pattern exists in a given sequence of characters (string) or not.
# They help in manipulating, searching, and editing strings.

# Python has a built-in package called re, which can be used to work with Regular Expressions.
# Import the re module:
import re

my_string = "the black cat is bigger than the white cat"

## ? Methods

# * match() - Determine if the RE matches at the beginning of the string.
# Syntax: re.match(pattern, string)
# Return value: Returns a match object if there is a match, otherwise None.

# Example:
pattern = "the"
result = re.match(pattern, my_string)
print(result)  # <re.Match object; span=(0, 3), match='the'>

# span=(0, 3) - The match is found at the start of the string.
# match='the' - The match is found at the start of the string.

# If the match is not found at the start of the string, it returns None.


# * search() - Scan through a string, looking for any location where this RE matches.
# Syntax: re.search(pattern, string)
# Return value: Returns a match object if there is a match, otherwise None.

# Example:
pattern = "cat"
result = re.search(pattern, my_string)
print(result)  # <re.Match object; span=(10, 13), match='cat'>

# span=(10, 13) - The match is found at index 10 to 13.
# match='cat' - The match is found at index 10 to 13.

# If the match is not found, it returns None.


# * findall() - Find all substrings where the RE matches, and return them as a list.
# Syntax: re.findall(pattern, string)
# Return value: Returns a list of all matches.

# Example:
pattern = "cat"
result = re.findall(pattern, my_string)
print(result)  # ['cat', 'cat']

# The pattern "cat" is found twice in the string.


# * finditer() - Find all substrings where the RE matches, and return them as an iterator.
# Syntax: re.finditer(pattern, string)
# Return value: Returns an iterator containing all matches.

# Example:
pattern = "cat"
result = re.finditer(pattern, my_string)
for match in result:
    print(
        match
    )  # <re.Match object; span=(10, 13), match='cat'>, <re.Match object; span=(34, 37), match='cat'>

# The pattern "cat" is found twice in the string.


# * split() - Split the string where there is a match and return a list.
# Syntax: re.split(pattern, string)
# Return value: Returns a list of strings.

# Example:
pattern = "cat"
result = re.split(pattern, my_string)
print(result)  # ['the black ', ' is bigger than the white ', '']

# The string is split at the pattern "cat".
# The pattern "cat" is removed from the string.


# * sub() - Replace the matches with the text of your choice.
# Syntax: re.sub(pattern, replace, string)
# Return value: Returns a string with the replaced text.

# Example:
pattern = "cat"
replace = "dog"
result = re.sub(pattern, replace, my_string)
print(result)  # the black dog is bigger than the white dog

# The pattern "cat" is replaced with "dog" in the string.


## ? Flags
# Flags are used to modify the behavior of a regular expression.

# - re.IGNORECASE - Perform case-insensitive matching.
pattern = "Cat"
result = re.findall(pattern, my_string, re.IGNORECASE)
print(result)  # ['cat', 'cat']

# The pattern "Cat" is matched with "cat" in the string.


# - re.MULTILINE - Treats beginning and end characters (^ and $) as working across multiple lines.
pattern = "^the"
result = re.findall(pattern, my_string, re.MULTILINE)
print(result)  # ['the']


# - re.DOTALL - Allows the dot (.) to match newline characters.
pattern = "cat."
result = re.findall(pattern, my_string, re.DOTALL)
print(result)  # ['cat ', 'cat']

# The pattern "cat." matches "cat " and "cat" in the string.


# - re.VERBOSE - Allows you to write regular expressions that look nicer and are more readable.
pattern = """
c # match c
a # match a
t # match t
"""
result = re.findall(pattern, my_string, re.VERBOSE)
print(result)  # []

# The pattern "cat" is not matched with "c", "a", and "t" in the string.


## ? Patterns

# * Metacharacters
# Metacharacters are characters that are interpreted in a special way by a RegEx engine.
# They are used to define the search criteria.

# - . - A period matches any single character except a newline.
pattern = "c.t"
result = re.findall(pattern, my_string)
print(result)  # ['cat']

# The pattern "c.t" matches "cat" in the string.


# - ^ - A caret matches the start of the string.
pattern = "^the"
result = re.findall(pattern, my_string)
print(result)  # ['the']

# The pattern "^the" matches "the" at the start of the string.


# - $ - A dollar matches the end of the string.
pattern = "cat$"
result = re.findall(pattern, my_string)
print(result)  # ['cat']

# The pattern "cat$" matches "cat" at the end of the string.


# - * - An asterisk matches zero or more occurrences of the pattern left to it.
pattern = "c*t"
result = re.findall(pattern, my_string)
print(result)  # ['ct', 'cat']


# - + - A plus matches one or more occurrences of the pattern left to it.
pattern = "c+t"
result = re.findall(pattern, my_string)
print(result)  # ['cat']


# - ? - A question mark matches zero or one occurrence of the pattern left to it.
pattern = "c?t"
result = re.findall(pattern, my_string)
print(result)  # ['ct', 'cat']


# - {} - Curly braces are used to specify the number of occurrences of a pattern.
pattern = "c{1}t"
result = re.findall(pattern, my_string)


# - [] - Square brackets are used to specify a set of characters.
pattern = "[b-w]"
result = re.findall(pattern, my_string)
print(
    result
)  # ['b', 'c', 'k', 'c', 't', 'i', 'b', 'g', 'g', 'r', 't', 'h', 'n', 't', 'h', 'w', 'h', 't', 'c', 't']

# The pattern "[b-w]" matches all characters from b to w in the string.


# - | - A pipe is used to match one of many expressions.
pattern = "cat|dog"
result = re.findall(pattern, my_string)
print(result)  # ['cat', 'cat']

# The pattern "cat|dog" matches "cat" and "dog" in the string.


# * Special Sequences
# Special sequences are used to match specific types of patterns.

# - \d - Matches any digit (0-9).
pattern = "\d"
result = re.findall(pattern, my_string)
print(result)  # []


# - \D - Matches any non-digit character.
pattern = "\D"
result = re.findall(pattern, my_string)
print(
    result
)  # ['t', 'h', 'e', ' ', 'b', 'l', 'a', 'c', 'k', ' ', 'c', 'a', 't', ' ', 'i', 's', ' ', 'b', 'i', 'g', 'g', 'e', 'r', ' ', 't', 'h', 'a', 'n', ' ', 't', 'h', 'e', ' ', 'w', 'h', 'i', 't', 'e', ' ', 'c', 'a', 't']


# - \s - Matches any whitespace character.
pattern = "\s"
result = re.findall(pattern, my_string)
print(result)  # [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']


# - \S - Matches any non-whitespace character.
pattern = "\S"
result = re.findall(pattern, my_string)
print(
    result
)  # ['t', 'h', 'e', 'b', 'l', 'a', 'c', 'k', 'c', 'a', 't', 'i', 's', 'b', 'i', 'g', 'g', 'e', 'r', 't', 'h', 'a', 'n', 't', 'h', 'e', 'w', 'h', 'i', 't', 'e', 'c', 'a', 't']


# - \w - Matches any word character (alphanumeric character).
pattern = "\w"
result = re.findall(pattern, my_string)
print(
    result
)  # ['t', 'h', 'e', 'b', 'l', 'a', 'c', 'k', 'c', 'a', 't', 'i', 's', 'b', 'i', 'g', 'g', 'e', 'r', 't', 'h', 'a', 'n', 't', 'h', 'e', 'w', 'h', 'i', 't', 'e', 'c', 'a', 't']


# - \W - Matches any non-word character.
pattern = "\W"
result = re.findall(pattern, my_string)
print(result)  # [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']


# - \b - Matches the empty string at the beginning or end of a word.
pattern = r"\bcat"
result = re.findall(pattern, my_string)
print(result)  # ['cat', 'cat']


# - \B - Matches the empty string not at the beginning or end of a word.
pattern = r"\Bcat"
result = re.findall(pattern, my_string)
print(result)  # []


# * Sets
# A set is a set of characters inside a pair of square brackets [] with a special meaning.

# - [arn] - Matches any character in the set (a, r, or n).
pattern = "[arn]"
result = re.findall(pattern, my_string)
print(result)  # ['a', 'n', 'r', 'a', 'n', 'r', 'a', 'n', 'n']

# The pattern "[arn]" matches all characters a, r, and n in the string.


# - [a-n] - Matches any character in the range (a to n).
pattern = "[a-n]"
result = re.findall(pattern, my_string)
print(
    result
)  # ['h', 'e', 'b', 'c', 'k', 'c', 'a', 'i', 'b', 'g', 'g', 'e', 'h', 'e', 'i', 'e', 'a', 'n', 'h', 'e', 'h', 'i', 'e', 'c', 'a']

# The pattern "[a-n]" matches all characters from a to n in the string.


# - [^arn] - Matches any character not in the set (a, r, or n).
pattern = "[^arn]"
result = re.findall(pattern, my_string)
print(
    result
)  # ['t', 'h', 'e', ' ', 'b', 'l', 'c', 'k', ' ', 'c', 't', ' ', 'i', 's', ' ', 'b', 'i', 'g', 'g', 'e', 'r', ' ', 't', 'h', 'n', ' ', 't', 'h', 'e', ' ', 'w', 'h', 'i', 't', 'e', ' ', 'c', 't']

# The pattern "[^arn]" matches all characters except a, r, and n in the string.


# * Groups
# A group is created by placing the characters to be grouped inside a pair of parentheses ().

# - (a|b|c) - Matches either a, b, or c.
pattern = "(cat|dog)"
result = re.findall(pattern, my_string)
print(result)  # ['cat', 'cat']

# The pattern "(cat|dog)" matches "cat" and "dog" in the string.


# * Quantifiers
# Quantifiers specify the number of occurrences of a character.

# - a{2} - Matches exactly two occurrences of a.
pattern = "c{1}"
result = re.findall(pattern, my_string)
print(result)  # ['c', 'c']

# The pattern "c{1}" matches all occurrences of c in the string.


# - a{2,3} - Matches between two and three occurrences of a.
pattern = "c{1,2}"
result = re.findall(pattern, my_string)
print(result)  # ['c', 'c']

# The pattern "c{1,2}" matches all occurrences of c in the string.


# - a{2,} - Matches two or more occurrences of a.
pattern = "c{1,}"
result = re.findall(pattern, my_string)
print(result)  # ['c', 'c']

# The pattern "c{1,}" matches all occurrences of c in the string.


# - a* - Matches zero or more occurrences of a.
pattern = "c*"
result = re.findall(pattern, my_string)
print(result)

# The pattern "c*" matches all occurrences of c in the string.


# - a+ - Matches one or more occurrences of a.
pattern = "c+"
result = re.findall(pattern, my_string)
print(result)  # ['c', 'c']

# The pattern "c+" matches all occurrences of c in the string.


# - a? - Matches zero or one occurrence of a.
pattern = "c?"
result = re.findall(pattern, my_string)
print(result)  # ['c', 'c']

# The pattern "c?" matches all occurrences of c in the string.


# * Examples
# Find all words that start with the letter "b".
pattern = r"\b[b]\w+"
result = re.findall(pattern, my_string)
print(result)  # ['black', 'bigger']

# The pattern "\b[b]\w+" matches "black" and "bigger" in the string.


# Find all words that end with the letter "t".
pattern = r"\w+[t]\b"
result = re.findall(pattern, my_string)
print(result)  # ['cat', 'cat']

# The pattern "\w+[t]\b" matches "cat" and "cat" in the string.
