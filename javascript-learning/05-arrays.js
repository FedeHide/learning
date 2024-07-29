//?/ Arrays: ordered collections of values


//*/ Array Literals
let a = ['JavaScript', 'TypeScript', 'Python'];


//*/ Array Constructor
let b = new Array('JavaScript', 'TypeScript', 'Python');


//*/ Array Properties
let c = ['JavaScript', 'TypeScript', 'Python'];
console.log(c.length); // 3


//*/ Accessing Array Elements
// Access the Elements of an Array

// Access the First Element of an Array
console.log(c[0]); // JavaScript

// Access the Last Element of an Array
console.log(c[c.length - 1]); // Python


//*/ Modifying Array Elements
// Modify the Elements of an Array

// Modify the First Element of an Array
c[0] = 'Java';
console.log(c); // [ 'Java', 'TypeScript', 'Python' ]

// Modify the Last Element of an Array
c[c.length - 1] = 'C#';
console.log(c); // [ 'Java', 'TypeScript', 'C#' ]


//*/ Matrix: an array of arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];


//*/ Array Methods: are used to work with arrays.
let d = ['JavaScript', 'TypeScript', 'Python'];

// concat(): joins two or more arrays, and returns a copy of the joined arrays.
console.log(d.concat(['Java', 'C#'])); // [ 'JavaScript', 'TypeScript', 'Python', 'Java', 'C#' ]

// copyWithin(): copies array elements within the array, to and from specified positions.
console.log(d.copyWithin(1, 0)); // [ 'JavaScript', 'JavaScript', 'TypeScript' ]

// entries(): returns a key/value pair Array Iteration Object.
console.log(d.entries()); // Object [Array Iterator] {}

// every(): checks if every element in an array pass a test.
console.log(d.every((item) => item.length > 10)); // false

// fill(): fill the elements in an array with a static value.
console.log(d.fill('JS')); // [ 'JS', 'JS', 'JS' ]

// filter(): creates a new array with every element in an array that pass a test.
console.log(d.filter((item) => item.length > 10)); // []

// find(): returns the value of the first element in an array that pass a test.
console.log(d.find((item) => item.length > 10)); // undefined

// findIndex(): returns the index of the first element in an array that pass a test.
console.log(d.findIndex((item) => item.length > 10)); // -1

// forEach(): calls a function for each array element.
d.forEach((item) => console.log(item));

// includes(): checks if an array contains a specified element.
console.log(d.includes('JavaScript')); // true

// indexOf(): search the array for an element and returns its position.
console.log(d.indexOf('TypeScript')); // 1

// join(): joins all elements of an array into a string.
console.log(d.join(' ')); // JavaScript TypeScript Python

// keys(): returns a Array Iteration Object, containing the keys of the original array.
console.log(d.keys()); // Object [Array Iterator] {}

// lastIndexOf(): search the array for an element, starting at the end, and returns its position.
console.log(d.lastIndexOf('Python')); // 2

// map(): creates a new array with the result of calling a function for each array element.
console.log(d.map((item) => item.length)); // [ 10, 10, 6 ]

// pop(): removes the last element of an array, and returns that element.
console.log(d.pop()); // Python

// push(): adds new elements to the end of an array, and returns the new length.
console.log(d.push('Python')); // 3

// reduce(): reduce the values of an array to a single value (going left-to-right).
console.log(d.reduce((total, item) => total + item.length, 0)); // 26

// reduceRight(): reduce the values of an array to a single value (going right-to-left).
console.log(d.reduceRight((total, item) => total + item.length, 0)); // 26

// reverse(): reverses the elements in an array.
console.log(d.reverse()); // [ 'Python', 'TypeScript', 'JavaScript' ]

// shift(): removes the first element of an array, and returns that element.
console.log(d.shift()); // Python

// slice(): selects a part of an array, and returns the new array.
console.log(d.slice(0, 2)); // [ 'TypeScript', 'JavaScript' ]

// some(): checks if any of the elements in an array pass a test.
console.log(d.some((item) => item.length > 10)); // true

// sort(): sorts the elements of an array.
console.log(d.sort()); // [ 'JavaScript', 'TypeScript' ]

// splice(): adds/removes elements from an array.
console.log(d.splice(0, 1)); // [ 'JavaScript' ]

// toString(): converts an array to a string, and returns the result.
console.log(d.toString()); // TypeScript

// unshift(): adds new elements to the beginning of an array, and returns the new length.
console.log(d.unshift('JavaScript')); // 2

// values(): returns a Array Iteration Object, containing the values of the original array.
console.log(d.values()); // Object [Array Iterator] {}

// indexOf(): search the array for an element and returns its position.
console.log(d.indexOf('TypeScript')); // 1
