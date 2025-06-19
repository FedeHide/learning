def reverse_string(text):
    if not isinstance(text, str):
        raise ValueError("Input must be a string")
    if len(text) == 0:
        raise ValueError("String cannot be empty")
    print(text[::-1])


reverse_string("Hello")
