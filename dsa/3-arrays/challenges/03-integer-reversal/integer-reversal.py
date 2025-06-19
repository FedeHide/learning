def reverse_number(number):
    if not isinstance(number, (int, float)):
        raise ValueError("Input must be a number")

    if isinstance(number, int):
        print(int(str(number)[::-1]))
    elif isinstance(number, float):
        print(float(str(number)[::-1]))


reverse_number(123)
