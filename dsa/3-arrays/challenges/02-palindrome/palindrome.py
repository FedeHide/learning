import re


def is_a_palindrome(text):
    if not isinstance(text, str):
        raise ValueError("Input must be a string")
    if len(text) == 0:
        raise ValueError("String cannot be empty")
    cleaned_text = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
    reversed_text = cleaned_text[::-1]
    print(reversed_text == cleaned_text)


is_a_palindrome("Menem !")
