def chunk_size(arr, chunk_size):
    matrix = [[] for _ in range(chunk_size)]

    division = len(arr) // chunk_size
    modulus = len(arr) % chunk_size

    for i in range(len(matrix)):
        if i < modulus:
            for _ in range(division + 1):
                matrix[i].append(arr.pop(0))
        else:
            for _ in range(division):
                matrix[i].append(arr.pop(0))

    print(matrix)


chunk_size([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8)
# chunk_size([1, 2, 3, 4, 5, 6, 7, 8], 3)
# chunk_size([1, 2, 3, 4, 5], 2)


def chunk_size2(arr, number_of_groups):
    result = [[] for _ in range(number_of_groups)]
    division = len(arr) // number_of_groups
    modulus = len(arr) % number_of_groups

    index = 0
    for i in range(number_of_groups):
        chunk_length = division + 1 if i < modulus else division
        result[i] = arr[index : index + chunk_length]
        index += chunk_length

    print(result)


chunk_size2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8)
# chunk_size2([1, 2, 3, 4, 5, 6, 7, 8], 3)
# chunk_size2([1, 2, 3, 4, 5], 2)
