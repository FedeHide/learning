function twoSum(arr, target) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([i, j])
            }
        }
    }
    result.length > 0 ? console.log(result) : console.log('not a match')
}

twoSum([2, 7, 11, 15, 5, 4], 200)
