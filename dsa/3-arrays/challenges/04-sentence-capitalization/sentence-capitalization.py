def sentence_capitalization(text):
    if not isinstance(text, str):
        raise ValueError("Input must be a string")
    if len(text) == 0:
        raise ValueError("String cannot be empty")

    print(" ".join(word.capitalize() for word in text.lower().split()))


sentence_capitalization("rukito BOnito")
