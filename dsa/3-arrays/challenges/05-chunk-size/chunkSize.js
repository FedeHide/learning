function chunkSize(arr, chunkSize) {
    let matrix = []
    for (let i = 0; i < chunkSize; i++) {
        matrix.push([])
    }

    const division = Math.floor(arr.length / chunkSize)
    const modulus =  arr.length % chunkSize
    
    for (let i = 0; i < matrix.length; i++) {
        if (i < modulus) {
            for (let j = 0; j <= division; j++) {
                matrix[i].push(arr[0])
                arr.shift()
            }
        } else {
            for (let j = 0; j < division; j++) {
                matrix[i].push(arr[0])
                arr.shift()
            }
        }
    }
    console.log(matrix)
}

chunkSize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8)
// chunkSize([1, 2, 3, 4, 5, 6, 7, 8], 3)
// chunkSize([1, 2, 3, 4, 5], 2)


function chunkSize2(arr, numberOfGroups) {
    const result = Array.from({ length: numberOfGroups }, () => []);
    const division = Math.floor(arr.length / numberOfGroups);
    const modulus = arr.length % numberOfGroups;

    let index = 0;
    for (let i = 0; i < numberOfGroups; i++) {
        const chunkLength = i < modulus ? division + 1 : division;
        result[i] = arr.slice(index, index + chunkLength);
        index += chunkLength;
    }

    console.log(result);
}

chunkSize2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 8)
// chunkSize2([1, 2, 3, 4, 5, 6, 7, 8], 3)
// chunkSize2([1, 2, 3, 4, 5], 2)