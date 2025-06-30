def two_sum(arr, target):
    result = []

    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                result.append([i, j])

    print(result) if len(result) > 0 else print("not a match")


two_sum([2, 7, 11, 15, 5, 4], 9)
