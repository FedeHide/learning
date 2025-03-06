//? Arrays in TypeScript

// There are two ways to declare an array in TypeScript
//     let list: number[] = [1, 2, 3];
//     let list: Array<number> = [1, 2, 3];

//! the first one is more common and recommended


//* Readonly Arrays: are arrays that can't be modified
let list: readonly number[] = [1, 2, 3];
// list.push(4); //! Error: Property 'push' does not exist on type 'readonly number[]'


//* objects array
let users: { name: string, age: number }[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Eve", age: 28 }
];


//* tuples: fixed-length arrays
let myTuple: [string, number];
myTuple = ["hello", 10];


//* multidimensional arrays
let multiArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];
