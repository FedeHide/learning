## reverse string challenge
# Write a function that takes a string as input and returns the string reversed.


def reverse_string(text: str) -> str:
    return text[::-1]


print(reverse_string("Hello World"))


def reverse_string_hard(text):
    reversed = ""

    for i in range(len(text) - 1, -1, -1):
        reversed += text[i]

    return "".join(reversed)


print(reverse_string_hard("Hello fucking World"))
