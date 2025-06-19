def reverse_number(number):
    if not isinstance(number, (int, float)):
        raise ValueError("Input must be a number")

    sign = -1 if number < 0 else 1
    if isinstance(number, int):
        reversed_int_str = str(abs(int(number)))[::-1]
        print(int(reversed_int_str) * sign)
    elif isinstance(number, float):
        reversed_float_str = str(abs(float(number)))[::-1]
        print(float(reversed_float_str) * sign)


reverse_number(-123.23)
