//?/ Arrays: ordered collections of values


//*/ Array Literals
let literalArray = ['JavaScript', 'TypeScript', 'Python'];
console.log("array literal:", literalArray);


//*/ Array Constructor
let constructorArray = new Array('JavaScript', 'TypeScript', 'Python');
console.log("array constructor:", constructorArray);


//*/ Array Properties
console.log("\n", "Array Properties");

let array1 = ['JavaScript', 'TypeScript', 'Python'];
console.log("array length:", array1.length); // 3



//*/ Accessing Array Elements
console.log("\n", "Accessing Array Elements");

// Access the First Element of an Array
console.log("first element:", array1[0]); // JavaScript

// Access the Last Element of an Array
console.log("last element:", array1[array1.length - 1]); // Python


//*/ Modifying Array Elements
console.log("\n", "Modifying Array Elements");

// Modify the First Element of an Array
array1[0] = 'Java';
console.log("modified first element:", array1); // [ 'Java', 'TypeScript', 'Python' ]

// Modify the Last Element of an Array
array1[array1.length - 1] = 'C#';
console.log("modified last element:", array1); // [ 'Java', 'TypeScript', 'C#' ]


//*/ Matrix: an array of arrays
console.log("\n", "Matrix");

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("matrix:", matrix);


//*/ Array Methods: are used to work with arrays.
console.log("\n", "Array Methods");

let array2 = ['JavaScript', 'TypeScript', 'Python'];

// concat(): joins two or more arrays, and returns a copy of the joined arrays.
console.log("concat(['Java', 'C#']):", array2.concat(['Java', 'C#'])); // [ 'JavaScript', 'TypeScript', 'Python', 'Java', 'C#' ]

// copyWithin(): copies array elements within the array, to and from specified positions.
console.log("copyWithin(0, 1):", array2.copyWithin(0, 1)); // [ 'TypeScript', 'Python', 'Python' ]

// entries(): returns a key/value pair Array Iteration Object.
console.log("entries():", array2.entries()); // Object [Array Iterator] {}

// every(): checks if every element in an array pass a test.
console.log("every(item => item.length > 10):", array2.every((item) => item.length > 10)); // false

// fill(): fill the elements in an array with a static value.
console.log("fill('Java', 1, 2):", array2.fill('Java', 1, 2)); // [ 'JavaScript', 'Java', 'Python' ]

// filter(): creates a new array with every element in an array that pass a test.
console.log("filter(item => item.length > 10):", array2.filter((item) => item.length > 10)); // []

// find(): returns the value of the first element in an array that pass a test.
console.log("find(item => item.length > 10):", array2.find((item) => item.length > 10)); // undefined

// findIndex(): returns the index of the first element in an array that pass a test.
console.log("findIndex(item => item.length > 10):", array2.findIndex((item) => item.length > 10)); // -1

// forEach(): calls a function for each array element.
array2.forEach((item) => console.log(`forEach(array[${array2.indexOf(item)}]):`, item));

// includes(): checks if an array contains a specified element.
console.log("includes('Python'):", array2.includes('Python')); // true

// indexOf(): search the array for an element and returns its position.
console.log("indexOf('Python'):", array2.indexOf('Python')); // 2

// join(): joins all elements of an array into a string.
console.log("join():", array2.join()); // JavaScript,TypeScript,Python

// keys(): returns a Array Iteration Object, containing the keys of the original array.
console.log("keys():", array2.keys()); // Object [Array Iterator] {}

// lastIndexOf(): search the array for an element, starting at the end, and returns its position.
console.log("lastIndexOf('Python'):", array2.lastIndexOf('Python')); // 2

// map(): creates a new array with the result of calling a function for each array element.
console.log("map(item => item.length):", array2.map((item) => item.length)); // [ 10, 10, 6 ]

// pop(): removes the last element of an array, and returns that element.
console.log("pop():", array2.pop()); // Python

// push(): adds new elements to the end of an array, and returns the new length.
console.log("push('Python'):", array2.push('Python')); // 3

// reduce(): reduce the values of an array to a single value (going left-to-right).
console.log("reduce():", array2.reduce((total, item) => total + item.length, 0)); // 26

// reduceRight(): reduce the values of an array to a single value (going right-to-left).
console.log("reduceRight():", array2.reduceRight((total, item) => total + item.length, 0)); // 26

// reverse(): reverses the elements in an array.
console.log("reverse():", array2.reverse()); // [ 'Python', 'TypeScript', 'JavaScript' ]

// shift(): removes the first element of an array, and returns that element.
console.log("shift():", array2.shift()); // Python

// slice(): selects a part of an array, and returns the new array.
console.log("slice(0, 1):", array2.slice(0, 1)); // [ 'TypeScript' ]

// some(): checks if any of the elements in an array pass a test.
console.log("some(item => item.length > 10):", array2.some((item) => item.length > 10)); // true

// sort(): sorts the elements of an array.
console.log("sort():", array2.sort()); // [ 'JavaScript', 'TypeScript' ]

// splice(): adds/removes elements from an array.
console.log("splice(1, 0, 'Python'):", array2.splice(1, 0, 'Python')); // []

// toString(): converts an array to a string, and returns the result.
console.log("toString():", array2.toString()); // JavaScript,TypeScript

// unshift(): adds new elements to the beginning of an array, and returns the new length.
console.log("unshift('Python'):", array2.unshift('Python')); // 3

// values(): returns a Array Iteration Object, containing the values of the original array.
console.log("values():", array2.values()); // Object [Array Iterator] {}

// indexOf(): search the array for an element and returns its position.
console.log("indexOf('Python'):", array2.indexOf('Python')); // 0
