//? Generics: allow us to create reusable components that can work with multiple types instead of a single one. 

//* Example 1: Simple generic function
function identity<T>(arg: T): T {
    return arg;
}

const stringIdentity = identity<string>("myString");
const numberIdentity = identity<number>(123);
const booleanIdentity = identity<boolean>(true);


//* Example 2: Using generics with arrays
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const stringArray = loggingIdentity<string>(["myString"]);
const numberArray = loggingIdentity<number>([123]);
const booleanArray = loggingIdentity<boolean>([true]);


//! In general, generics allow us to define functions, classes, or interfaces that can operate on different types without losing type safety.
//! The return type of a generic function is not necessarily the same as the parameter type; it depends on the implementation.

//* Example 3: generic with different return type than parameter type
function mapArray<T, U>(arg: T[], fn: (item: T) => U): U[] {
    return arg.map(fn);
}

const listOfNumbers = [1, 2, 3, 4, 5];

const strings = mapArray<number, string>(listOfNumbers, (item) => item.toString());
const doubled = mapArray<number, number>(listOfNumbers, (item) => item * 2);
const isEven = mapArray<number, boolean>(listOfNumbers, (item) => item % 2 === 0);


//* Example 4: how generics help to avoid duplicated code

// Without generics
function printStringArray(array: string[]): string[] {
    array.forEach((item) => console.log(item));
    return array;
}

function printNumberArray(array: number[]): number[] {
    array.forEach((item) => console.log(item));
    return array;
}

function printBooleanArray(array: boolean[]): boolean[] {
    array.forEach((item) => console.log(item));
    return array;
}

// With generics
function printArray<T>(array: T[]): T[] {
    array.forEach((item) => console.log(item));
    return array;
}

//! In the above example, the printArray function can be used with any type of array, while the printStringArray, printNumberArray, and printBooleanArray functions are limited to their respective types.


//* Example

function filterArray<T>(array: T[], fn: (item: T) => boolean): T[] {
    return array.filter((item) => fn(item));
}

const numbersArray = [1, 2, 3, 4, 5];
const evenNumbers = filterArray<number>(numbersArray, (item) => item % 2 === 0); // [2, 4]

const stringsArray = ["banana", "apple", "orange"];
const longStrings = filterArray<string>(stringsArray, (item) => item.length > 5); // ["banana", "orange"]